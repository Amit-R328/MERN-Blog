import { useEffect, useState, useContext } from 'react'
import './commentsWrapper.css'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import Comment from './comment/Comment'
import { Context } from '../context/Context'

export default function CommentsWrapper() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [comments, setComments] = useState([])
    const { user } = useContext(Context)
    const [commentContent, setCommentContent] = useState('')
    const [addCommentMode, setAddCommentMode] = useState(false)

    useEffect(() => {
        const getComments = async () => {
            const res = await axios.get("/comments/" + path)
            setComments(res.data)
        }
        getComments()
    }, [path, addCommentMode])

    const addComment = async (e) => {
        e.preventDefault();
        const newComment = {
            username: user.username,
            photo: user.profilePic, 
            desc: commentContent, 
            post: path,
          };
        try {
            await axios.post("/comments/", newComment)
            setAddCommentMode(false)
            // window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <main className='commentsWrapper'>
            {comments.map(c => (
                <Comment key={c._id} comment={c}/>
            ))}
            <button className='addCommentBtn' onClick={()=>setAddCommentMode(true)}>Add Comment</button>
            {addCommentMode && (<form onSubmit={addComment}>
                <textarea type="text" placeholder='Write your comment' className='writeComment'
            onChange={e => setCommentContent(e.target.value)}></textarea>
            <button type='submit' className='addCommentBtn'>Submit</button>
            </form>)}
        </main>
    )
}