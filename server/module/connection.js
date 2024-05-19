import mongoose from "mongoose";

export const connectMongoDb = (URL) => {
mongoose.connect(URL)
.then(() =>  console.log("Database connected successfully !"))
.catch(error => console.log("Error occurs", error))
}
export default connectMongoDb;