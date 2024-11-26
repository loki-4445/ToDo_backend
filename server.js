const express=require('express');
const mongoose=require('mongoose');
const cors=require("cors")
require('dotenv').config()
const app=express()
const router=require(`./routers/ToDoRoute`)
const PORT=process.env.port||5000

app.use(express.json())
app.use(cors())
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("COnnected to the Database"))
.catch((err)=>console.log(err))
app.listen(PORT,()=>{
    console.log(`Listening on: ${PORT}`)
})
app.use(router)
