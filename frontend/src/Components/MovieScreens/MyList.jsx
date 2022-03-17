import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { mostWatchedMovies, newReleaseMovies, popularMovies } from '../../Actions/MovieActions';
import '../../App.css'
import RowPost from '../RowPost/RowPost'
import './MovieScreens.css'

function MyList() {

  const dispatch = useDispatch();


  const popular_movies = useSelector((state) => state.popularMovies);

  const new_releases = useSelector((state) => state.newlyReleasedMovies);

  const most_watched = useSelector((state) => state.mostWatchedMovies);

  useEffect(() => {
    dispatch(popularMovies());
    dispatch(newReleaseMovies());
    dispatch(mostWatchedMovies());
  }, [dispatch]);

  return (
    <div className='folioSection'>
        <p className='folioTitle'>{'My List'}</p>
        <RowPost title={'Recently Added'} isSmall active content={new_releases}/>
        <RowPost title={'Continue Watching'} isSmall active content={most_watched}/>
        <RowPost title={'Popular on Netflix'} isSmall active content={popular_movies}/>
    </div>
  )
}

export default MyList