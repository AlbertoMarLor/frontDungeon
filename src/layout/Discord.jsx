import React from 'react'
import Carousel from 'react-multi-carousel';


export const Discord = () => {

    const responsive = {
        superLargeDesktop: {

            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }

    return (
        <div>
            <div className="discord">
                <div className="insideDiscord">
                    <h2>Some generic maps!</h2>
                    <Carousel responsive={responsive} className='maps-slider'>
                        <div className='item'>
                            <img src="src\assets\carousel1.png" alt="Image" />
                        </div>
                        <div className='item'>
                            <img src="src\assets\TDA_GenericForest2_Path_Original_Day_GL_FREE.jpg" alt="Image" />
                        </div>
                        <div className='item'>
                            <img src="src\assets\carousel2.png" alt="Image" />
                        </div>
                        <div className='item'>
                            <img src="src\assets\TDA_GenericForest1_Crossroads_Free.jpg" alt="Image" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
