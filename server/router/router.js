import express from "express";
import addUserController from "../controllers/addUserController.js";
import getUserController from "../controllers/getUserController.js";
import getEachUserController from "../controllers/getEachUserController.js";
import updateUserController from "../controllers/updateUserController.js";
import deleteUserController from "../controllers/deleteUserController.js";


const router = express.Router();

router.use("/add-user", addUserController);
router.use("/get-user", getUserController);
router.use("/get-user", getEachUserController);
router.use("/update-user", updateUserController);
router.use("/delete-user", deleteUserController);



export {router};
export default router;