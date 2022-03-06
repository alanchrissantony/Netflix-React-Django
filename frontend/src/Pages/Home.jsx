import React from 'react'
import Banner from '../Components/Banner/Banner'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import RowPost from '../Components/RowPost/RowPost'


function Home() {

  

  return (
    <div>
        <Header/>
        <Banner/>
        <RowPost title='Netflix Originals'/>
        <RowPost title='Horror' isSmall />
        <RowPost title='Action' isSmall />
        <Footer/>
    </div>
  )
}

export default Home