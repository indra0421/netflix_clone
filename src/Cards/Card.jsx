import React from "react";
import index from '../index.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
const Card = (props) => {
    return (
        <>
            <div className="cards_div">
                <div className="card">
                    <a href={props.link} target="_blank">
                        <img src={props.imgsrc} alt="not found" className="card_img" />
                    </a>

                </div>

            </div>


        </>
    )
}

export default Card;