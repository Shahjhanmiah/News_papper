import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { base_url } from '../../../base_url/Base_url';
import { MainContext } from '../context/PostContext';
import Markdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { FaUser } from 'react-icons/fa6'
import Swal from 'sweetalert2';

const PostPage = () => {

  const [singlePost, setSinglePost] = useState();
  const { posts, setPosts, account } = useContext(MainContext)

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const Description = <Markdown rehypePlugins={rehypeRaw}>{singlePost?.content?.desc}</Markdown>


  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };



  console.log('comment', comments)
  const params = useParams();


  useEffect(() => {
    findPost();
    getComments();
  }, [posts])

  const getComments = async () => {
    await axios.get(`${base_url}/getcomments/${params.id}`, { withCredentials: true }).then(res => {
      setComments(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  const handleComment = async (e) => {
    e.preventDefault();
    const data = {
      comment
    };
    await axios.post(`${base_url}/${params.id}/comment/add`, data, { withCredentials: true }).then(res => {
      console.log(res.data);
      if (res.status = 200) {
        setComment('')
        Swal.fire({
          title: 'Success!',
          text: 'Your Comment Successfully goes for approval',
          icon: 'success',
          confirmButtonText: 'Confirm'
        })
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        })

      }

    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    });
  }


  const findPost = async () => {
    await axios.get(`${base_url}/post/${params.id}`).then(res => setSinglePost(res.data[0])).catch(err => console.log(err));
  }



  const relatedPost = posts?.filter(post => post?.category === singlePost?.category && post._id !== singlePost._id);

  return (
    <div className='mt-[100px] w-[100%] m-auto  grid grid-cols-1 lg:grid-cols-3 gap-3 py-3'>
      {/* single news start */}
      <div className='col-span-2 gap-8 flex flex-col'>
        <div className=''>
          <h1 className='text-3xl font-bold m-4'>{singlePost?.title}</h1>
          <div className='flex justify-start items-center gap-2 text-start m-4'>
            <p className='font-thin'>{singlePost?.category}</p>
            <p className='font-medium'><span className='font-thin'>CreatedAt:</span> {singlePost?.createdAt}</p>
            <p className='font-medium'><span className='font-thin'>UpdatedAt:</span> {singlePost?.updatedAt}</p>
          </div>
          <div className='flex flex-col items-start justify-start gap-3 my-5 px-5'>
            <img src={singlePost?.content?.img} alt="PostImg" />
            {Description}
          </div>
        </div>
        <hr />
        {/* comment section start */}
        <div className="comment-section">
          <h3 className="mb-6 font-semibold ">Comments</h3>
          <div className='flex flex-col gap-5'>
            {comments?.map(comment => <div className='cursor-pointer flex gap-3 items-center border-2 rounded-lg p-4 hover:bg-[#d8d6d6] transition-all duration-150'>
              {comment.userImg ? <div className=' p-4  my-2 flex items-center justify-center'>
                <img src={comment.userImg} className='cursor-pointer w-12 h-12  rounded-full'  alt='profilePic'/>
              </div> : <div className=' cursor-pointer w-12 h-12  p-4 rounded-full bg-blue-600 my-2 flex items-center justify-center hover:bg-blue-900'>
                <span className='text-lg font-semibold text-white'>{comment.Username.charAt(0)}</span>
              </div>}
              <div>
                <h3 className=' font-semibold text-lg'>{comment.Username}</h3>
                <p className='font-thin text-base'>{comment.text}</p>
              </div>
            </div>)}
          </div>

          <h3 className="mb-6 font-semibold my-4">Add Comment</h3>
          <div className="comment-flexbox flex gap-5 items-center ">
            {account ?
              account.photoURL ?
                <img style={{ height: '45px' }} className=' rounded-full mx-2' src={account?.photoURL}></img>
                : <div className='flex items-center justify-center mx-2 text-white bg-blue-600 hover:bg-blue-800 p-4 w-12 h-12 rounded-full font-medium'>
                  <span className='font-semibold text-xl '>{account.name?.charAt(0)}</span>
                </div>


              : <div className='w-12 h-12 text-white p-4 bg-blue-600 rounded-full flex items-center justify-center'><FaUser className='text-xl' /></div>}

            <form onSubmit={handleComment} className='flex flex-col gap-8' >
              <textarea
                disabled={account ? false : true}
                value={comment}
                cols={100}
                rows={5}
                onChange={onChangeHandler}
                className="input-box border-2 "
              />
              {account ? <button type='submit' className="comment-button btn bg-blue-600 text-white hover:bg-blue-900 w-24">
                Submit
              </button> : <div>
                <Link to={'/signin'} className='text-base font-bold text-red-600'>Please Logged In for Comment</Link></div>}
            </form>
          </div>
        </div>
        {/* comment section end */}
        {/* related section start */}
        <hr />
        <div>
          <h3 className='bold font-bold text-2xl mx-3'>সম্পর্কিত আরও পড়ুন</h3>
          <div className=' grid lg:grid-cols-3 gap-3 m-3'>
            {relatedPost?.slice(0, 3).map(item =>
              <div className='flex flex-col items-center justify-start gap-3 my-3'>
                <img src={item?.content?.img} alt="" />
                <h1 className='font-medium text-lg'>{item?.title}</h1>
              </div>
            )}


          </div>
        </div>
        {/* related section end */}



      </div>

      {/* single news end */}





      {/* latest news section start */}
      <div className='col-span-1'>
        <h1 className='text-2xl font-medium m-3'>সর্বশেষ</h1>
        <div className='flex flex-col items-center justify-start'>


          {posts?.slice(0, 3).map(item =>
            <div className='flex flex-col items-center justify-start gap-3 my-3 px-3'>
              <img src={item?.content?.img} alt="" className='w-full h-56' />
              <h1 className='font-medium text-lg'>{item?.title}</h1>
            </div>
          )}




        </div>
      </div>
      {/* latest news section end */}


    </div>
  )
}

export default PostPage