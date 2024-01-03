import React, { useState } from 'react'
import './deposit-modal.css'

function DepositModal({ setBp }) {
    const [amount, setAmount] = React.useState("")
    const toMoney = (num) => {
        return (amount > 0 ? "$": "") + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    const preset = (e) => { setAmount(e.target.innerHTML.replace('$', '')) }

    const changeAmount = (e) => {
        var input = e.target.value[e.target.value.length-1]
        console.log(input)
        if (!isNaN(input) && input != '.') {
            setAmount(e.target.value.replace(/,/g, "").replace('$', ''))
        } else if (input == "$") {
            setAmount("")
        }
    }

    const reviewTransfer = () => {
        // document.getElementById("dm-rt-button").disabled = true
        console.log(sessionStorage)
        fetch('http://localhost:3000/transfer', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: sessionStorage.getItem("id"),
                amount: amount,
                type: "deposit"
            }),
            cache: 'no-cache',
            cors: 'no-cors'
        })
            .then(response => response.json())
            .then(data => {
                if (data.acknowledged) {
                    setBp(prev => parseInt(prev) + parseInt(amount))
                    sessionStorage.setItem("bp", parseInt(sessionStorage.getItem("bp")) + parseInt(amount))
                    setAmount("")

                    document.querySelector('.dm-transaction').style.display = "none"
                    document.querySelector('.dm-initiated').style.display = "block"
                    document.querySelector('.dm-1').style.display = "block"
                    document.querySelector('.dm-2').style.display = "none"
                } else {
                    console.error(data)
                }
            })
            .catch(error => console.error(error))
    }

    const dm1 = () => {
        document.querySelector('.dm-1').style.display = "none"
        document.querySelector('.dm-2').style.display = "block"
    }

    const dm2 = () => {
        document.querySelector('.deposit-modal').style.display = "none"
        document.querySelector('.dm-transaction').style.display = "block"
        document.querySelector('.dm-initiated').style.display = "none"
        document.querySelector('.dm-1').style.display = "none"
        document.querySelector('.dm-2').style.display = "none"
    }


    const date = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const formattedDate = monthNames[date.getMonth()] + ' ' + date.getDate();
    const formattedDate2 = monthNames[date.getMonth()] + ' ' + (date.getDate() + 1);

    return (
        <div className='deposit-modal' style={{display: "none"}}>
            <div className='exit-button-container' onClick={(event) => {document.querySelector('.deposit-modal').style.display = "none"}}>
                <svg className="exit-button" fill="black" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13.414 12 6.293-6.293-1.414-1.414L12 10.586 5.707 4.293 4.293 5.707 10.586 12l-6.293 6.293 1.414 1.414L12 13.414l6.293 6.293 1.414-1.414L13.414 12Z" fill="var(--rh__text-color)"></path></svg>
            </div>

            <div className='deposit-modal-content'>
                <div className='dm-transaction'>
                    <h1 className='deposit-title'>Transfer money</h1>
                    <div className='deposit-inputs'>
                        <div className='deposit-input'>
                            <p className='deposit-label'>Amount</p>
                            <div className='input-container'>
                                <input id="amount" type='text' onChange={changeAmount} value={toMoney(amount)} placeholder='$0.00' />
                                <div className='buttons-row'>
                                    <div className='deposit-button' onClick={preset}>$50</div>
                                    <div className='deposit-button' onClick={preset}>$150</div>
                                    <div className='deposit-button' onClick={preset}>$500</div>
                                </div>
                            </div>
                        </div>
                        <div className='deposit-input'>
                            <p className='deposit-label'>From</p>
                            <div className='fake-input-container'>
                                <p>CHECKING • Checking 0000</p>
                            </div>
                        </div>
                        <div className='deposit-input'>
                            <p className='deposit-label'>To</p>
                            <div className='fake-input-container'>
                                <p>Brokerage • {toMoney(sessionStorage.getItem("bp"))}</p>
                            </div>
                        </div>
                        <div className='deposit-input'>
                            <p className='deposit-label'>Frequency</p>
                            <div className='fake-input-container'>
                                <p>Just once</p>
                            </div>
                        </div>


                    </div>

                    <p className='ddl'>Daily deposit limit: $50,000 <svg fill="black" height="16" role="img" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5.368 6.453C5.39 4.793 6.425 3.8 8.133 3.8c1.428 0 2.5.938 2.5 2.177 0 1.07-.526 1.512-1.156 1.939a3.16 3.16 0 0 1-.127.086l-.09.06-.022.016c-.429.285-.713.475-.713.874v.133H7.16v-.217c0-.82.462-1.183 1.071-1.575l.077-.05c.497-.335.89-.601.89-1.19 0-.202-.085-.874-1.093-.874-.833 0-1.26.462-1.316 1.4l-.007.112-1.414-.14v-.098Zm3.374 3.857H7.048v1.645h1.694V10.31Z" fill="var(--rh__text-color)"></path><path clip-rule="evenodd" d="M15 8A7 7 0 1 1 1 8a7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg></p>
                    <button id="dm-rt-button" onClick={reviewTransfer}>Review transfer</button>
                </div>

                <div className='dm-initiated'>
                    <div className='dm-1' style={{display: "none"}}>
                        <div className='dm-initiated-header'>
                            <h1>Deposit initiated</h1>
                            <p>+{toMoney(amount)} from CHECKING</p>
                        </div>
                        <div className='trans-box'>
                            <div className='dtb-left'>
                                <svg fill="#00c805" height="24" role="img" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Zm-11.5 4.914 7.707-7.707-1.414-1.414-6.293 6.293-2.793-2.793-1.414 1.414 4.207 4.207Z" fill="var(--rh__text-color)" fill-rule="evenodd"></path></svg>
                                <div style={{
                                    height: "44px",
                                    width: "2px",
                                    marginLeft: "11px",
                                    marginTop: "-5px",
                                    backgroundColor: "#00c805",
                                }}></div>
                            </div>
                            <div className='dtb-right'>
                                <p className='dtb-title'>Deposit initiated</p>
                                <p className='dtb-info'>{formattedDate} • Today</p>
                            </div>
                        </div>
                        <div className='trans-box'>
                            <div className='dtb-left'>
                                <div style={{
                                    width: "13px",
                                    height: "13px",
                                    margin: "2px 5px",
                                    backgroundColor: "#e3e9ed",
                                    borderRadius: "50%"
                                }}></div>
                            </div>
                            <div className='dtb-right'>
                                <p className='dtb-title'>Deposit initiated</p>
                                <p className='dtb-info'>{formattedDate2} • Available to trade and <br />withdraw</p>
                            </div>
                        </div>

                        <div className='dm-initiated-bottom'>
                            <p>Please make sure to maintain a balance of {toMoney(amount)} in your bank account until the funds are deducted to avoid any issues.</p>
                            <button onClick={dm1}>Continue</button>
                        </div>
                    </div>


                    <div className='dm-2' style={{display: "none"}}>
                        <svg class="web-app-emotion-cache-10b11lq" width="238" height="227" viewBox="0 0 238 227" fill="none"><circle cx="39.9385" cy="174.712" r="10.8065" transform="rotate(46.087 39.9385 174.712)" fill="#68DD68" stroke="black" stroke-width="1.06499"></circle><path d="M36.6518 164.062L34.1319 165.444C35.3293 165.097 35.5529 166.991 36.7996 167.936C38.0463 168.882 41.0399 168.015 42.2374 167.669C43.4348 167.322 46.129 166.543 47.5501 168.09C48.6869 169.329 48.9382 168.777 48.9218 168.347L47.0271 166.283L44.2344 164.48L40.4184 163.625L36.6518 164.062Z" fill="#68DD68"></path><path d="M48.0297 182.508C51.5152 179.261 50.9296 173.189 50.4863 171.12C47.3817 169.584 46.5097 175.807 40.4227 176.903C32.1126 178.398 27.5396 168.078 29.2173 176.587C30.5596 183.394 36.4588 185.564 39.2407 185.797C40.7181 186.054 44.5443 185.755 48.0297 182.508Z" fill="#039503"></path><circle cx="39.9385" cy="174.712" r="10.8065" transform="rotate(46.087 39.9385 174.712)" stroke="black" stroke-width="1.06499"></circle><circle cx="38.5503" cy="83.0412" r="4.53796" transform="rotate(1.15738 38.5503 83.0412)" fill="#68DD68" stroke="black" stroke-width="1.06499"></circle><path d="M43.4424 83.7938C43.1075 86.0805 41.2985 87.8278 39.1072 88.0808C38.9002 88.1191 38.6528 88.1141 38.4466 88.11C36.2201 88.065 34.3543 86.4983 33.7788 84.3631C34.1301 85.347 35.2769 85.7524 36.263 85.9423C37.5369 86.1803 38.8142 86.2486 40.0581 85.934C41.301 85.6618 42.6788 84.8402 43.4424 83.7938Z" fill="#36D136"></path><circle cx="38.5503" cy="83.0412" r="4.53796" transform="rotate(1.15738 38.5503 83.0412)" stroke="black" stroke-width="1.06499"></circle><circle cx="50.4643" cy="26.6236" r="2.66727" transform="rotate(-21.4149 50.4643 26.6236)" fill="#FFC657" stroke="black" stroke-width="1.06499"></circle><path d="M53.1586 25.0124C54.2571 26.9653 53.1063 28.7258 51.911 29.4558C51.8025 29.5357 51.6572 29.5927 51.536 29.6402C50.2277 30.1533 48.4793 29.6194 47.6088 27.9651C48.2466 28.602 48.9613 28.6351 49.5935 28.5364C50.408 28.4035 51.1718 28.1413 51.7972 27.5975C52.4352 27.0861 53.0395 25.9919 53.1586 25.0124Z" fill="#F58B00"></path><circle cx="50.4643" cy="26.6234" r="2.66727" transform="rotate(60 50.4643 26.6234)" stroke="black" stroke-width="1.06499"></circle><circle cx="186.792" cy="45.7657" r="8.84983" transform="rotate(1.15738 186.792 45.7657)" fill="#00C805" stroke="black" stroke-width="1.06499"></circle><path d="M195.846 47.1595C195.226 51.3909 191.879 54.624 187.824 55.0922C187.441 55.1631 186.983 55.1538 186.602 55.1461C182.482 55.0629 179.029 52.1639 177.964 48.2129C178.614 50.0336 180.736 50.7838 182.561 51.135C184.918 51.5756 187.282 51.7019 189.583 51.1197C191.883 50.616 194.433 49.0957 195.846 47.1595Z" fill="#009B04"></path><circle cx="186.792" cy="45.7657" r="8.84983" transform="rotate(1.15738 186.792 45.7657)" stroke="black" stroke-width="1.06499"></circle><circle cx="81.8894" cy="9.56992" r="8.84983" transform="rotate(1.15738 81.8894 9.56992)" fill="#00C805" stroke="black" stroke-width="1.06499"></circle><path d="M90.9429 10.9644C90.3231 15.1958 86.9758 18.4289 82.921 18.8972C82.538 18.968 82.0802 18.9588 81.6987 18.9511C77.5788 18.8678 74.1263 15.9688 73.0613 12.0178C73.7114 13.8385 75.8334 14.5887 77.6581 14.9399C80.0153 15.3805 82.3789 15.5068 84.6805 14.9246C86.9804 14.4209 89.5299 12.9006 90.9429 10.9644Z" fill="#009B04"></path><circle cx="81.8894" cy="9.56992" r="8.84983" transform="rotate(1.15738 81.8894 9.56992)" stroke="black" stroke-width="1.06499"></circle><circle cx="7.16606" cy="124.785" r="6.49322" transform="rotate(1.15738 7.16606 124.785)" fill="#00C805" stroke="black" stroke-width="1.06499"></circle><path d="M13.9457 125.829C13.4816 128.997 10.975 131.418 7.93873 131.769C7.65188 131.822 7.3091 131.815 7.02344 131.809C3.93833 131.747 1.35306 129.576 0.555512 126.617C1.04236 127.981 2.63135 128.543 3.99775 128.806C5.76289 129.136 7.53279 129.23 9.25624 128.794C10.9785 128.417 12.8876 127.279 13.9457 125.829Z" fill="#009B04"></path><circle cx="7.16606" cy="124.785" r="6.49322" transform="rotate(1.15738 7.16606 124.785)" stroke="black" stroke-width="1.06499"></circle><circle cx="27.1825" cy="183.732" r="5.98573" transform="rotate(-21.4149 27.1825 183.732)" fill="#FFC657" stroke="black" stroke-width="1.06499"></circle><path d="M32.6712 180.45C34.909 184.428 32.5647 188.014 30.1298 189.501C29.9088 189.664 29.6127 189.78 29.3659 189.877C26.7007 190.922 23.1392 189.835 21.3658 186.465C22.6651 187.762 24.121 187.829 25.4089 187.628C27.0681 187.358 28.6239 186.824 29.8979 185.716C31.1977 184.674 32.4287 182.445 32.6712 180.45Z" fill="#F58B00"></path><circle cx="27.1825" cy="183.732" r="5.98573" transform="rotate(60 27.1825 183.732)" stroke="black" stroke-width="1.06499"></circle><circle cx="198.68" cy="31.3185" r="3.53994" transform="rotate(-21.4149 198.68 31.3185)" fill="#FFC657" stroke="black" stroke-width="1.06499"></circle><path d="M202.109 29.268C203.507 31.7536 202.043 33.9942 200.521 34.9233C200.383 35.0249 200.198 35.0975 200.044 35.1579C198.379 35.811 196.154 35.1315 195.046 33.026C195.858 33.8365 196.767 33.8787 197.572 33.7531C198.609 33.584 199.581 33.2502 200.377 32.5581C201.189 31.9072 201.958 30.5147 202.109 29.268Z" fill="#F58B00"></path><circle cx="198.68" cy="31.3187" r="3.53994" transform="rotate(60 198.68 31.3187)" stroke="black" stroke-width="1.06499"></circle><circle cx="199.747" cy="135.835" r="7.64809" transform="rotate(15.2824 199.747 135.835)" fill="#36D136" stroke="black" stroke-width="1.06499"></circle><path d="M200.107 127.598L202.143 128.05C201.238 128.05 201.464 129.408 200.785 130.313C200.107 131.217 197.844 131.217 196.939 131.217C196.034 131.217 193.998 131.217 193.32 132.575C192.777 133.661 192.49 133.329 192.415 133.027L193.32 131.217L194.903 129.408L197.392 128.05L200.107 127.598Z" fill="#00C805"></path><path d="M207.07 139.068C208.572 135.976 206.599 132.042 205.762 130.765C203.274 130.539 205.275 136.363 201.464 138.684C196.26 141.851 189.529 134.685 192.871 139.975C195.544 144.207 200.078 144.133 202.011 143.567C203.072 143.355 205.569 142.159 207.07 139.068Z" fill="#039503"></path><circle cx="199.747" cy="135.835" r="7.64809" transform="rotate(15.2824 199.747 135.835)" stroke="black" stroke-width="1.06499"></circle><circle cx="165.302" cy="174.839" r="2.38416" fill="#E1EBDC"></circle><circle cx="84.2404" cy="44.5045" r="2.38416" fill="#E1EBDC"></circle><circle cx="195.501" cy="100.135" r="2.38416" fill="#E1EBDC"></circle><circle cx="119.208" cy="130.334" r="2.38416" fill="#E1EBDC"></circle><circle cx="214.107" cy="145.881" r="11.8411" transform="rotate(13.2148 214.107 145.881)" fill="#9BE89B" stroke="black" stroke-width="1.06499"></circle><path d="M226.221 146.676C225.425 155.304 217.895 158.377 212.487 158.073C211.967 158.088 211.379 157.95 210.889 157.835C205.598 156.593 201.208 151.052 202.074 143.875C202.704 147.303 204.905 148.979 207.134 150.054C210.017 151.422 213.024 152.265 216.209 151.91C219.363 151.684 223.69 149.531 226.221 146.676Z" fill="#36D136"></path><circle cx="214.107" cy="145.881" r="11.8411" transform="rotate(13.2148 214.107 145.881)" stroke="black" stroke-width="1.06499"></circle><circle cx="150.565" cy="205.401" r="7.16433" transform="rotate(-4.7671 150.565 205.401)" fill="#7EE863" stroke="black" stroke-width="1.06499"></circle><path d="M158.07 205.771C157.923 209.276 155.465 212.198 152.196 212.923C151.89 213.013 151.516 213.045 151.204 213.071C147.835 213.352 144.772 211.278 143.569 208.145C144.253 209.575 146.048 210.008 147.567 210.14C149.528 210.3 151.467 210.203 153.296 209.533C155.13 208.927 157.081 207.471 158.07 205.771Z" fill="#36D136"></path><circle cx="150.565" cy="205.401" r="7.16433" transform="rotate(-4.7671 150.565 205.401)" stroke="black" stroke-width="1.06499"></circle><path d="M85.9292 220.668C85.2619 220.63 84.5901 220.481 83.9466 220.21C81.3304 219.118 79.8236 216.36 80.3236 213.573L94.2928 135.361L65.3424 140.638C62.9278 141.078 60.4881 140.014 59.1664 137.95C57.8449 135.882 57.9031 133.223 59.3167 131.217L145.872 8.37808C147.503 6.06097 150.526 5.18956 153.142 6.28112C155.758 7.37269 157.265 10.1311 156.765 12.9181L142.796 91.13L171.746 85.8526C174.161 85.413 176.601 86.4767 177.922 88.5413C179.244 90.6094 179.186 93.2684 177.772 95.274L91.2167 218.113C89.9888 219.859 87.9705 220.783 85.9292 220.668ZM102.116 121.824C103.578 121.907 104.979 122.52 106.04 123.577C107.443 124.974 108.074 126.97 107.725 128.919L97.0115 188.904L159.383 100.385L136.4 104.573C134.449 104.929 132.451 104.307 131.049 102.91C129.646 101.514 129.015 99.517 129.364 97.5685L140.078 37.5839L77.7056 126.102L100.689 121.914C101.164 121.827 101.643 121.797 102.116 121.824Z" fill="#C3F53C"></path><path d="M77.706 126.103L140.078 37.584L146.471 21.1826L67.4279 131.755C67.4279 131.755 72.5251 127.531 77.706 126.103Z" fill="#00C805"></path><path d="M65.0423 136.896L99.2305 130.755L94.2932 135.362L65.3428 140.639C62.9282 141.079 60.4885 140.015 59.1668 137.95C57.8453 135.882 57.9035 133.223 59.3171 131.218C59.0329 133.907 60.1637 135.38 61.3612 136.181C62.4387 136.901 63.7721 137.126 65.0423 136.896Z" fill="#00C805"></path><path d="M140.078 37.5838L146.754 20.4546" stroke="black" stroke-width="1.06499" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M94.2931 135.361L99.2339 130.755" stroke="black" stroke-width="1.06499" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M137.319 99.55L154.004 14.1353C154.004 14.1353 154.75 10.6504 153.139 6.28085C155.755 7.37241 157.262 10.1308 156.762 12.9178L142.793 91.1297C139.235 94.028 137.319 99.55 137.319 99.55Z" fill="#00C805"></path><path d="M159.384 100.385L136.4 104.574C134.45 104.929 132.451 104.307 131.049 102.91C129.647 101.514 129.016 99.5171 129.365 97.5686C131.881 101.434 134.348 102.201 135.932 101.899C137.516 101.597 170.929 94.5585 170.929 94.5585C170.929 94.5585 161.668 97.4821 156.444 104.557C158.753 101.282 159.384 100.385 159.384 100.385Z" fill="#00C805"></path><path d="M87.9629 209.365C87.9629 209.365 101.981 135.004 102.64 131.674C105.197 129.466 105.903 126.688 106.041 123.577C107.443 124.974 108.074 126.971 107.725 128.919L97.0117 188.904L87.9629 209.365Z" fill="#00C805"></path><path d="M89.1323 214.995C89.1323 214.995 173.301 93.4795 174.249 91.9636C175.197 90.4513 175.056 86.7204 171.743 85.8491C174.158 85.4095 176.598 86.4732 177.919 88.5378C179.241 90.6059 179.183 93.2649 177.769 95.2704L91.2169 218.113C89.989 219.859 87.9707 220.784 85.933 220.668C84.1442 220.748 80.896 218.304 81.5793 218.439C86.4153 219.386 89.1323 214.995 89.1323 214.995Z" fill="#00C805"></path><path d="M97.0115 188.904L87.9628 209.366" stroke="black" stroke-width="1.06499" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M85.9292 220.668C85.2619 220.63 84.5901 220.481 83.9466 220.21C81.3304 219.118 79.8236 216.36 80.3236 213.573L94.2928 135.361L65.3424 140.638C62.9278 141.078 60.4881 140.014 59.1664 137.95C57.8449 135.882 57.9031 133.223 59.3167 131.217L145.872 8.37808C147.503 6.06097 150.526 5.18956 153.142 6.28112C155.758 7.37269 157.265 10.1311 156.765 12.9181L142.796 91.13L171.746 85.8527C174.161 85.413 176.601 86.4767 177.922 88.5413C179.244 90.6094 179.186 93.2684 177.772 95.274L91.2167 218.113C89.9888 219.859 87.9705 220.783 85.9292 220.668ZM102.116 121.824C103.578 121.907 104.979 122.52 106.04 123.577C107.443 124.974 108.074 126.97 107.725 128.919L97.0115 188.904L159.383 100.385L136.4 104.573C134.449 104.929 132.451 104.307 131.049 102.91C129.646 101.514 129.015 99.517 129.364 97.5686L140.078 37.5839L77.7056 126.102L100.689 121.914C101.164 121.827 101.643 121.797 102.116 121.824Z" stroke="black" stroke-width="1.06499" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M142.793 91.1301C142.793 91.1301 138.834 94.9311 137.365 98.7309" stroke="black" stroke-width="1.06499" stroke-miterlimit="10" stroke-linecap="round"></path><circle cx="74.7036" cy="83.4458" r="3.9736" fill="#E1EBDC"></circle></svg>
                        <p className='dm-id'>Instant Deposit available</p>
                        <p className='dm-info'>While your money is on its way, you've got access to up to <strong>{toMoney(amount)}</strong> of investible funds to use on Robinhood.</p>
                        <p className='dm-disclaimer'>Instant Deposits are determined by your account value, deposit history, and Robinhood Gold status. Instant Deposits are subject to restrictions, which may change due to market conditions. Learn more</p>
                        <button onClick={dm2}>Continue</button>
                    </div>

                </div>
 
            </div>
       </div>
    )
}

export default DepositModal