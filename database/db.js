const mongoose = require("mongoose");


const connectToMongo = async ()=>{
    await mongoose.connect(process.env.mongoURL, ()=>{
        console.log("Connected to Mongo Sucessfully.");
    })
}


module.exports = connectToMongo;