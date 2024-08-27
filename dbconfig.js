const mongoose=require('mongoose');
const { MONGO_URL } = require('./config');
async function databaseconnect(){
    try{
        console.log("trying to connect");
        let data = await mongoose.connect(MONGO_URL);
        console.log("connected to mongo");

    }catch(error){
        console.log(error);
    }
}
module.exports={databaseconnect};