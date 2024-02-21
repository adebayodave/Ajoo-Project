import express from "express";
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors";

const app= express();
connectDB()

app.get('/', (req, res)=>{
    res.send('what do you want from me')

})
app.use(
    cors({
      origin: ["http://localhost:5173"],
    })
  );
app.use(express.json());
app.use("/api/user", userRoutes)
app.listen("3000", () =>{
    console.log("all is well with this server");
})