import mongoose from "mongoose";

//Function to connect to the MongoDB database
const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("Mongoose is connected!!!!");
  });

  await mongoose.connect(`${process.env.MONGO_URI}/hire-sphere`);
};

export default connectDB;
