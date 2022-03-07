import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='bannerBanner'>
            
            <div className="bannerContent">
                <h1 className="bannerTitle">{'Spider-Man: No Way Home'}</h1>
                <div className="bannerBanner_buttons">
                    <button className="bannerButton"><i class="fa-solid fa-play bannerPlayIcon"></i>{' '}Play</button>
                    <button className="bannerButton"><i class="fa-regular fa-plus bannerListIcon"></i>{' '}My list</button>
                </div>
                <h1 className="bannerDescription">{"With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange."}</h1>
            </div>
            
            <div className="bannerFade_bottom">

            </div>
        </div>
  )
}

export default Banner