const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Routes = require("./routes/router");
dotenv.config({ path: "./.env" });

mongoose.connect(process.env.CONN_STR, {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => {
    // console.log(conn)
    console.log("DB connected");
  });


app.use(cors());
app.use(express.json());
app.use("/user", Routes);
const corsOptions = {
  origin: 'http://192.168.100.29:8080', // Replace with your actual React Native app's URL
};

// Use the 'cors' middleware with your options
app.use(cors(corsOptions));
app.listen(process.env.PORT, (req, res) => {
});
