import React from "react";
import Movies_api from "../Api/Movies_api";
import Movie_card from '../Cards/Movie_card.jsx'

const Movies = () => {

    return (
        <><div className="body_movie">
            {Movies_api.map((val) => {
                return (
                    <>
                        <Movie_card

                            key={val.id}
                            imgsrc={val.imgsrc1}
                            sname={val.sname}
                            link={val.link}
                            title ={val.titles}
                            
                        />

                    </>
                )
            })}
            </div>
        </>
    )
}

export default Movies;