import mongoose from "mongoose";    

const BlogSchema = mongoose.Schema({
    title:{
       type:String,
        required: true,
    },
    content:{
        img:{
            type:String,
        },
        desc:{
            type:String,
            required: true,
        }
    },
    category:{
        type:String,
        required: true,
    },
    tags:{
        type:String,  
    },
    views:{
        type:Number,
        default:0,
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    updatedAt:{
        type:Date,
        default: Date.now()
    },
    author:{
        type:String,
        required:true,
        default:'masumahmed64077@gmail.com'
    }
})

const BlogModel = mongoose.model('blogs',BlogSchema);

export default BlogModel;