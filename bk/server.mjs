import Express from 'express'
import Mongoose from 'mongoose'
import BodyParser from 'body-parser'
import Cors from 'cors'

const app = Express()
const port = 3000
app.use(Cors())
app.use(BodyParser.json())

function dailyUpdate() {
    console.log("=")
    console.log("Daily Update Triggered")
    console.log("-----------------------")
    
    let tickerSchema = Mongoose.Schema({
        ticker: String,
        name: String,
        prices: [Number]
    })

    let ticker = Mongoose.model("ticker", tickerSchema)
    ticker.find()
        .then(tickers => {
            tickers.forEach(tick => {
                // let newest = tick.prices[tick.prices.length - 1]
                // tick.prices.push((newest < 1 ?
                //     Number((newest * (Math.random() * 0.2 + 0.9)).toFixed(5)) :
                //     Number((newest * (Math.random() * 0.2 + 0.9)).toFixed(2))
                // ))
                // ticker.updateOne({ _id: tick._id }, { prices: ticker.prices })
                //     .catch((err) => console.log(err));

                // UNCOMMENT THIS WHEN YOU ARE READY TO BUILD APP

                console.log("------------ SIMULAITNG ACTUAL TICKER UPDATE -----------")
            })
        })
        .catch(err => console.log(err))
}

const url =  "mongodb+srv://admin:admin@godfather.gpqepzo.mongodb.net/?retryWrites=true&w=majority"
Mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err))

const Schema = Mongoose.Schema({
    name: String,
    email: String,
    password: String,
    bp: Number,
    crypto: Array,
    stocks: Array,
    lists: Array
})
const user = Mongoose.model("user", Schema)


// METADATA RETRIEVE
const metaSchema = Mongoose.Schema({
    name: String,
    last: String
})
const meta = Mongoose.model("metadata", metaSchema, "metadata")
meta.find({name: "metadata"})
    .then(data => data[0])
    .then(result => {
        const date = new Date();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const today = monthNames[date.getMonth()] + ' ' + date.getDate();
        
        if (result.last != today) {
            meta.updateOne({name: "metadata"}, {last: today})
                .then(data => {
                    console.log("Update Stocks Triggered")

                    // CALL STOCK UPDATING FUNCTION HERE
                    dailyUpdate()
                })
                .catch(err => console.log(err))

        } else {
            console.log("Stocks already updated today")
        }
    })
    .catch(err => console.log(err))


// METADATA END

app.get("/login", (req, res) => {
    const {email, password} = req.query

    user.find({email: email, password: password})
        .then(data => res.json(data))
        .catch(err => res.json(err))
})

app.post("/signup", (req, res) => {
    const {name, email, password} = req.query

    const newUser = new user({
        name: name,
        email: email,
        password: password,
        bp: 0,
        crypto: [],
        stocks: [],
        lists: []
    })

    newUser.save()
        .then(data => {
            if (data._id) {
                res.json(data)
            } else {
                res.status(500).json({ error: "Error creating user" })
            }
        })
        .catch(err => res.json(err))
})

app.put("/transfer", (req, res) => {
    const { id, amount, type } = req.body

    const objId = new Mongoose.Types.ObjectId(id)
    console.log(req.body)
    if (type == "deposit") {
        user.updateOne({_id: objId}, {$inc: {bp: amount}})
            .then(data => {
                
                // if (data._id) {
                //     res.json(data)
                // } else {
                //     res.status(500).json({ error: "Error depositing" })
                // }

                res.json(data)
            })
            .catch(err => res.json(err))
    }

})

app.listen(port, () => console.log(`Listening on port ${port}`))