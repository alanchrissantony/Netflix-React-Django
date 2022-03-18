import React, { useEffect } from "react";
import "./play.css";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { movieDetails } from "../../Actions/MovieActions";
import Loading from "../Loading/Loading";

function Play() {
  const id = window.location.pathname.split("/")[2];

  const dispatch = useDispatch();

  const movie_details = useSelector((state) => state.movieDetails);

  const { loading, error, movies } = movie_details;

  useEffect(() => {
    dispatch(movieDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <Loading />
      ) : (
        <main class="bg-primary_black h-full w-full ">
          <iframe
            class="w-full h-screen player"
            src={movies[0].videos}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </main>
      )}
    </div>
  );
}

export default Play;
