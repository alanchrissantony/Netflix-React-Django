import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { actionMovieReducer, documentaryReducer, horrorMovieReducer, mostWatchedMovieReducer, movieDetailReducer, movieListReducer, netflixOrginalsReducer, newReleaseMovieReducer, popularMovieReducer, premiereMovieReducer, romanticMovieReducer, trendingMovieReducer } from '../Reducers/MovieReducers';

const reducer = combineReducers({
    moviesList: movieListReducer,

    premiereMovie: premiereMovieReducer,
    netflixOriginals: netflixOrginalsReducer,
    horrorMovies: horrorMovieReducer,
    actionMovies: actionMovieReducer,
    romanticMovies: romanticMovieReducer,
    documentaries: documentaryReducer,

    trendingMovies: trendingMovieReducer,
    popularMovies: popularMovieReducer,
    newlyReleasedMovies: newReleaseMovieReducer,
    mostWatchedMovies: mostWatchedMovieReducer,

    movieDetails: movieDetailReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))


export default store