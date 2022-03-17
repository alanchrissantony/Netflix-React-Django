import React from "react";
import "./RowPost.css";

function RowPost(props) {
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
                alt=""
                className={props.isSmall ? "smallPoster" : "poster"}
              />

            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default RowPost;
