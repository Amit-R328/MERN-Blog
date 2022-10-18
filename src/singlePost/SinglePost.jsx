import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import './singlePost.css'
import { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../context/Context'
import CommentsWrapper from '../comments/CommentsWrapper'
import { MultiSelect } from 'react-multi-select-component'


export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const PF = "http://localhost:9000/images/"
    const { user } = useContext(Context)
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const [selectedCats, setSelectedCats] = useState([])
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path)
            setPost(res.data)
            setTitle(res.data.title)
            setDesc(res.data.desc)
            setSelectedCats(res.data.categories)
        }
        getPost()
    }, [path])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])


    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username }
            })
            window.location.replace("/")
        } catch (err) {
            console.log(err)
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await axios.put(`/posts/${post._id}`, { username: user.username, title, desc, categories: selectedCats.map(s => { return { name: s.value } }) })
            // window.location.reload()
            setUpdateMode(false)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                {post.photo && (<img
                    src={PF + post.photo}
                    alt=''
                    className='singlePostImg' />)}
                {updateMode ? <input type="text" value={title} className='singlePostTitleInput' autoFocus onChange={(e) => setTitle(e.target.value)} /> : (
                    <h1 className='singlePostTitle'>{title}
                        {post.username === user?.username && (
                            <div className='singlePostEdit'>
                                <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={() => setUpdateMode(true)}></i>
                                <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                            </div>
                        )}
                    </h1>
                )}
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <Link to={`/?user=${post.username}`} className='link'><b>{post.username}</b></Link></span>
                    {
                        post.categories &&
                        <div className='postCats'>
                            {post.categories.map(c => (<Link className='link' to={`/?cat=${c.name}`} key={c._id}><span className="postCat">{c.name}</span></Link>))}
                        </div>
                    }
                    <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode &&
                    <MultiSelect
                        options={cats.map(c => { return { label: c.name, value: c.name } })}
                        value={selectedCats}
                        onChange={setSelectedCats}
                        hasSelectAll={false}
                    />}


                {updateMode ? (<textarea className='singlePostDescInput' value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>) :
                    <p className='singlePostDesc'>
                        {desc}
                    </p>
                }
                {updateMode && (
                    <button className='singlePostButton' onClick={handleUpdate}>Update</button>
                )}
            </div>
            <div className="comments">
                <h3>comments</h3>
                <CommentsWrapper />
            </div>
        </div>
    )
}
