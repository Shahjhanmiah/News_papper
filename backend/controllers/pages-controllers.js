import BlogModel from "../models/BlogSchema.js";
import CommentModel from "../models/CommentSchema.js";
import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
import dotenv from "dotenv";

dotenv.config();

export const Homepage = (req, res) => {};

export const addPost = async (req, res) => {
  const { title, content, category, tags } = req.body;
  console.log({ content });
  const comma = ", ";
  const TagString = tags.join(comma);
  const author = req.user.name;
  console.log(req.user);

  try {
    const newPost = await new BlogModel({
      title,
      content,
      category,
      tags: TagString,
      author: author,
    });
    await newPost.save();
    const AllPost = await BlogModel.find({}).sort("-updatedAt");
    return res.status(200).json(AllPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error adding post" });
  }
};

export const getPosts = async (req, res) => {
  try {
    const AllPost = await BlogModel.find({}).sort("-updatedAt");
    console.log(AllPost);

    return res.status(200).json(AllPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error while getting post" });
  }
};

export const getSinglePost = async (req, res) => {
  const { id } = req.params;

  try {
    const post = await BlogModel.find({ _id: id }).sort("-updatedAt");
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: "error while getting single post" });
  }
};
export const getSingleUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.find({ _id: id });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "error while getting single user" });
  }
};
export const getComments = async (req, res) => {
  const { type } = req.params;

  try {
    const comments = await CommentModel.find({ isApproved: type });
    console.log({ comments });
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: "error while getting comments" });
  }
};
export const getPostComments = async (req, res) => {
  const { id } = req.params;

  try {
    const comments = await CommentModel.find({ postId: id, isApproved:'approved' });
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({ message: "error while getting comments" });
  }
};



export const approveComment = async (req, res) => {
  const { id } = req.params;
  const query = { _id: id };
  const update = { isApproved: 'approved' };
  const option = { new: true };
  try {
    const comment = await CommentModel.findByIdAndUpdate(query,update,option);
    return res.status(200).json(comment);
  } catch (error) {
    return res.status(500).json({ message: "error approving comment" });
  }
};

export const register = async (req, res) => {
  const { name, email, password, cpassword } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(403).json({ message: "user already registered" });
    } else {
      if (password !== cpassword) {
        return res.status(401).json({ message: "Password not matched" });
      } else {
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        const HashedCpassword = bcrypt.hashSync(cpassword, saltRounds);
        const newUser = await User({
          name,
          email,
          password: hashedPassword,
          cpassword: HashedCpassword,
          photoURL:'https://i.ibb.co/jwgThNk/avater-1.png'
        });
        await newUser.save();
        return res
          .status(200)
          .json({ message: "User Registered successfully", newUser });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};

export const Login = async (req, res) => {
  console.log(req.session.passport.user);
  try {
    return res.status(200).json(req.session.passport.user);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUser = async (req, res) => {
  console.log("getuser called");
  const user = req.user;
  console.log({ user });

  try {
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getSpecificUsers = async (req, res) => {
  console.log("alluser called");
  const userType = req.params.type;
  console.log(userType);
  try {
    const allUser = await User.find({ role: userType });
    return res.status(200).json(allUser);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getCategories = async (req, res) => {
  console.log("get categories called");
  try {
    const allCategory = await BlogModel.distinct("category");
    console.log(allCategory);
    return res.status(200).json(allCategory);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getAllUser = async (req, res) => {
  console.log("all user called");
  try {
    const allUser = await User.find({});
    return res.status(200).json(allUser);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const SignOut = async (req, res) => {
  req.logout(req.user, (err) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json({ message: "user is now signed out" });
  });
};

export const AuthFailed = async (req, res) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
};

export const deleteBlog = async (req, res) => {
  console.log(req.params.id);
  try {
    await BlogModel.findByIdAndRemove(req.params.id);
    const Blog = await BlogModel.find().sort("-updatedAt");
    return res.status(200).json(Blog);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteUser = async (req, res) => {
  console.log(req.params.id);
  try {
    await User.findByIdAndRemove(req.params.id);
    const Users = await User.find();
    return res.status(200).json(Users);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const deleteComment = async (req, res) => {
  console.log(req.params.id);
  try {
    await CommentModel.findByIdAndRemove(req.params.id);
    const comments = await CommentModel.find();
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const editPost = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  const { title, content, category, tags } = req.body;
  const TagString = tags.join(", ");
  const author = req.user.name;

  const query = { _id: id };
  const update = { title, content, category, tags: TagString, author: author };
  const option = { new: true };

  try {
    await BlogModel.findByIdAndUpdate(query, update, option);
    const Blog = await BlogModel.find().sort("-updatedAt");
    return res.status(200).json(Blog);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const editUser = async (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  const { name, role } = req.body;

  const query = { _id: id };
  const update = { name, role };
  const option = { new: true };

  try {
    await User.findByIdAndUpdate(query, update, option);
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};


export const updateUser = async (req, res) =>   {
  const { name, photoURL , userId,id } = req.body;

  const query = {_id:id}
  const update = { name:name , photoURL:photoURL  };
  const option = { new: true };

  try {
    await User.findByIdAndUpdate(query, update, option);
    const user = await User.findById(id);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const addComment = async (req, res) => {
  // console.log(req.params.id);

  const { id } = req.params;
  const data = req.body;
  const user = req.user;
  const { comment } = data;
  console.log({user})
  const post = await BlogModel.find({ _id: id });
  const users = await User.find({ _id: user.id });
  const { img } = post[0].content;
  const singleUser = users[0];
  const userimg = singleUser.photoURL ? singleUser.photoURL : 'https://i.ibb.co/jwgThNk/avater-1.png';

  try {
    const newcomment = new CommentModel({
      userId: user.id,
      userImg:userimg,
      postId: id,
      PostImg: img,
      text: comment,
      Username: singleUser.name,
    });
    console.log({newcomment})
    await newcomment.save();
    return res.status(200).json(newcomment);
  } catch (error) {
    console.log(error)
    return res.status(500).json(error.message);
  }
};
