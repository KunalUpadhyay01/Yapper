const messages = require("../model/messages");
const sendMessage = () =>{
    const {message} = req.body;
    if(!message){
        return
    }
    const chat = new messages({message})
    chat.save()
}

module.exports = sendMessage;