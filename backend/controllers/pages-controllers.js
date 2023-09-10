import BlogModel from "../models/BlogSchema.js";

export const Homepage = (req, res) => {
  console.log("homepage called");
};

export const addPost = async (req, res) => {
  const { title, content, tags, category } = req.body;

  try {
    const newPost = await new BlogModel({ title, content, tags, category });
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (error) {
    return res.status(500).json({ message: "error adding post" });
  }
};


export const getPosts = async (req, res) => {
  try {
    const AllPost = await BlogModel.find({}).sort({updatedAt:-1})
    // const newPost = await new BlogModel({ title, content, tags, category });
    // const post = await newPost.save();
    console.log(AllPost)
    return res.status(201).json(AllPost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "error adding post" });
  }
};



