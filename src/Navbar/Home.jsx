import React from "react";
import index from '../index.css'
import Recent_list from '../Home_lists/Recent_list'
import Trending_list from '../Home_lists/Trending_list'
import Tvshows_list from '../Home_lists/Tvshows_list'
import Series_list from '../Home_lists/Series_list'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Home = () => {

    return (
        <>


            <Recent_list />
            <Trending_list />
            <Tvshows_list />
            <Series_list />
            <Recent_list />

        </>
    )
}

export default Home;