import mongoose from "mongoose";

const connection = async (url) => {
  try {
    await mongoose.connect(url);
    return console.log("database connection established");
  } catch (error) {
    return console.log("database connection error");
  }
};


export default connection;