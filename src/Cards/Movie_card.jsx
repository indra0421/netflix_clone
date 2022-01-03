import React from "react";
import index from '../index.css'

function Movie_card(props) {
    return (

        <>
        
            <div className='cards_movie'>
                <div className='card_movie'>
                    <img src={props.imgsrc} alt="mypic" className="card_img_movie" />
                    <div className="card_info_movie">
                        {/* <span className="card_catagory_movie">{props.title}</span> */}
                        <h3 className="card_title_movie">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button>Download Now</button>
                        </a>

                    </div>
                </div>
            </div>

        </>

    );
}

export default Movie_card;