import express from 'express';
import { Homepage,addPost,getPosts } from '../controllers/pages-controllers.js';

const router = express.Router();

router.get('/', Homepage)
router.get('/getposts',getPosts )
router.post('/addpost',addPost)

export default router;