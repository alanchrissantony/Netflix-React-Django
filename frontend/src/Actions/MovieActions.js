import Axios from "axios"
import { ACTION_MOVIES_FAIL, ACTION_MOVIES_REQUEST, ACTION_MOVIES_SUCCESS, DOCUMENTARY_MOVIES_FAIL, DOCUMENTARY_MOVIES_REQUEST, DOCUMENTARY_MOVIES_SUCCESS, HORROR_MOVIES_FAIL, HORROR_MOVIES_REQUEST, HORROR_MOVIES_SUCCESS, MOST_WATCHED_MOVIES_FAIL, MOST_WATCHED_MOVIES_REQUEST, MOST_WATCHED_MOVIES_SUCCESS, MOVIE_DETAILS_FAIL, MOVIE_DETAILS_REQUEST, MOVIE_DETAILS_SUCCESS, MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, NETFLIX_ORIGINALS_FAIL, NETFLIX_ORIGINALS_REQUEST, NETFLIX_ORIGINALS_SUCCESS, NEW_RELEASE_MOVIES_FAIL, NEW_RELEASE_MOVIES_REQUEST, NEW_RELEASE_MOVIES_SUCCESS, POPULAR_MOVIES_FAIL, POPULAR_MOVIES_REQUEST, POPULAR_MOVIES_SUCCESS, PREMIERE_MOVIE_FAIL, PREMIERE_MOVIE_REQUEST, PREMIERE_MOVIE_SUCCESS, ROMANTIC_MOVIES_FAIL, ROMANTIC_MOVIES_REQUEST, ROMANTIC_MOVIES_SUCCESS, TRENDING_MOVIES_FAIL, TRENDING_MOVIES_REQUEST, TRENDING_MOVIES_SUCCESS } from "../Constants/MovieConstants"


export const movieList =()=> async (dispatch) =>{
    dispatch({ type: MOVIE_LIST_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/all')
        dispatch({ type: MOVIE_LIST_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: MOVIE_LIST_FAIL, payload: error.message })
    }
}


export const premiereMovie =()=> async (dispatch) =>{
    dispatch({ type: PREMIERE_MOVIE_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/premiere')
        dispatch({ type: PREMIERE_MOVIE_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: PREMIERE_MOVIE_FAIL, payload: error.message })
    }
}


export const netflixOriginals =()=> async (dispatch) =>{
    dispatch({ type: NETFLIX_ORIGINALS_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/originals')
        dispatch({ type: NETFLIX_ORIGINALS_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: NETFLIX_ORIGINALS_FAIL, payload: error.message })
    }
}


export const horrorMovies =()=> async (dispatch) =>{
    dispatch({ type: HORROR_MOVIES_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/horror')
        dispatch({ type: HORROR_MOVIES_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: HORROR_MOVIES_FAIL, payload: error.message })
    }
}


export const actionMovies =()=> async (dispatch) =>{
    dispatch({ type: ACTION_MOVIES_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/action')
        dispatch({ type: ACTION_MOVIES_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: ACTION_MOVIES_FAIL, payload: error.message })
    }
}


export const romanticMovies =()=> async (dispatch) =>{
    dispatch({ type: ROMANTIC_MOVIES_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/horror')
        dispatch({ type: ROMANTIC_MOVIES_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: ROMANTIC_MOVIES_FAIL, payload: error.message })
    }
}


export const documentary =()=> async (dispatch) =>{
    dispatch({ type: DOCUMENTARY_MOVIES_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/documentary')
        dispatch({ type: DOCUMENTARY_MOVIES_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: DOCUMENTARY_MOVIES_FAIL, payload: error.message })
    }
}







export const trendingMovies =()=> async (dispatch) =>{
    dispatch({ type: TRENDING_MOVIES_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/horror')
        dispatch({ type: TRENDING_MOVIES_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: TRENDING_MOVIES_FAIL, payload: error.message })
    }
}


export const popularMovies =()=> async (dispatch) =>{
    dispatch({ type: POPULAR_MOVIES_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/popular')
        dispatch({ type: POPULAR_MOVIES_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: POPULAR_MOVIES_FAIL, payload: error.message })
    }
}


export const newReleaseMovies =()=> async (dispatch) =>{
    dispatch({ type: NEW_RELEASE_MOVIES_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/newrelease')
        dispatch({ type: NEW_RELEASE_MOVIES_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: NEW_RELEASE_MOVIES_FAIL, payload: error.message })
    }
}


export const mostWatchedMovies =()=> async (dispatch) =>{
    dispatch({ type: MOST_WATCHED_MOVIES_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies/mostwatched')
        dispatch({ type: MOST_WATCHED_MOVIES_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: MOST_WATCHED_MOVIES_FAIL, payload: error.message })
    }
}



export const movieDetails =(id)=> async (dispatch) =>{
    dispatch({ type: MOVIE_DETAILS_REQUEST })
    try{
        const { data } = await Axios.get(`/api/movies/${id}`)
        dispatch({ type: MOVIE_DETAILS_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: MOVIE_DETAILS_FAIL, payload: error.message })
    }
}
