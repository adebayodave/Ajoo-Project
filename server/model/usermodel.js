import mongoose from "mongoose";
const userschema = mongoose.Schema(
    {
        firstName: {
            type:String,
            required:true
        },
        lastName: {
            type:String,
            required:true
        },
        phoneNumber: {
            type:Number,
            required:true
        },
        email: {
            type:String,
            required:true,
            unique:true  
        }, 
        password: {
            type:String,
            required:true
        },

    }
) 
const User = mongoose.model("User",userschema)

export default User