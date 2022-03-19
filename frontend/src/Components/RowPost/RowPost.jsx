import React from "react";
import { useNavigate } from "react-router-dom";
import "./RowPost.css";

function RowPost(props) {

  const navigate = useNavigate()

  const { loading, error, movies } = props.content;

  return (
    <div>
      {loading ? (
        "Loading"
      ) : error ? (
        "Error"
      ) : (
        <div className="row">
          <p
            className={
              props.active ? "rowPosterTitle active" : "rowPosterTitle"
            }
          >
            {props.title}
          </p>
          <div className="posters">
            {movies.map((movie) => (
            
              <img
              key={movie.uuid}
                src={
                  movie.flyer
                }
                alt={movie.image}
                className={props.isSmall ? "smallPoster" : "poster"}
                onClick={(e)=>{
                  e.preventDefault()
                  navigate(`/movie/${movie.uuid}`)
                }}
              />

            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RowPost;
