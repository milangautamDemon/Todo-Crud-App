import express from "express";
import User from "../model/schemas/userModel.js";


//connect to the route
const router = express.Router();

router.put("/", async (req, res) =>{
    try {

        //receive course detail from user request
        const { id, userName, name } = req.body;

        //if not exists throw some error message
        if (!id) {
            return res.status(404).send({
                success : false,
                err_code : "PLEASE_ENTER_ID",
                message : "Please Enter ID !!!"
            })
        };

        //Check if user already exists
        const isExists = await User.find({
            _id : id 
        });

        //if not exists send error message 
        if(!isExists){
            return res.status(400).send({
                success : false,
                err_code : "ID_NOT_EXISTS",
                message : "ID Not Exists !!!"
            })
        };

            //Check if another user already exists
            const isAnotherExists = await User.findOne({
                _id : { $ne : id },
                userName : {
                    $regex : userName,
                    $options : "i" //check if another user of same username exists in small, capitallize & other form
                }
            });

        //if another exists send error message 
        if(isAnotherExists){
            return res.status(400).send({
                success : false,
                err_code : "USER_ALREADY_EXISTS",
                message : "User Already Exists !!!"
            })
        };
    

        //saved the enter data in database
        const updatedData = await User.findByIdAndUpdate({ _id : id },{ 
            $set : {
                userName, 
                name 
            }
         },{ new : true });

        res.status(201).send({
            success : true,
            message : "Data Updated Successfully !",
            data : updatedData
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