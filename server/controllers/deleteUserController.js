import express from "express";
import User from "../model/schemas/userModel.js";


//connect to the route
const router = express.Router();

router.delete("/:id", async (req, res) =>{
    try {

        //receive course detail from user request
        const id = req.params.id;

        //if exists throw some error message
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

        //saved the enter data in database
        await User.findByIdAndDelete(id);

        res.status(201).send({
            success : true,
            message : "Data Deleted Successfully !",
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