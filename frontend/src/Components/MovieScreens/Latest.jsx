import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mostWatchedMovies, newReleaseMovies, popularMovies, trendingMovies } from '../../Actions/MovieActions';
import '../../App.css'
import RowPost from '../RowPost/RowPost'
import './MovieScreens.css'

function Latest() {

  const dispatch = useDispatch();

  const trending_movies = useSelector((state) => state.trendingMovies);

  const popular_movies = useSelector((state) => state.popularMovies);

  const new_releases = useSelector((state) => state.newlyReleasedMovies);

  const most_watched = useSelector((state) => state.mostWatchedMovies);

  useEffect(() => {
    dispatch(trendingMovies());
    dispatch(popularMovies());
    dispatch(newReleaseMovies());
    dispatch(mostWatchedMovies());
  }, [dispatch]);

  return (
    <div className='folioSection'>
        <p className='folioTitle'>{'Latest'}</p>
        <RowPost title={'Trending Now'} isSmall active content={trending_movies}/>
        <RowPost title={'New Releases'} isSmall active content={new_releases}/>
        <RowPost title={'Popular Movies'} isSmall active content={popular_movies}/>
        <RowPost title={'Most Watched'} isSmall active content={most_watched}/>
    </div>
  )
}

export default Latest