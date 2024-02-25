import mongoose from "mongoose";

const connetToMongoBD = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("connet to mongodb");
  } catch (error) {
    console.log("Somthing Went worng to connet MongoBD");
  }
};

export default connetToMongoBD;
