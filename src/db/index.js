import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo DB connection Failed", error);
    process.exit(1);
  }
};
export default connectDB;
