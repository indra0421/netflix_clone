import React from 'react'
import Trending_api from '../Api/Trending_api.jsx'
import Card from '../Cards/Card'
const Trending_list = () => {

    return (
        <>
            <div className='heading_all'>
                <h3 className="home_heading">Trending</h3>
                <p ><u>see all </u></p>
            </div>

            <div className="home_recent">

                {Trending_api.map((val) => {

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

export default Trending_list;