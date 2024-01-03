import Express from 'express'
import Mongoose from 'mongoose'
import Cors from 'cors'

const app = Express()
const port = 3000
app.use(Cors())

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
    if (req.type == "deposit") {
        user.updateOne({email: req.email}, {$inc: {balance: req.amount}})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
})

app.listen(port, () => console.log(`Listening on port ${port}`))