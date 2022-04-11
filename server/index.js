import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'; 
import cors from 'cors'; 
import userModel from "./models/users.js";

const app = express();
app.use(express.json());
app.use(cors()); 

app.get('/getusers', (req, res)=>{
    userModel.find({}, (err, result)=>{
        if (err){
            res.json(err)
        }
        else {
            res.json(result)
        }
    })
});

app.post('/createuser', async (req, res)=>{
    const user = req.body; 
    const newuser = new userModel(user); 
    await newuser.save(); 
    res.json(user);
})

// connect to mongodb and start running our express app
const CONNECTION_URL = 'mongodb+srv://merncluster:merncluster123@mern-cluster.ephsk.mongodb.net/MERN?retryWrites=true&w=majority';
const PORT = process.env.port || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}) // no errors 
.then(app.listen(PORT, ()=>{console.log('Server started on port ' + PORT);}))
.catch((error)=>{console.log(error.message);});
