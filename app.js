require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// const authRoutes = require("./routes/auth");


const app = express();


//dbconnection
mongoose.connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.uemdg.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
{   useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("DB CONNECTED");
});


// //middlewares
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(cors());


// //My Routes
// app.use("/api", authRoutes);


//port
const port = process.env.PORT || 8000;


//startingserver
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});