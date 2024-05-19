import express from "express";
import User from "../model/schemas/userModel.js";


//connect to the route
const router = express.Router();

router.get("/:id", async (req, res) =>{
    try {

        const userId = req.params.id;

        //if no parameter send error message 
        if(!userId){
        return res.status(400).send({
            success : false,
            err_code : "PLEASE_ENTER_USER_ID",
            message : "Please Enter User ID !!!"
        })
        };


        //Check if user already exists
        const userById= await User.find({ _id : userId });

        //if not exists send error message 
        if(!userById){
            return res.status(400).send({
                success : false,
                err_code : "USER_NOT_EXISTS",
                message : "User Not Exists !!!"
            })
        };

        res.status(201).send({
            success : true,
            message : "Data Fetch Successfully !",
            data : userById
        })
        
    } catch (error) {
        return res.status(400).send({
            success : false,
            message : error.message
        });
    }
});

//exporting router
export {router};
export default router;