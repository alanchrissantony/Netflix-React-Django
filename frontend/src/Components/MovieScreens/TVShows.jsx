import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { netflixOriginals } from '../../Actions/MovieActions';
import '../../App.css'
import RowPost from '../RowPost/RowPost'
import './MovieScreens.css'

function TVShows() {

  const dispatch = useDispatch();

  const netflix_orginals = useSelector((state) => state.netflixOriginals);

  useEffect(() => {
    dispatch(netflixOriginals());
  }, [dispatch]);

  return (
    <div className='folioSection'>
        <p className='folioTitle'>{'Award-Winning TV Shows'}</p>
        <RowPost title={'Trending Now'} isSmall active  content={netflix_orginals}/>
        <RowPost title={'Critically Acclaimed TV Dramas'} isSmall active  content={netflix_orginals}/>
        <RowPost title={'Top Picks for bm25'} isSmall active  content={netflix_orginals}/>
    </div>
  )
}

export default TVShows