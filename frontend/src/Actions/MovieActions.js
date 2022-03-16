import Axios from "axios"
import { MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, NETFLIX_ORIGINALS_FAIL, NETFLIX_ORIGINALS_REQUEST, NETFLIX_ORIGINALS_SUCCESS } from "../Constants/MovieConstants"

export const movieList =()=> async (dispatch) =>{
    dispatch({ type: MOVIE_LIST_REQUEST })
    try{
        const { data } = await Axios.get('/api/index/filmed')
        dispatch({ type: MOVIE_LIST_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: MOVIE_LIST_FAIL, payload: error.message })
    }
}


export const netflixOriginals =()=> async (dispatch) =>{
    dispatch({ type: NETFLIX_ORIGINALS_REQUEST })
    try{
        const { data } = await Axios.get('/api/index/netflix/originals')
        dispatch({ type: NETFLIX_ORIGINALS_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: NETFLIX_ORIGINALS_FAIL, payload: error.message })
    }
}