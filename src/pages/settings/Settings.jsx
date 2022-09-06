import Sidebar from '../../sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
                <img
                    src='https://res.cloudinary.com/dcbbqlssh/image/upload/v1662395562/mern-blog/joanna-nix-walkup-h2pnXHMz8YM-unsplash_t7xu0m.jpg'
                    alt=''
                />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id='fileInput' style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Username"/>
            <label>Email</label>
            <input type="email" placeholder="username@gmail.com"/>
            <label>Password</label>
            <input type="password"/>
            <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}
