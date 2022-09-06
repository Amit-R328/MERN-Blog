import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img
                    src='https://res.cloudinary.com/dcbbqlssh/image/upload/v1662397367/mern-blog/holly-mandarich-UVyOfX3v0Ls-unsplash_v7ixw1.jpg'
                    alt=''
                    className='singlePostImg' />
                <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet.
                    <div className='singlePostEdit'>
                        <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-regular fa-trash-can"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className='singlePostAuthor'>Author: <b>Amit</b></span>
                    <span className='singlePostDate'>1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti voluptatem repellat accusamus pariatur assumenda a provident accusantium ipsam repudiandae odit asperiores inventore obcaecati, ex cum vitae placeat quisquam earum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti voluptatem repellat accusamus pariatur assumenda a provident accusantium ipsam repudiandae odit asperiores inventore obcaecati, ex cum vitae placeat quisquam earum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti voluptatem repellat accusamus pariatur assumenda a provident accusantium ipsam repudiandae odit asperiores inventore obcaecati, ex cum vitae placeat quisquam earum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti voluptatem repellat accusamus pariatur assumenda a provident accusantium ipsam repudiandae odit asperiores inventore obcaecati, ex cum vitae placeat quisquam earum.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab corrupti voluptatem repellat accusamus pariatur assumenda a provident accusantium ipsam repudiandae odit asperiores inventore obcaecati, ex cum vitae placeat quisquam earum.
                </p>
            </div>
        </div>
    )
}
