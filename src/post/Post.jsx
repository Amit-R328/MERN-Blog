import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src='https://res.cloudinary.com/dcbbqlssh/image/upload/v1662397367/mern-blog/holly-mandarich-UVyOfX3v0Ls-unsplash_v7ixw1.jpg' alt=''/>
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className='postTitle'>Lorem ipsum dolor sit amet</span>
            <hr/>
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro omnis voluptatum recusandae fugiat velit, corporis voluptates eum accusantium ea fugit unde optio, excepturi veritatis laudantium quod natus minima obcaecati!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro omnis voluptatum recusandae fugiat velit, corporis voluptates eum accusantium ea fugit unde optio, excepturi veritatis laudantium quod natus minima obcaecati!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam porro omnis voluptatum recusandae fugiat velit, corporis voluptates eum accusantium ea fugit unde optio, excepturi veritatis laudantium quod natus minima obcaecati!
        </p>
    </div>
  )
}
