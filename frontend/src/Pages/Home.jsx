import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionMovies, horrorMovies, netflixOriginals } from '../Actions/MovieActions'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import RowPost from '../Components/RowPost/RowPost'


function Home() {

  const dispatch = useDispatch();

  const netflix_orginals = useSelector((state) => state.netflixOriginals);

  const horror_movies = useSelector((state) => state.horrorMovies);

  const action_movies = useSelector((state) => state.actionMovies);

  useEffect(() => {
    dispatch(netflixOriginals());
    dispatch(horrorMovies());
    dispatch(actionMovies())
  }, [dispatch]);

  return (
    <div>
        <Header/>
        <Banner/>
        <RowPost title='Netflix Originals' content={netflix_orginals}/>
        <RowPost title='Horror' isSmall content={horror_movies}/>
        <RowPost title='Action' isSmall content={action_movies}/>
        <RowPost title='Romance' isSmall content={netflix_orginals}/>
        <RowPost title='Documentary' isSmall content={netflix_orginals}/>
        <Footer/>
    </div>
  )
}

export default Home