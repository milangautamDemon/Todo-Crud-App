import express from "express";
import User from "../model/schemas/userModel.js";


//connect to the route
const router = express.Router();

router.get("/", async (req, res) =>{
    try {

        //Check if user already exists
        const users = await User.find({});

        //if no user data send error message 
        if(!users){
            return res.status(400).send({
                success : false,
                err_code : "USER_NOT_FOUND",
                message : "User Not Found !!!"
            })
        };

        res.status(201).send({
            success : true,
            message : "Data Fetched Successfully !",
            data : users
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