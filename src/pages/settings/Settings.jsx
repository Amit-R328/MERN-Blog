
import { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'
import Sidebar from '../../sidebar/Sidebar'
import './settings.css'

export default function Settings() {
  const PF = "http://localhost:9000/images/"
  const [file, setFile] = useState(null)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [success, setSuccess] = useState(false)
  const { user, dispatch } = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"UPDATE_START"})
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      dispatch({type:"UPDATE_SUCCESS", payload: updatedUser})
      setSuccess(true)
    } catch (err) {
      console.log(err)
      dispatch({type:"UPDATE_FAILURE"})
    }
  };

  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="settingsPP">
            {!file ? (user.profilePic ? (
              <img
                src={PF + user.profilePic}
                alt=''
              />
            ) : (<img
              src='https://res.cloudinary.com/dcbbqlssh/image/upload/v1665976352/mern-blog/placeholder_yqjspx.jpg'
              alt='placeholder'
            />)) : <img src={URL.createObjectURL(file)} alt=''/>}
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input
              type="file"
              id='fileInput'
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
          <label>Email</label>
          <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" onChange={e=>setPassword(e.target.value)} />
          <button className='settingsSubmit' type='submit'>Update</button>
          {success && <span style={{color: "green"}}>Profile has been updated</span>}
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
