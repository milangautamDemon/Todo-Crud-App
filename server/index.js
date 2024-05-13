import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

mongoose.connect("mongodb://localhost:27017/todo_crud_app");


app.post("/api", (req, res) => {
    try {
        const user = req.body;
        if (!user) {
           return res.status(400).send({
                success : false,
                message : "Please some data !!!"
            })
        };
    
        user.save();
        res.status(200).send({
            success : true,
            message : "Data received successfully"
        });    
    } catch (error) {
        res.status(400).send({
            success : false,
            message : error.message
        })
    }
   
})