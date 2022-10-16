import BurgerMenu from '../burgerMenu/BurgerMenu'
import React, { useEffect, useState, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from "../../src/context/Context"
import './topbar.css'

export default function TopBar() {
  const {user, dispatch} = useContext(Context)
  const [isSideMenu, setSideMenu] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    document.addEventListener("click", handleSideClickOutside)
  }, [isSideMenu])

  const handleLogout = () => {
    dispatch({type:"LOGOUT"})
  }

  const handleSideClickOutside = (e) => {
    if (menuRef.current && isSideMenu && !menuRef.current.contains(e.target)) onToggleSideMenu()
  }

  const onToggleSideMenu = () => {
    console.log('on toggle side menu', isSideMenu)
    let flag = !isSideMenu
    setSideMenu(flag)
  }

  return (
    <div>
      <div className="top">
        <div className="topLeft">
          <div className="side-menu">
            <button ref={menuRef} onClick={onToggleSideMenu} className={`hamburger-icon`}>
              {isSideMenu && <BurgerMenu menuOpen={isSideMenu} closeMenu={onToggleSideMenu} />}
            </button>
          </div>
          <i className="topIcon fa-brands fa-square-facebook"></i>
          <i className="topIcon fa-brands fa-square-twitter"></i>
          <i className="topIcon fa-brands fa-square-pinterest"></i>
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className="topCenter">
          <ul className='topList'>
            <li className='topListItem'>
              <Link to="/" className='link'>HOME</Link>
            </li>
            <li className='topListItem'><Link to="/" className='link'>ABOUT</Link></li>
            <li className='topListItem'><Link to="/" className='link'>CONTACT</Link></li>
            <li className='topListItem'><Link to="/write" className='link'>WRITE</Link></li>
            <li className='topListItem' onClick={handleLogout}>{user && "LOGOUT"}</li>
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <img
              className='topImg'
              src='https://res.cloudinary.com/dcbbqlssh/image/upload/v1662395562/mern-blog/joanna-nix-walkup-h2pnXHMz8YM-unsplash_t7xu0m.jpg'
              alt=''
            />
          ) : (
            <ul className='topList'>
              <li className='topListItem'><Link to="/login" className='link'>LOGIN</Link></li>
              <li className='topListItem'><Link to="/register" className='link'>REGISTER</Link></li>
            </ul>
          )
          }
          <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  )
}
