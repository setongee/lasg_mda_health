import React from 'react'
import YouTube from 'react-youtube';
import './youtube.scss'

// icons
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'

export default function YoutubeSocials() {

const opts = {
    playerVars: {
        autoplay: 0,
    },
};

  return (

    <div className="socials__skin flex flex__column gap__30">

        <YouTube videoId="rbQvA0LHh2k" iframeClassName = 'youtube__lasg' opts={opts} />

        <div className="other__socials flex flex__column gap__30 margin__top__20 font__weight__600 font__13">
            <div className='text__trend'>Visit some of our social media profiles</div>
            <div className="social__tabs flex gap__50">
                <div className="social__icons"><img src={twitter} alt="" /></div>
                <div className="social__icons"><img src={facebook} alt="" /></div>
                <div className="social__icons"><img src={youtube} alt="" /></div>
                <div className="social__icons"><img src={instagram} alt="" /></div>
            </div>
        </div>

    </div>

  )

}
