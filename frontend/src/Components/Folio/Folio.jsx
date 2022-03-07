import React from 'react'
import '../../App.css'
import RowPost from '../RowPost/RowPost'
import './Folio.css'

function Folio(props) {
  return (
    <div className='folioSection'>
        <p className='folioTitle'>{props.headTitle}</p>
        <RowPost title={props.titleOne} isSmall active/>
        <RowPost title={props.titleTwo} isSmall active/>
        <RowPost title={props.titleThree} isSmall active/>
    </div>
  )
}

export default Folio