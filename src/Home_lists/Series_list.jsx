import React from 'react'
import Series_api from '../Api/Series_api.jsx'
import Card from '../Cards/Card'
const Series_list = () =>{

    return(
        <>
             <div className='heading_all'>
                <h3 className="home_heading">Series</h3>
                <p ><u>see all </u></p>
            </div>

            <div className="home_recent">

                {Series_api.map((val) => {

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

export default Series_list;