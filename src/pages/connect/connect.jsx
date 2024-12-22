import React from 'react'
import Container from '../../components/container/Container'
import './connect.scss'
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, MailOpen, Phone, SmartphoneDevice, X, Youtube } from 'iconoir-react'
import YouTube from 'react-youtube'

export default function Connect() {
  return (
    <div className="connect">

        <Container>

            <div className="contact">

                <div className="side1">

                    <div className="head">
                        
                        <h1> <span>Reach Out to Us</span> for Support, Inquiries, or Feedback Today! </h1>
                        <div className='span' >Send us an email today📬 or call in</div>

                    </div>

                    <div className="connect__info">

                        <p> <Mail color='green'/> health@lagosstate.gov.ng </p>
                        <p> <Phone color='green'/> +2349090006463 or 112 </p>

                        <div>
                            <a target = '_blank' href="https://www.google.com/maps/place/Lagos+State+Government+Secretariat/@6.6131397,3.3584649,17z/data=!4m10!1m2!2m1!1sBlock+4,+The+Lagos+State+Government+Secretariat+Complex,+Alausa,+Ikeja,+Lagos.!3m6!1s0x103b93b5de2d07a9:0xc0382f250b5ca65!8m2!3d6.6131397!4d3.3610398!15sCk5CbG9jayA0LCBUaGUgTGFnb3MgU3RhdGUgR292ZXJubWVudCBTZWNyZXRhcmlhdCBDb21wbGV4LCBBbGF1c2EsIElrZWphLCBMYWdvcy6SARdzdGF0ZV9nb3Zlcm5tZW50X29mZmljZeABAA!16s%2Fg%2F1hhk6bhr7?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D"> Block 4, The Lagos State Government Secretariat Complex, Alausa, Ikeja, Lagos. </a>
                        </div>

                    </div>

                </div>

            </div>

            <div className="socials__time flex">
                <p>Connect with us on our socials, <span className="e">Stay up-to-date!</span> </p>
                <div className="account flex gap__30">
                    <a target='_Blank' href="https://www.instagram.com/lagoshealth/"><Instagram/></a>
                    <a target='_Blank' href="https://x.com/LSMOH"><X/></a>
                    <a target='_Blank' href="https://www.youtube.com/channel/UCZzZf_6m2Wm60fBNKp0-l3w"><Youtube/></a>
                    <a target='_Blank' href="https://web.facebook.com/lsmoh"><Facebook/></a>
                </div>
            </div>

        </Container>

    </div>
  )
}