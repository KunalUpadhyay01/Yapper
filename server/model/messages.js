const mongoose = require("mongoose")

const Chats = new mongoose.Schema({
    message:{
        type:"String"
    }
},{timestamps:true})

module.exports = mongoose.model('Chats',Chats)