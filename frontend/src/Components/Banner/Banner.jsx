import React, { useEffect } from "react";
import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { movieList } from "../../Actions/MovieActions";

function Banner() {
  const dispatch = useDispatch();

  const listMovies = useSelector((state) => state.movieList);
  const { loading, error, movies } = listMovies;

  useEffect(() => {
    dispatch(movieList());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : error ? (
        "Error"
      ) : (
        <div>
          {movies.map((movie) => (
            <div className="bannerBanner" key={movie.uuid} style={{backgroundImage: "url(" + movie.image + ")"}}>
              <div className="bannerContent">
                <h1 className="bannerTitle">{movie.title}</h1>
                <div className="bannerBanner_buttons">
                  <button className="bannerButton">
                    <i class="fa-solid fa-play bannerPlayIcon"></i> Play
                  </button>
                  <button className="bannerButton">
                    <i class="fa-regular fa-plus bannerListIcon"></i> My list
                  </button>
                </div>
                <h1 className="bannerDescription">
                  {
                    movie.content
                  }
                </h1>
              </div>

              <div className="bannerFade_bottom"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Banner;
