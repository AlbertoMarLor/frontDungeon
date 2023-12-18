import Carousel from 'react-bootstrap/Carousel';


function FadeCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img className='carousel' src="src\assets\carousel1.png" />

            </Carousel.Item>
            <Carousel.Item>
                <img className='carousel' src="src\assets\carousel2.png" />

            </Carousel.Item>
            <Carousel.Item>
                <img className='carousel' src="src\assets\carousel3.png" />

            </Carousel.Item>
        </Carousel>
    );
}

export default FadeCarousel;