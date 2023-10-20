import React, { useContext, useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import { base_url } from '../../../../base_url/Base_url';
import { FaXmark } from "react-icons/fa6";
import { useNavigate, useParams } from 'react-router-dom';
import { MainContext } from '../../context/PostContext';
import Swal from 'sweetalert2'

const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['link'],       // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
];


const module = {
    toolbar: toolbarOptions
}
const quillStyle = {
    height: '300px'
}



const Addnewpost = () => {

    const { setPosts } = useContext(MainContext)
    const [title, setTitle] = useState('')

    const [tagsInput, setTagsInput] = useState('');
    const [tags, setTags] = useState([]);
    const [imgUrl, setImgUrl] = useState('');


    const [file, setFile] = useState('')
    const [value, setValue] = useState()
    const categories = [
        "Entertainment",
        "Finance",
        "Health",
        "International",
        "National",
        "Politics",
        "Technology",
    ];
    const [category, setCategory] = useState('')

    const navigate = useNavigate();






    const handleAddItem = () => {

        if (tagsInput) {
            setTags([...tags, tagsInput]);
            setTagsInput(''); // Clear the input field
        }
    };

    const handleRemoveTags = (i) => {
        const newData = tags.filter((_, index) => index !== i);
        setTags(newData);
    }


    const handleFileChange = async (e) => {
        console.log(e.target.files[0])
        const formData = new FormData();
        formData.append('image', e.target.files[0]);
        const Api = "https://api.imgbb.com/1/upload?expiration=15858432000&key=7dfd97eb382b65ec8ec1a88ce98dfab1";
        axios.post(Api, formData)
            .then((res) => {
                console.log(res)
                const url = res.data.data.url;
                setImgUrl(url);
                console.log({ imgUrl })

            })
            .catch((err) => {
                console.log(err);
            });

    };


    console.log({imgUrl});







    const handleSubmit = async (e) => {
        console.log('clicked')
        e.preventDefault();
        if (imgUrl) {
            const data = {
                title,
                content: {
                    desc: value,
                    img: imgUrl
                },
                category,
                tags
            }
            console.log(data)
            await axios.post(`${base_url}/createblog`, data, { withCredentials: true }).then(res => {
                console.log(res)
                if (res.status === 200) {
                    setPosts(res.data)
                    setTitle(''),
                        setValue(''),
                        setTags(''),
                        setCategory(''),
                        setFile(''),
                        setImgUrl(''),
                        setTagsInput(''),
                        navigate('/posts')

                }
                setPosts(res.data)
                Swal.fire(
                    'AddnewPost!',
                    'Your Post has a SuccessFullay.',
                    'success'
                )

            }).catch(err => {
                console.log(err);
            })
        }

    }




    // console.log({ title, value, imgUrl, category, tags })



    return (
        <div className='mt-[100px] '>
            <div className='card card-compact bg-base-100 shadow-xl w-[60%] mx-auto'>
                <h1 className='w-full bg-blue-600 text-white rounded py-3 mx-auto text-center font-bold'>Add New Post</h1>
                <div className='mx-auto lg:w-full'>
                    <form className="card-body" onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-control">
                            <label htmlFor='title' className="label" >
                                <span className="label-text font-medium text-lg">Title</span>
                            </label>
                            <input id='title' type="text" name='title' placeholder="Post Title" className="input input-bordered  focus:outline-blue-600" value={title} onChange={(e) => setTitle(e.target.value)} />

                        </div>
                        <div className="form-control">
                            <label htmlFor='desc' className="label">
                                <span className="label-text font-medium text-lg">Description</span>
                            </label>
                            <ReactQuill theme="snow" value={value} onChange={setValue} modules={module} style={quillStyle} />



                        </div>
                        <div className="form-control mt-20">
                            <label htmlFor='image' className="label">
                                <span className="label-text font-medium text-lg">Image</span>
                            </label>
                            <input type="file" name='image' id='image' className="focus:outline-blue-600 file-input file-input-bordered w-full " onChange={(e) => handleFileChange(e)} />



                        </div>
                        <div className="form-control">
                            <label htmlFor='category' className="label">
                                <span className="label-text font-medium text-lg">Category</span>
                            </label>
                            <select id='category' name='category' className="focus:outline-blue-600 select select-bordered w-full" onChange={(e) => setCategory(e.target.value)}>
                                <option disabled selected>Select The Category?</option>

                                {categories && categories.map(item => <option>{item}</option>)}
                            </select>

                        </div>

                        <div className="form-control">
                            <label htmlFor='tags' className="label" >
                                <span className="label-text font-medium text-lg">Tags</span>
                            </label>

                            <div className='flex justify-between items-center'>
                                <input id='tags' type="text" name='tags' placeholder="Enter Tags" className="input input-bordered  focus:outline-blue-600 lg:w-[85%]" value={tagsInput} onChange={(e) => setTagsInput(e.target.value)} />
                                <button className='btn bg-blue-600 text-white ' type='button' onClick={handleAddItem}>Add</button>
                            </div>
                            <div className='grid grid-cols-4 gap-3  flex-wrap mt-5'>
                                {tags?.map((tag, i) => <div className=' cursor-pointer  flex justify-between items-center  bg-blue-900 p-2  rounded text-white'>
                                    <span>{tag}</span>
                                    <FaXmark className='cursor-pointer' onClick={() => handleRemoveTags(i)} />
                                </div>)}
                            </div>
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn bg-blue-600 text-white hover:bg-blue-800 duration-300" type="submit" value="Add Post" />
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Addnewpost