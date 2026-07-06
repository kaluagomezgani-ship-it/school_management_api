//IMPORTS
const paths=require("./ROUTES/routes");
require("dotenv").config();
const express=require("express");
const app=express();

app.use(express.json());

app.use("/school",paths);

app.listen("3000", ()=>{
    console.log("server is running")
})

// module.exports=app;