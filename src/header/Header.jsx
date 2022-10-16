import './header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>My</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src="https://res.cloudinary.com/dcbbqlssh/image/upload/v1662398070/mern-blog/tomoko-uji-kxvn1ogpTtE-unsplash_ldodcj.jpg" alt=''/>
    </div>
  )
}
