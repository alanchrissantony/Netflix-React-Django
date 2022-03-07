import React from 'react'
import './RowPost.css'

function RowPost(props) {



  return (
    <div className='row'>
            <p className={props.active ? 'rowPosterTitle active' : 'rowPosterTitle'}>{props.title}</p>
            <div className="posters">
                
                    <img src={'https://wallpaperfx.com/view_image/john-wick-movie-poster-1536x864-wallpaper-17077.jpg'} alt="" className={props.isSmall ? 'smallPoster':'poster'} />
                    <img src={'https://i0.wp.com/www.heyuguys.com/images/2015/10/star-wars-the-force-awakens-poster-landscape.jpg?fit=1536%2C864&ssl=1'} alt="" className={props.isSmall ? 'smallPoster':'poster'} />
                    <img src={'https://wallpaperfx.com/view_image/captain-america-2-movie-1536x864-wallpaper-14305.jpg'} alt="" className={props.isSmall ? 'smallPoster':'poster'} />
                    <img src={'https://wallpaperfx.com/view_image/thor-the-dark-world-movie-poster-1536x864-wallpaper-15988.jpg'} alt="" className={props.isSmall ? 'smallPoster':'poster'} />
                    <img src={'https://wallpaperfx.com/view_image/ripd-2013-1536x864-wallpaper-12552.jpg'} alt="" className={props.isSmall ? 'smallPoster':'poster'} />
                    <img src={'https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422'} alt="" className={props.isSmall ? 'smallPoster':'poster'} />
             
            </div>
            
        </div>
  )
}

export default RowPost