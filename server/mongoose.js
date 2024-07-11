const mongoose = require('mongoose')

var connectDb = async()=>{
try{
const URL = "mongodb+srv://sudhansuupadhyay653:Kunal1234@ecommerce.lqok1y9.mongodb.net/ChatApp"
const conn = await mongoose.connect(URL)
if(conn){
    console.log("Connection Successful")
}else{
    console.log("error connecting to database")
}}catch(err){
    console.log(err)
}}


module.exports = connectDb