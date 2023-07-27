import mongoose from "mongoose";

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch(erroe){
    console.log(`Error:${console.error.message}`);
    process.exit(1);
  }
};
export default connectDB;
