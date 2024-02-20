import express from "express";
import connectDB from "./config/db.js"


const app= express();
connectDB()

app.get('/', (req, res)=>{
    res.send('what do you want from me')

})

app.listen("3000", () =>{
    console.log("all is well with this server");
})