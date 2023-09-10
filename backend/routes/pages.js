import express from 'express';
import { Homepage,addPost,getPosts,getSinglePost } from '../controllers/pages-controllers.js';

const router = express.Router();

router.get('/', Homepage)
router.get('/getposts',getPosts )
router.get('/post/:id',getSinglePost )
router.post('/addpost',addPost)

export default router;