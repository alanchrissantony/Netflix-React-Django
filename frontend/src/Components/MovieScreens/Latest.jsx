import React from 'react'
import '../../App.css'
import RowPost from '../RowPost/RowPost'
import './MovieScreens.css'

function TVShows() {
  return (
    <div className='folioSection'>
        <p className='folioTitle'>{'Latest'}</p>
        <RowPost title={'Trending Now'} isSmall active/>
        <RowPost title={'New Releases'} isSmall active/>
        <RowPost title={'Popular Movies'} isSmall active/>
    </div>
  )
}

export default TVShows