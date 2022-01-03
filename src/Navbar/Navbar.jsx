import React from "react";
import netflix_logo2 from './netflix_logo2.jpg'
import index from '../index.css'
import Menu from '../Menu'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import Tooltip from '@mui/material/Tooltip';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import TemporaryDrawer from '../responsive_button.jsx'
const Navbar = () => {
    return (
        <>
            <div className="nav_bar">
                <div className="nav_bar_inside">
                    <div className="netflix_logo">
                        <img src={netflix_logo2} alt="loading..." />
                    </div>

                    <div className="nav_menu">
                        <Menu />
                    </div>

                </div>
                <div className="end_nav">

                    <button className="search_nav"><SearchIcon /></button>
                    <div><input placeholder="   search" type="text" className="nav_inp" /></div>

                    {/* <button className="delete_nav"><ClearIcon /></button> */}

                    <Tooltip title='Notifications'>
                        <button onClick={() => {
                            return (
                                alert('notification icon clicked')
                            )
                        }} className="nav_not"><NotificationsActiveIcon /></button>
                    </Tooltip>
                    <Tooltip title='profile'>
                        <button onClick={() => {
                            return (
                                alert('profile icon clicked')
                            )
                        }} className="nav_profile"><AccountCircleIcon /></button>
                    </Tooltip>
                    <Tooltip title='settings'>
                        <button className="nav_settings_s">
                            <TemporaryDrawer />
                        </button>
                    </Tooltip>

                </div>
            </div>
        </>
    )
}

export default Navbar;