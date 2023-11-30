const express=require("express")
const connection=require("./config/db")
const router=require("./routes/route")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
app.use(router)
app.get("/",(req,res)=>{
    res.send("welcome to sannu shop")
})

app.listen(4500,async()=>{
    try {
       await connection
       console.log("connected to the db"); 
    } catch (error) {
        console.log(error);
    }
console.log("server is running on port 4500");
})