import React, { useEffect } from "react";
import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { premiereMovie } from "../../Actions/MovieActions";
import { useNavigate } from "react-router-dom";

function Banner() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const premiere_movie = useSelector((state) => state.premiereMovie);
  const { loading, error, movies } = premiere_movie;

  useEffect(() => {
    dispatch(premiereMovie());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        "Loading"
      ) : error ? (
        "Error"
      ) : (
        <div>
          
            <div className="bannerBanner" style={{backgroundImage: "url(" + movies[0].image + ")"}}>
              <div className="bannerContent">
                <h1 className="bannerTitle">{movies[0].title}</h1>
                <div className="bannerBanner_buttons">
                  <button className="bannerButton" onClick={(e)=>{
                    e.preventDefault()
                    navigate(`/watch/${movies[0].uuid}`)
                  }}>
                    <i class="fa-solid fa-play bannerPlayIcon"></i> Play
                  </button>
                  <button className="bannerButton">
                    <i class="fa-regular fa-plus bannerListIcon"></i> My list
                  </button>
                </div>
                <h1 className="bannerDescription">
                  {
                    movies[0].content
                  }
                </h1>
              </div>

              <div className="bannerFade_bottom"></div>
            </div>
 
        </div>
      )}
    </div>
  );
}

export default Banner;
