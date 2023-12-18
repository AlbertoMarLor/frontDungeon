import React from 'react'
import SuscriptionCard from '../components/SuscriptionCard'
import image1 from '../assets/sus1.png'
import image2 from '../assets/sus2.png'
import image3 from '../assets/sus3.png'


export const Suscription = () => {


    const level1 = <>
        <h3>Scribe</h3>
        <p>€ 1/release (más VAT)</p>
    </>

    const level2 = <>
        <h3>Explorer</h3>
        <p>€ 5/release (más VAT)</p>
    </>

    const level3 = <>
        <h3>Cartographer</h3>
        <p>€ 10/release (más VAT)</p>
    </>

    const text1 = <>
        <h4>Base maps: </h4>
        <ul>
            <li>A new high quality <strong>battlemap every week (4-5/month).</strong> </li>
            <li> <strong>Gridded</strong> and <strong>Gridless</strong>  versions.</li>
            <li>Instant access to the <strong>Scribe Archive</strong>  back catalogue.</li>
        </ul>

    </>
    const text2 = <>
        <h4>Map variations and Modular Maps: </h4>
        <ul>
            <li> <strong>All previous rewards.</strong> </li>
            <li> <strong>Variations</strong> for all maps like: day and night, seasons, empty, crowded, etc.</li>
            <li> <strong>All tiles</strong> of our Modular Maps.</li>
            <li>Instant access to the <strong>Explorer Archive</strong>  back catalogue.</li>
        </ul>

    </>
    const text3 = <>
        <h4>Foundry VTT and extra content:</h4>
        <ul>
            <li> <strong>All previous rewards.</strong> </li>
            <li> <strong> Extra content </strong>like animated tokens, monsters and adventures.</li>
            <li> <strong> Foundry VTT</strong> ready-to-play modules of all our content.</li>
            <li>Instant access to <strong> all our previous content.</strong></li>
        </ul>

    </>
    return (
        <div className="suscription">
            <div className='suscription-cards'>
                <SuscriptionCard image={image1} level={level1} text={text1} />
                <SuscriptionCard image={image2} level={level2} text={text2} />
                <SuscriptionCard image={image3} level={level3} text={text3} />

            </div>

        </div>


    )
}
