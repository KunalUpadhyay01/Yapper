const UserModel = require("../model/model")
const {hashedPassword, comparePassword} = require('../encryption')
const JWT = require('jsonwebtoken');
const Register = async(req,res)=>{
    try{
        var {name, email, password} = req.body;
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
                res.status(201).send({
                message:"User already exists",
                success:true,
                existingUser,
                })
            }
    const encryptedPassword = await hashedPassword(password)
    const newUser =  new UserModel({
        name,
        email,
        password: encryptedPassword,
    })
    await newUser.save() 
        res.status(200).send({
            message:"User created successfully",
            success:true,
            newUser,
        })
    }catch(err){
        console.log(err)
        res.send({
            message:err,
            success:false,
        })
    }
}
const signIn = async (req,res) =>{
       const {email, password} = req.body
       try{
        //Finding User
           const User = await UserModel.findOne({email})
           console.log(User)
           if(!User){
               res.status(404).send({
                   message:"User not found",
                   success:false,
            })}

        //Password comparison
            const encryptComparison = await comparePassword(password ,User.password)
            if(!encryptComparison){
                res.status(401).send({
                    message:"Incorrect password",
                    success:false,
                })
            }
            const token = await JWT.sign({ _id: User._id }, 'Hello', {
                        expiresIn: "7d",});
            console.log(token)


        // if User found with correct password
        res.status(200).send({
            success:true,
            message:"login successful",
            user:{
                name: User.name,
                email:User.email,
            },
            token
        })
       }catch(error){
        console.log(error)
        res.status(401).send({
            message:"something went wrong",
            success:false,
        })
       }
    }

module.exports = {Register, signIn}