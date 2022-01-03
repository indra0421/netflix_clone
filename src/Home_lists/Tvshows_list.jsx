import React from 'react'
import Tvshows_api from '../Api/Tvshows_api.jsx'
import Card from '../Cards/Card'
const Tvshows_list = () => {

    return (
        <>
            <div className='heading_all'>
                <h3 className="home_heading">Tvshows</h3>
                <p ><u>See ll </u></p>
            </div>

            <div className="home_recent">

                {Tvshows_api.map((val) => {

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

export default Tvshows_list;