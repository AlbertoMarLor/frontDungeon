import React from 'react'
import { Container } from 'react-bootstrap'


export const Hero = () => {
    return (


        <div className='hero'>
            <Container >
                <div className="hero-text">
                    <h1>THE DUNGEON ARCHIVE</h1>
                    <h3>In a magical world of fantasy, where mythical beasts are roaming and ancient hunting will be waiting for you. Go on an epic journey to forge alliances, conquer enemies and tell your story of heroism</h3>

                </div>
                <div className="module-border-wrap">
                    <div className='module'>
                        PATREON
                    </div>
                </div>

                <div className="buttons">
                    <button id="btn">
                        PATREON
                    </button>

                    <button id="btn">
                        TRAILER
                    </button>

                </div>


            </Container>
        </div>
    )
}
