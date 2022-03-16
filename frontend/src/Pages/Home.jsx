import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { netflixOriginals } from '../Actions/MovieActions'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import RowPost from '../Components/RowPost/RowPost'


function Home() {

  const dispatch = useDispatch();

  const netflix_orginals = useSelector((state) => state.netflixOriginals);

  useEffect(() => {
    dispatch(netflixOriginals());
  }, [dispatch]);

  return (
    <div>
        <Header/>
        <Banner/>
        <RowPost title='Netflix Originals' content={netflix_orginals}/>
        <RowPost title='Horror' isSmall content={netflix_orginals}/>
        <RowPost title='Action' isSmall content={netflix_orginals}/>
        <Footer/>
    </div>
  )
}

export default Home