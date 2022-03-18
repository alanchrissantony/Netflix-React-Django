import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { movieDetails } from "../../Actions/MovieActions";
import Loading from "../Loading/Loading";
import "./Details.css";

function Details() {
  const id = window.location.pathname.split("/")[2];

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const movie_details = useSelector((state) => state.movieDetails);

  const { loading, error, movies } = movie_details;



  useEffect(() => {
    dispatch(movieDetails(id));
  }, [dispatch, id]);

  return (
    <div className="detailsMainSection">
      {loading ? (
        <Loading/>
      ) : error ? (
        <Loading/>
      ) : (
        <main class="bg-primary_black min-h-screen w-full">
          <section class="h-screen relative bg-no-repeat pb-8 pl-6 flex justify-end items-end bg-cover detailsSection"  style={{backgroundImage: "url(" + movies[0].image + ")"}}>
            <div>
              <h2 class="text-6xl font-semibold text-white my-4">
                {movies && movies[0].title}
              </h2>
              <p class=" w-11/12 md:w-5/12 font-medium text-white my-4">
                {
                  movies && movies[0].content
                }
              </p>
              <div class="flex my-4">
                
                  <button class="flex items-center bg-white py-2 px-5 rounded-md detailsPlayBtn" onClick={(e)=>{
                      e.preventDefault()
                      navigate(`/watch/${movies[0].uuid}`)
                  }}>
                    <ion-icon name="play" class="text-2xl"></ion-icon>
                    <span class="ml-3 font-medium">Play</span>
                  </button>
                
              </div>
            </div>
          </section>
          <section class="bg-primary_black  min-h-screen flex justify-center py-10">
            <div class="p-8 w-10/12 relative">
              <div className="detailsEpisodeSection">
                <h2 class="text-gray-200 text-3xl font-medium">{movies.episode && "Episode"}</h2>

                <h3 class="text-lg">
                  <a href="/"></a>
                </h3>
              </div>

              <h2 class="text-gray-200 text-3xl font-medium">Description</h2>
              <div class="flex justify-center  items-center min-w-full  movie_lis">
                <p class="text-gray-100 text-lg detailsDescription">
                  {
                    movies && movies[0].description
                  }
                </p>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default Details;
