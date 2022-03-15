import Axios from "axios"
import { MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS } from "../Constants/MovieConstants"

export const movieList =()=> async (dispatch) =>{
    dispatch({ type: MOVIE_LIST_REQUEST })
    try{
        const { data } = await Axios.get('/api/movies')
        dispatch({ type: MOVIE_LIST_SUCCESS, payload: data })
    }catch(error){
        dispatch({ type: MOVIE_LIST_FAIL, payload: error.message })
    }
}