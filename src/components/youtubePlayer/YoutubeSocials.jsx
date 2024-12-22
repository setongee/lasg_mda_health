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

const socials = {

    twitter : 'https://twitter.com/LSMOH',
    facebook : 'https://web.facebook.com/lsmoh',
    youtube : 'https://www.youtube.com/channel/UCZzZf_6m2Wm60fBNKp0-l3w',
    instagram : 'https://www.instagram.com/lagoshealth/'

}

return (

    <div className="socials__skin flex flex__column gap__30">

        <YouTube videoId="rbQvA0LHh2k" iframeClassName = 'youtube__lasg' opts={opts} />

        <div className="other__socials flex flex__column gap__30 margin__top__20 font__weight__600 font__13">
            <div className='text__trend'>Visit some of our social media profiles</div>
            <div className="social__tabs flex gap__50">
                <a href={socials.twitter} target='_blank' className="social__icons"><img src={twitter} alt="" /></a>
                <a href={socials.facebook} target='_blank' className="social__icons"><img src={facebook} alt="" /></a>
                <a href={socials.youtube} target='_blank' className="social__icons"><img src={youtube} alt="" /></a>
                <a href={socials.instagram} target='_blank' className="social__icons"><img src={instagram} alt="" /></a>
            </div>
        </div>

    </div>

  )

}
