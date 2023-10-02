import mongoose from "mongoose";
import validator from "validator";

const userShema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address");
        }
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    cpassword: {
      type: String,
      required: true,
      minlength: 6,
    },
    role:{
      type: String,
      enum:['admin','user','manager'],
      default:'user',
    },
    profilePic:{
        type: String,
    }
  });

  const User = new mongoose.model('users' , userShema);

  export default User;