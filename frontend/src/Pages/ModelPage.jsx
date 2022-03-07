import React from 'react'
import Folio from '../Components/Folio/Folio'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'

function ModelPage(props) {

  return (
    <div>
        <Header/>
        <Folio headTitle={props.headTitle} titleOne={props.titleOne} titleTwo={props.titleTwo} titleThree={props.titleThree}/>
        <Footer/>
    </div>
  )
}

export default ModelPage