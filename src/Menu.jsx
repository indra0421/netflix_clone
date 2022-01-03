import React from "react";
import { NavLink } from "react-router-dom";
import index from './index.css'
const Menu = () => {

    return (
        <>
            <div><NavLink exact activeClassName="active1" to="/home" style={{ textDecoration: 'none' }}><p>Home</p></NavLink></div>
            <div><NavLink exact activeClassName="active1" to="/tvshows" style={{ textDecoration: 'none' }}><p>TVShows</p></NavLink></div>
            <div><NavLink exact activeClassName="active1" to="/movies" style={{ textDecoration: 'none' }}><p>Movies</p></NavLink></div>
            <div><NavLink exact activeClassName="active1" to="/radded" style={{ textDecoration: 'none' }}><p>RecentlyAdded</p></NavLink></div>
            <div><NavLink exact activeClassName="active1" to="/mylist" style={{ textDecoration: 'none' }}><p>MyList</p></NavLink></div>
        </>
    )
}
export default Menu;