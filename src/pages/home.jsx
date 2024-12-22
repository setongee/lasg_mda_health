import React, {useState, useEffect} from 'react'
import Container from '../components/container/Container'
import './home.scss'
import Button from '../components/button/Button'

import dna from '../assets/vid/checks2.mp4';

import ilera from '../assets/moh/ilera__eko.png'
import emergency from '../assets/moh/emergency_medical_services_lasambus_lasasem.png'
import ilerasSM from '../assets/moh/ileraeko_sm.png'
import emergencySM from '../assets/moh/emergency.png'

import Newsroom from '../components/newsroom/newsroom'
import YoutubeSocials from '../components/youtubePlayer/YoutubeSocials'
import Footer from '../components/footer/footerArea'

import hc from '../assets/hc.jpeg';

import { motion } from "motion/react"

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    
    const width = window.innerWidth;

    if(width < 800) setIsMobile(true)
    
  }, [isMobile]);

  return (
    <div className="homepage">

        <div className="topPart">

            <div className="vidMate">

                <video src={dna} autoPlay muted loop preload="metadata"></video>

            </div>

            <Container>

              <div className="main__zone flex__align__start flex flex__justify__spaceBetween">

                <div className="emergence"> 

                  <a href="tel:112">Emergency ( 112 )</a>
                  <a href="tel:2349090006463">Mental Health ( +2349090006463 )</a>

                </div>

                <div className="main__text">

                    <h1>Ensuring <span>Premium-Quality Healthcare</span> for Every Lagosian</h1>
                    
                    <p>Committed to your well-being with comprehensive services and innovative initiatives, supporting a healthier state.</p>

                    <Button content = 'Explore moh services' type = 'dark__bg' arrow = {true} arrow__type = 'down'  to = '#comi' />

                </div>
                
              </div>

            </Container>

        </div>

        {/* services and programmes */}
        
        {
          isMobile ? 
          (
            <div className="programmes">

                <Container>

                    <div className="programme__parent flex gap__30">

                        <div className="programme__item">

                          <a href="https://ileraeko.com/"> <img src={ilerasSM} alt="" /> </a>

                        </div>

                        <div className="programme__item">

                          <a href="tel:123"> <img src={emergencySM} alt="" /> </a>

                        </div>             

                    </div>

                </Container>

            </div>
          )
          :
          (
            <div className="programmes">

                <Container>

                    <div className="programme__parent flex gap__30">

                        <div className="programme__item">

                          <a href="https://ileraeko.com/"> <img src={ilera} alt="" /> </a>

                        </div>

                        <div className="programme__item">

                          <a href="tel:123"> <img src={emergency} alt="" /> </a>

                        </div>             

                    </div>

                </Container>

            </div>
          )

        }

        <div className="commissionerCorner" id='comi'>

            <Container>

                <div className="corner flex">

                    <motion.div className="photoChance" initial = { { x : "-200px" } } whileInView={{x : 0}} transition={{ duration: 1, type: "tween" }} >

                        <div className="boxChance"></div>

                        <div className="photoCom">
                            <img src={hc} alt="" />
                        </div>

                    </motion.div>

                    <motion.div className="speech" initial = { { x : "200px" } } whileInView={{x : 0}} transition={{ duration: 1, type: "tween" }}>

                        <div className="who">About us - <span>Who we are</span> </div>

                        <div className="speech__title"> Welcome to Lagos State Ministry of Health</div>
                        <div className="speech__desc"> 
                          
                          Ministerial Responsibilities Under the provisions of the Health Sector Reform Law 2006. {<br></br>}{<br></br>} <strong>The Ministry of Health is responsible for the following functions:</strong>
                          {<br></br>}
                          1. Health policy/plan formulation and legislation{<br></br>}
                          2. Regulatory functions, including quality assurance (setting of standards for personnel, infrastructure and services for registration of both public and private health institutions operating in the State), monitoring and evaluation.</div>

                        <div className="buttonGrp flex">
                            <Button content  = 'About MOH' type = 'button__main' arrow = {true} arrow__type='up' to = '/about/vision' />
                            {/* <Button content  = 'Vision & Mission' type = 'dark__bg light' to = '/about/vision' /> */}
                        </div>

                    </motion.div>

                </div>

            </Container>

        </div>


        {/* Newsroom Home Section */}

        <div className="news">

          <Newsroom/>

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
