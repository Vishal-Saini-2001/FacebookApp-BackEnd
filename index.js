const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
app.use(cors());

dotenv.config({path:'./config.env'});
const PORT = process.env.port;


app.post('/authorize',async(req,res)=>{
    const data = req.body;
    console.log(data);
});



app.listen(PORT,()=>{
    console.log("Server running on PORT:",PORT);
});