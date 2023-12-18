import React from 'react'
import FadeCarousel from '../components/FadeCarousel'


export const Overview = () => {
    return (
        <>

            <div className='overview'>
                <div className="overviewText">
                    <h2 >100+ beautifully crafted maps</h2>
                    <p>We've been adding to our archive for over a year. Now, it's bursting with over 100 hand-drawn maps, with new map packs added every week.  Just head over to our Patreon, choose the Master Cartographer membership level, and you can get access to the whole lot!</p>
                </div>
                <div className="carouselDiv">

                    <FadeCarousel />
                </div>
            </div>
        </>
    )
}
