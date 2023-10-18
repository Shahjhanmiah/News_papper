import express from 'express';
import { Homepage,addPost,getPosts,getSinglePost,register,Login,getUser,SignOut,AuthFailed,getAllUser,getSpecificUsers,getCategories,deleteBlog,editPost,deleteUser,getSingleUser,editUser } from '../controllers/pages-controllers.js';
import passport from 'passport';
import { checkAuth } from './passport.js';
const CLIENT_URL  = 'http://localhost:5173/'

const router = express.Router();


router.get('/', Homepage)
router.get('/getuser', getUser)
router.get('/signout', SignOut)
router.get('/getposts',getPosts )
router.get('/getallusers',getAllUser )
router.get('/getalluser/:type',getSpecificUsers )
router.get('/getcategories',getCategories )
router.get('/login/failed',AuthFailed )
router.get('/auth/google',passport.authenticate('google', { scope: ['profile'] }))
router.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: `/login/failed` ,successRedirect: `${CLIENT_URL}` }));
router.get('/post/:id',getSinglePost )            
router.get('/user/:id',getSingleUser )            
// router.post('/addpost',addPost)
router.post('/register',register)
router.post('/createblog',addPost)
router.post('/updateblog/:id',editPost)
router.post('/updateuser/:id',editUser)
router.post('/login',passport.authenticate('local'),Login)
router.delete('/deleteblog/:id',deleteBlog)
router.delete('/deleteuser/:id',deleteUser)


export default router;