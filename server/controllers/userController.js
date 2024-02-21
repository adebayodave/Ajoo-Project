import asyncHandler from "express-async-handler";
import User from "../model/usermodel.js";
const authUser = asyncHandler(async(req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if(user && password == user.password){
        let message= "you are "
        res.status(200).json(message)
    }else{
        res.status(401)
        throw new Error ("Oops, this email or password are invalid!")
    }
})
const registerUser = asyncHandler(async(req, res) => {
    const {firstName,
        lastName,
        phoneNumber,
        email,
        password,} = req.body
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(404)
        throw new Error("⚠️Oops, this email address already exists!")
    } 
    const NewUser = new User({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
    })
    const savedUser = await NewUser.save()
    res.status(201).json(savedUser)
   
})
export {authUser, registerUser}