import React from "react";
import { NavLink } from "react-router-dom";
import index from './index.css'
import ListItem from '@mui/material/ListItem';

const Menu = () => {

    return (
        <>
            <ListItem className="listitem_menu">
                <div><NavLink exact activeClassName="active1" to="/netflix_clone" style={{ textDecoration: 'none' }}><p>Home</p></NavLink></div>

                <div><NavLink exact activeClassName="active1" to="/tvshows" style={{ textDecoration: 'none' }}><p>TVShows</p></NavLink></div>

                <div><NavLink exact activeClassName="active1" to="/movies" style={{ textDecoration: 'none' }}><p>Movies</p></NavLink></div>

                <div><NavLink exact activeClassName="active1" to="/radded" style={{ textDecoration: 'none' }}><p>RecentlyAdded</p></NavLink></div>
                
                <div><NavLink exact activeClassName="active1" to="/mylist" style={{ textDecoration: 'none' }}><p>MyList</p></NavLink></div>
            </ListItem>
        </>
    )
}
export default Menu;