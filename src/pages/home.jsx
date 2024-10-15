import React from 'react'
import Container from '../components/container/Container'
import './home.scss'
import Button from '../components/button/Button'

import dna from '../assets/vid/checks2.mp4';

import ilera from '../assets/moh/ilera__eko.png'
import emergency from '../assets/moh/emergency_medical_services_lasambus_lasasem.png'
import cin from '../assets/moh/registerCIN.png'

import Newsroom from '../components/newsroom/newsroom'
import YoutubeSocials from '../components/youtubePlayer/YoutubeSocials'
import Footer from '../components/footer/footerArea'

export default function Home() {

  return (
    <div className="homepage">

        <div className="topPart">

            <div className="vidMate">

                <video src={dna} autoPlay muted loop preload="metadata"></video>

            </div>

            <Container>

              <div className="main__zone flex__align__start flex flex__justify__spaceBetween">

                <div className="main__text">

                    <h1>Ensuring <span>Premium-Quality Healthcare</span> for Every Lagosian</h1>
                    
                    <p>Committed to your well-being with comprehensive services and innovative initiatives, supporting a healthier state.</p>

                    <Button content = 'Explore moh services' type = 'dark__bg' arrow = {true} arrow__type = 'down' />

                </div>
                
              </div>

            </Container>

        </div>

        {/* services and programmes */}

        <div className="programmes">

            <div className="programme__parent flex gap__30">

                <div className="programme__item">

                    <a href="https://ileraeko.com/"> <img src={ilera} alt="" /> </a>

                </div>

                  <div className="programme__item">

                    <a href="tel:123"> <img src={emergency} alt="" /> </a>

                </div>

                  <div className="programme__item">

                    <a href="https://hefamaa.lagosstate.gov.ng/registration/"> <img src={cin} alt="" /> </a>

                </div>

            </div>

        </div>

        {/* Newsroom Home Section */}

        <div className="news">

            <Container>

              <Newsroom/>

            </Container>

        </div>


        {/* Commissioner */}

        <div className="socials__comp">

          <Container>
            
              <div className="youtube__player__seth flex flex__align__center flex__column">

                  <p className="text font__weight__600"><span>Stay updated</span>, Connect with our socials</p>

                  <YoutubeSocials />

              </div>

          </Container>

        </div>

        
        {/* footer */}

       <Footer/>

    </div>
  )
}
