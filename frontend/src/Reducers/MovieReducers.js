import { ACTION_MOVIES_FAIL, ACTION_MOVIES_REQUEST, ACTION_MOVIES_SUCCESS, DOCUMENTARY_MOVIES_FAIL, DOCUMENTARY_MOVIES_REQUEST, DOCUMENTARY_MOVIES_SUCCESS, HORROR_MOVIES_FAIL, HORROR_MOVIES_REQUEST, HORROR_MOVIES_SUCCESS, MOST_WATCHED_MOVIES_FAIL, MOST_WATCHED_MOVIES_REQUEST, MOST_WATCHED_MOVIES_SUCCESS, MOVIE_DETAILS_FAIL, MOVIE_DETAILS_REQUEST, MOVIE_DETAILS_SUCCESS, MOVIE_LIST_FAIL, MOVIE_LIST_REQUEST, MOVIE_LIST_SUCCESS, NETFLIX_ORIGINALS_FAIL, NETFLIX_ORIGINALS_REQUEST, NETFLIX_ORIGINALS_SUCCESS, NEW_RELEASE_MOVIES_FAIL, NEW_RELEASE_MOVIES_REQUEST, NEW_RELEASE_MOVIES_SUCCESS, POPULAR_MOVIES_FAIL, POPULAR_MOVIES_REQUEST, POPULAR_MOVIES_SUCCESS, PREMIERE_MOVIE_FAIL, PREMIERE_MOVIE_REQUEST, PREMIERE_MOVIE_SUCCESS, ROMANTIC_MOVIES_FAIL, ROMANTIC_MOVIES_REQUEST, ROMANTIC_MOVIES_SUCCESS, TRENDING_MOVIES_FAIL, TRENDING_MOVIES_REQUEST, TRENDING_MOVIES_SUCCESS } from "../Constants/MovieConstants";


export const movieListReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
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


export const premiereMovieReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case PREMIERE_MOVIE_REQUEST:
            return { loading: true }
        case PREMIERE_MOVIE_SUCCESS:
            return { loading: false, movies: action.payload }
        case PREMIERE_MOVIE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const netflixOrginalsReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case NETFLIX_ORIGINALS_REQUEST:
            return { loading: true }
        case NETFLIX_ORIGINALS_SUCCESS:
            return { loading: false, movies: action.payload }
        case NETFLIX_ORIGINALS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const horrorMovieReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case HORROR_MOVIES_REQUEST:
            return { loading: true }
        case HORROR_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }
        case HORROR_MOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const actionMovieReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case ACTION_MOVIES_REQUEST:
            return { loading: true }
        case ACTION_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }
        case ACTION_MOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const romanticMovieReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case ROMANTIC_MOVIES_REQUEST:
            return { loading: true }
        case ROMANTIC_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }
        case ROMANTIC_MOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const documentaryReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case DOCUMENTARY_MOVIES_REQUEST:
            return { loading: true }
        case DOCUMENTARY_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }
        case DOCUMENTARY_MOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}








export const trendingMovieReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case TRENDING_MOVIES_REQUEST:
            return { loading: true }
        case TRENDING_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }
        case TRENDING_MOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const popularMovieReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case POPULAR_MOVIES_REQUEST:
            return { loading: true }
        case POPULAR_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }
        case POPULAR_MOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const newReleaseMovieReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case NEW_RELEASE_MOVIES_REQUEST:
            return { loading: true }
        case NEW_RELEASE_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }
        case NEW_RELEASE_MOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export const mostWatchedMovieReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case MOST_WATCHED_MOVIES_REQUEST:
            return { loading: true }
        case MOST_WATCHED_MOVIES_SUCCESS:
            return { loading: false, movies: action.payload }
        case MOST_WATCHED_MOVIES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



export const movieDetailReducer = (state = { loading: true, movies: [] }, action) => {
    switch (action.type) {
        case MOVIE_DETAILS_REQUEST:
            return { loading: true }
        case MOVIE_DETAILS_SUCCESS:
            return { loading: false, movies: action.payload }
        case MOVIE_DETAILS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}