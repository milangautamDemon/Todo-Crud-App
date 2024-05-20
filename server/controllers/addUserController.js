import express from "express";
import User from "../model/schemas/userModel.js";


//connect to the route
const router = express.Router();

router.post("/", async (req, res) =>{
    try {

        //receive course detail from user request
        const { userName, name } = req.body;

        //if exists throw some error message
        if (!userName && !name) {
            return res.status(404).send({
                success : false,
                err_code : "PLEASE_ENTER_DATA",
                message : "Please Enter Data !!!"
            })
        };

        //Check if user already exists
        const isExists = await User.findOne({
            userName : userName 
        });

        //if exists send error message 
        if(isExists){
            return res.status(400).send({
                success : false,
                err_code : "USERNAME_ALREADY_EXISTS",
                message : "UserName Already Exists !!!"
            })
        };

        //create new user
        const newUser = new User({
            userName,
            name
        })

        //saved the enter data in database
        const savedUser = await newUser.save()

        res.status(201).send({
            success : true,
            message : "User Data Saved Successfully !",
            data : savedUser
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