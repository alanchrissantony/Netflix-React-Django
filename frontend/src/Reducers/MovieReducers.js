import { MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS } from "../Constants/MovieConstants";

export const movieListReducer = (state={ loading: true, movies:[] }, action)=>{
    switch(action.type){
        case MOVIE_LIST_REQUEST:
            return { loading: true }
        case MOVIE_LIST_SUCCESS:
            return { loading: false, movies: action.payload }
        case MOVIE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}