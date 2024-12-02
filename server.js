require('dotenv').config()
const express = require("express");
const app = express();
var cors = require('cors');
const mongoose = require("mongoose");
const productRoute = require('./routes/productRoute');
const errorMiddleware = require('./middleware/errorMiddleware')

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 5000
const FRONTEND = process.env.FRONTEND

var corsOptions = {
  origin: FRONTEND,
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoute);

app.get("/", (req, res) => {
  res.send("Hello Node Api");
});

app.use(errorMiddleware);

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to mongoDB");
    app.listen(PORT, () => {
      console.log(`Node Api app is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
