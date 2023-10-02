import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";

passport.use(
  new LocalStrategy(async (username, password, done) => {
   
    try {
      const user = await User.findOne({ email: username });

      if (!user){
        return done(null, false,{message: 'not getting user'})
      };
      if (user) {
        if (!bcrypt.compareSync(password, user.password)) {
          return done(null, false,{message: 'password mismatch'});
        }
      
        return done(null, user);

      }
    } catch (error) {
        console.log(error)
      return done(error);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    const sendUser = { 
      email:user.email,
      name:user.name,
      role:user.role,
      id:user.id
    }
    done(null, sendUser);
  } catch (error) {
    done(null, error);
  }
});

export const checkAuth = (req, res, next) => {
  try {
    if (!req.isAuthenticated()) {
      return res.status(404).json({ message: "user not authorized" });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
