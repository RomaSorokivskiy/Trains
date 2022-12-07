require("dotenv").config()

const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const router = require("./routers/index")

const app = express();

const PORT = process.env.PORT;

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use('/api', router);

const start = async() => {
    try{
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        app.listen(PORT,() => {
            console.log("Server start on ", PORT);
        })
    } catch (e) {
        console.log("!Error! on Server:",e);
    }
}

start();