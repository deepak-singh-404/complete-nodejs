const express = require('express')
const bcrypt = require('bcrypt')

const app = express()


app.get('/first',async(req,res)=>{
  const data = await bcrypt.hash("first", 18)
  res.status(200).json({data})
})


app.listen(4000, ()=>{
  console.log("server started")
})