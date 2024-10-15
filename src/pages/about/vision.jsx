import React from 'react'
import './about.scss'
import line from '../../assets/line.jpg'
import Container from '../../components/container/Container'
import stack from '../../assets/about.png'
import Button from '../../components/button/Button'
import Footer from '../../components/footer/footerArea'

export default function Vision() {
  return (
    <div className="about">

      <Container>

        <div className="title" style={{border : 'none'}}>

            <h1>Vision, Mission, and Goals: Defining Purpose, Direction, and Key Objectives</h1>

            <span>Aligning Identity, Purpose, Direction, and Objectives for Sustainable Growth and Success</span>

        </div>

      </Container>

       <div className="more__about">

          <Container>

            <div className="areas flex">

              <div className="scope">

                  <div className="content__text">

                    <div className="main">Our Vision</div>
                    <div className="tag text__trend font__12">Who we are</div>
                    <div className="sub__text">To attain excellence in health service delivery by applying best practices at all levels of care</div>

                  </div>

              </div>

              <div className="lineform"></div>

              <div className="scope">

                  <div className="content__text">

                    <div className="main">Our Mission</div>
                    <div className="tag text__trend font__12">What we do</div>
                    <div className="sub__text">To deliver qualitative, affordable and equitable healthcare service to the citizenry applying appropriate technology by highly motivated staff</div>

                  </div>

              </div>

              <div className="lineform"></div>

              <div className="scope">

                  <div className="content__text">

                    <div className="main">Our Goal</div>
                    <div className="tag text__trend font__12">what you aim to achieve</div>
                    <div className="sub__text">That every Lagosian enjoys unfettered access to <span>qualitative healthcare</span> without significant <span>geographical, financial, cultural or political barriers</span></div>

                  </div>

              </div>

            </div>

          </Container>

       </div>

        <div className="floating__pictures flex">

            <div className="photo__float">
              <img src="https://lagosministryofhealth.org/wp-content/uploads/2024/06/IMG-20240604-WA0028.jpg" alt="" />
            </div>

            <div className="photo__float">
              <img src="https://lagosministryofhealth.org/wp-content/uploads/2024/06/IMG-20240604-WA0036.jpg" alt="" />
            </div>

            <div className="photo__float">
              <img src="https://lagosministryofhealth.org/wp-content/uploads/2024/06/IMG-20240604-WA0030.jpg" alt="" />
            </div>

            <div className="photo__float">
              <img src="https://lagosministryofhealth.org/wp-content/uploads/2024/06/IMG-20240604-WA0022.jpg" alt="" />
            </div>

            <div className="photo__float">
              <img src="https://lagosministryofhealth.org/wp-content/uploads/2024/06/IMG-20240426-WA0118.jpg" alt="" />
            </div>

            <div className="photo__float">
              <img src="https://lagosministryofhealth.org/wp-content/uploads/2024/06/IMG-20240509-WA0100.jpg" alt="" />
            </div>

        </div>

        

        <div className="structures">

              <Container>

                <div className="flex">

                  <div className="txt__content">

                      <div className="tag text__trend font__12">Ministry of Health, Lagos</div>
                      <div className="main">Organizational Structure</div>
                      <div className="sub__text">

                        The political/executive headship of the Ministry is reposed in the Honourable Commissioner for Health and the Special Adviser to the Governor on Primary Health Care. Through them, policy matters affecting health in the State are channeled to the State Executive Council and the Governor.

                        {<br></br>}{<br></br>}

                        The Permanent Secretary is the accounting officer/head of the Ministry’s civil service, through whom all the directors report to the Honourable Commissioner and the Special Adviser to the Governor on Primary Health Care.

                      </div>

                      <Button content = 'Explore Organogram' type = 'button__primary' />

                  </div>

                  <div className="photo"><img src={stack} alt="" /></div>

                </div>

              </Container>

        </div>

        <div className="organ">

          <Container>

            <div className="trace flex flex__align__center flex__column">
               
               <div className="main">Organogram</div>
                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/01/org.png" alt="" /></div>

            </div>

          </Container>

        </div>

        <Footer/>

    </div>
  )
}