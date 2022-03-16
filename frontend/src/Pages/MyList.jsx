import React from 'react'
import MyList from '../Components/MovieScreens/MyList'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function ModelPage(props) {

  return (
    <div>
        <Header/>
        <MyList/>
        <Footer/>
    </div>
  )
}

export default ModelPage