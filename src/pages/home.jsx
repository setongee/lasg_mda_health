import React from 'react'
import Container from '../components/container/Container'
import './home.scss'
import Button from '../components/button/Button'
import { ArrowDownRight, ArrowRight, Donate, Healthcare, Hospital, OrganicFood, OrganicFoodSquare, PharmacyCrossTag, Presentation, Snow, StatsUpSquare, StatsUpSquareSolid, UserSquare } from 'iconoir-react'

import doc from '../assets/doc.jpg'
import misssion from '../assets/mission.png'
import vision from '../assets/vision.png'
import rim from '../assets/rim.svg'
import prof from '../assets/prof.jpg'

import Newsroom from '../components/newsroom/newsroom'
import YoutubeSocials from '../components/youtubePlayer/YoutubeSocials'
import Footer from '../components/footer/footer'

export default function Home() {

  return (
    <div className="homepage">

        <Container>

            <div className="main__zone flex__align__start flex flex__justify__spaceBetween">

              <div className="main__text">
                  <h1>Ensuring Top-Quality Healthcare for Every Citizen of Lagos State</h1>
                  <p>Committed to your well-being with comprehensive services and innovative initiatives, supporting a healthier state.</p>
                  <Button content = 'Explore Health' type = 'dark__bg' />
              </div>

              <div className="videoHolder">
                <img src={rim} alt="" />
              </div>
              
            </div>


            <div className="card__title margin__top__50 flex__combo__align__spacebtw">

              <p className='text__trend font__14 font__weight__600 flex flex__align__center gap__10'> What we do <ArrowDownRight width={18}/> </p>

              <p className='text__trend font__14 font__weight__600 flex flex__align__center gap__10 cursor__pointer'> View All </p>

            </div>

            <div className="quick__services items__holder flex flex__wrap margin__top__30">
                
                {/* Item1 */}
                <div className="item flex flex__align__center flex__justify__center relative">

                  <div className="absolute_full_center popCircle"></div>

                  <div className="crown flex gap__20 flex__column">

                    <div className="icon relative zUp"> <StatsUpSquare/> </div>
                    <div className="font__18 relative zUp"> Health care planning, Research & Statistics </div>

                  </div>

                </div>

                {/* Item2 */}
                <div className="item flex flex__align__center flex__justify__center relative">

                  <div className="absolute_full_center popCircle"></div>

                  <div className="crown flex gap__20 flex__column">

                    <div className="icon relative zUp"> <OrganicFoodSquare/> </div>
                    <div className="font__18 relative zUp"> Family Health and Nutrition </div>

                  </div>

                </div>

                {/* Item3 */}
                <div className="item flex flex__align__center flex__justify__center relative">

                  <div className="absolute_full_center popCircle"></div>

                  <div className="crown flex gap__20 flex__column">

                    <div className="icon relative zUp"> <Hospital/> </div>
                    <div className="font__18 relative zUp"> Hospital Services : LASAMBUS </div>

                  </div>

                </div>

                {/* Item4 */}
                <div className="item flex flex__align__center flex__justify__center relative">

                  <div className="absolute_full_center popCircle"></div>

                  <div className="crown flex gap__20 flex__column">

                    <div className="icon relative zUp"> <UserSquare/> </div>
                    <div className="font__18 relative zUp"> Staff Health Services </div>

                  </div>

                </div>

                {/* Item5 */}
                <div className="item flex flex__align__center flex__justify__center relative">

                  <div className="absolute_full_center popCircle"></div>

                  <div className="crown flex gap__20 flex__column">

                    <div className="icon relative zUp"> <PharmacyCrossTag/> </div>
                    <div className="font__18 relative zUp"> Pharmaceutical Services </div>

                  </div>

                </div>

                {/* Item6 */}
                <div className="item flex flex__align__center flex__justify__center relative">

                  <div className="absolute_full_center popCircle"></div>

                  <div className="crown flex gap__20 flex__column">

                    <div className="icon relative zUp"> <Presentation/> </div>
                    <div className="font__18 relative zUp">  Medical Administration Training & Programmes </div>

                  </div>

                </div>

                {/* Item7 */}
                <div className="item flex flex__align__center flex__justify__center relative">

                  <div className="absolute_full_center popCircle"></div>

                  <div className="crown flex gap__20 flex__column">

                    <div className="icon relative zUp"> <Healthcare/> </div>
                    <div className="font__18 relative zUp">  Nursing Services </div>

                  </div>

                </div>

                {/* Item8 */}
                <div className="item flex flex__align__center flex__justify__center relative">

                  <div className="absolute_full_center popCircle"></div>

                  <div className="crown flex gap__20 flex__column">

                    <div className="icon relative zUp"> <Snow/> </div>
                    <div className="font__18 relative zUp">  Environmental/Occupational Health And Safety </div>

                  </div>

                </div>

            </div>

        </Container>

        {/* About Us Area Homepage */}

        <div className="about__short flex">

          <div className="image__standard image__item">
            <img src={doc} alt="doctor lagos state" />
          </div>

          <div className="about__quick__content">
            
              <p className='text__trend font__12 font__weight__600 serve' >35 Years Serving Lagosians</p>

              <div className="font__32 font__weight__600 margin__top__20 margin__bottom__20 lh">
                That every Lagosian enjoys unfettered access to qualitative healthcare without significant geographical, financial, cultural or political barriers
              </div>

              
              <div className="mission__quick flex flex__column gap__10">

                <div className="font__16 font__weight__600 flex flex__align__center gap__15">
                      
                      <div className="image__icon">
                        
                        <div className="image__item"><img src={misssion} alt="" /></div>

                      </div>
                    
                      Our Mission
                  
                </div>

                <div className="content__subtitle font__16 font__weight__600">To deliver qualitative, affordable and equitable healthcare service to the citizenry applying appropriate technology by highly motivated staff.</div>
                    

              </div>

              <div className="divider"></div>

              <div className="mission__quick flex flex__column gap__10">

                <div className="font__16 font__weight__600 flex flex__align__center gap__15">
                      
                      <div className="image__icon">
                        
                        <div className="image__item"><img src={vision} alt="" /></div>

                      </div>
                    
                      Our Vision
                  
                </div>

                <div className="content__subtitle font__16 font__weight__600">To attain excellence in health service delivery by applying best practices at all levels of care.</div>
                    

              </div>

              <Button content = 'More About Us' type = 'button__main margin__top__70' />

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
