import './comment.css'
import { Context } from '../../context/Context'
import { useContext } from 'react'
import axios from 'axios'

export default function Comment({ comment }) {
    const { user } = useContext(Context)
    const PF = "http://localhost:9000/images/"

    const handleDelete = async () => {
        try {
            await axios.delete(`/comments/${comment._id}`, {
                data: { username: user.username }
            })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="comment">
            <div className="commentRight">
                <div className="commentHeader">
                    {comment.photo ?
                        <img src={PF + comment.photo} alt='' className="commentPic" /> :
                        <img src='https://res.cloudinary.com/dcbbqlssh/image/upload/v1665976352/mern-blog/placeholder_yqjspx.jpg'
                            alt='placeholder' className="commentPic" />}
                    <p className='commentor'>{comment.username}</p>
                </div>
                <div className="commentDesc">
                    <p>{comment.desc}</p>
                </div>
            </div>
            <div className="commentLeft">
            {comment.username === user?.username && (
                            <div className='singlePostEdit'>
                                <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                            </div>
                        )}
            </div>
        </div>
    )
}