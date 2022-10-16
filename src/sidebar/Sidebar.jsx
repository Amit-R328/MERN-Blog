import { useState } from 'react'
import './sidebar.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    const [cats, setCats] = useState([])

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats()
    }, [])

    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className='sidebarTitle'>ABOUT ME</span>
                <img src='https://res.cloudinary.com/dcbbqlssh/image/upload/v1662394989/mern-blog/gian-cescon-00ByEXKcSkA-unsplash_dt7fzz.jpg' alt='' />
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolores obcaecati ea magni molestias mollitia, officia magnam asperiores maiores neque aperiam rem sint? Facere deleniti iusto, adipisci exercitationem id sed.
                </p>
            </div>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className='sidebarList'>
                    {cats.map(c => (
                        <Link className='link' to={`/?cat=${c.name}`} key={c._id}>
                            <li className="sidebarListItem">{c.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="sidebarItem">
                <span className='sidebarTitle'>FOLLOW US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcon fa-brands fa-square-instagram"></i>
                </div>
            </div>
        </div>
    )
}
