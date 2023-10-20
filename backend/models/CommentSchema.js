import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true,
    },
    userImg: {
      type: String,
      ref: 'User', 
    },
    Username: {
      type: String,
      ref: 'User', 
      required: true,
    },
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'BlogModel', 
      required: true,
    },
    PostImg: {
      type: String,
      ref: 'BlogModel', 
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['unread', 'read'], 
      default: 'unread',
    },
    isApproved: {
      type: String,
      enum: ['approved', 'unapproved'], 
      default: 'unapproved',
    },
  });
  

  const CommentModel= new mongoose.model('comments' , commentSchema);

  export default CommentModel;