import express from 'express';
import { Homepage,addPost,getPosts,getSinglePost,register,Login,getUser,SignOut } from '../controllers/pages-controllers.js';
import passport from 'passport';
import { checkAuth } from './passport.js';

const router = express.Router();

router.get('/', Homepage)
router.get('/getuser', getUser)
router.get('/signout', SignOut)
router.get('/getposts',getPosts )
router.get('/post/:id',getSinglePost )
router.post('/addpost',addPost)
router.post('/register',register)
router.post('/login',passport.authenticate('local'),Login)

export default router;