import mongoose from "mongoose";
import validator from "validator";

const userShema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email address");
        }
      },
    },
    password: {
      type: String,
      minlength: 6,
    },
    cpassword: {
      type: String,
      minlength: 6,
    },
    role:{
      type: String,
      enum:['admin','user','moderator'],
      default:'user',
    },
    photoURL:{
        type: String,
    },
    gogleId:{
      type: String,
    }
  });

  const User = new mongoose.model('users' , userShema);

  export default User;