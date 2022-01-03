import React from 'react'
import Recent_api from "../Api/Recent_api";
import Card from '../Cards/Card'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Recent_list = () => {

    return (
        <>
            
                <div className='heading_all'>
                    <h3 className="home_heading">Recents</h3>
                    <p ><u>see all </u></p>
                </div>

                <div className="home_recent">

                    {Recent_api.map((val) => {

                        return (
                            <>

                                <Card
                                    key={val.id}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    link={val.link}

                                />

                            </>
                        )
                    })}

                </div>
           
        </>
    )
}

export default Recent_list;