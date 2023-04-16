require ('dotenv').config();

const mongoose = require('mongoose');
const connectionStr = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PW}@cluster0.fl7n6i1.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(connectionStr, {useNewUrlParser:true})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
    console.log(err)
})