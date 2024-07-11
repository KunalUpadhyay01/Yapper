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
const signIn = async(req,res)=>{
       const {email, password} = req.body
       try{
           const User = await UserModel.findOne({email})
           console.log(User)
        //    const token = JWT.sign({ _id: User._id }, process.env.JWT, {
        //     expiresIn: "7d",
        //   });
        if(!User){
            res.status(404).send({
                message:"User not found",
                success:false,
            })}
        const encryptComparison = await comparePassword(password ,User.password)
        if(!encryptComparison){
            res.status(401).send({
                message:"Incorrect password",
                success:false,
            })
        }

        res.status(200).send({
            success:true,
            message:"login successful",
            user:{
                name: User.name,
                email:User.email,
                password: User.password
            },
            // token
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