require("dotenv").config()

const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const corsOptions = require('./config/corsOptions')
const connectDB = require("./config/connectDb")
const app = express()
const PORT = process.env.PORT || 1020
connectDB()

app.use(cors(corsOptions))
app.use(express.json())
app.use(express.static('public'))

app.get("/", (req, res) => {
    res.send("home page")
})
app.use("/api/members", require("./routes/memberRoutes"))
app.use("/api/corona", require("./routes/coronaRoutes"))

mongoose.connection.once("open", () => {
    console.log("conneted to DB success")
    app.listen(PORT, () => {
        console.log(`server runing on port ${PORT}`);
    })
})
mongoose.connection.on("error", err => {
    console.log(err);
})
