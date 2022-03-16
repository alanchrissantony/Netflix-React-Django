import React from 'react'
import '../../App.css'
import RowPost from '../RowPost/RowPost'
import './MovieScreens.css'

function TVShows() {
  return (
    <div className='folioSection'>
        <p className='folioTitle'>{'My List'}</p>
        <RowPost title={'Recently Added'} isSmall active/>
        <RowPost title={'Continue Watching'} isSmall active/>
        <RowPost title={'Popular on Netflix'} isSmall active/>
    </div>
  )
}

export default TVShows