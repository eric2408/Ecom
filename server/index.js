/** Express app for Virtual Space */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const cartRoute = require("./routes/cartRoute");
const orderRoute = require("./routes/orderRoute");

dotenv.config();

mongoose
.connect(process.env.Mongo_Pw)
.then(()=> console.log('connection successful!'))
.catch((error) => console.log(error));


app.use(express.json());


app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);


app.listen(process.env.PORT || 5000, () => {
    console.log('backendddd')
})