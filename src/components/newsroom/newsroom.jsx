import React from 'react'
import './newsroom.scss'
import Button from '../button/Button'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'iconoir-react'

export default function Newsroom() {

  return (

    <div className="newsroom">
        
        <div className="tag__title flex__combo__align__spacebtw">

            <div className="font__32 font__weight__600 blog margin__top__10"> Recent / Trending News </div>
            <div className="controls flex gap__15"> 
                <div className="controls__btn prev cursor__pointer"> <ArrowLeft/> </div> 
                <div className="controls__btn next cursor__pointer"> <ArrowRight/> </div> 
            </div>

        </div>

        {/* news items */}

        <div className="news flex">

            <div className="news__item">

                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240821-WA0017.jpg" alt="images" /></div>
                <div className="content__text font__16 font__weight__600">
                <p>Lagos State Resumes “Alaafia Eko” Medical Outreach Amidst Residents’ Jubilation</p>
                <a href="/">Read Now <ArrowUpRight width={15}/> </a>
                </div>

            </div>

            <div className="news__item">

                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240820-WA0016.jpg" alt="images" /></div>
                <div className="content__text font__16 font__weight__600">
                <p>Global Fund Boosts Lagos Healthcare With Five State-Of-The-Art Micu Ambulances</p>
                <a href="/">Read Now <ArrowUpRight width={15}/> </a>
                </div>

            </div>

            <div className="news__item">

                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240818-WA0014.jpg" alt="images" /></div>
                <div className="content__text font__16 font__weight__600">
                <p>Lagos Free Medical Outreach “Alaafia Eko” Returns</p>
                <a href="/">Read Now <ArrowUpRight width={15}/> </a>
                </div>

            </div>

            <div className="news__item">

                <div className="photo"><img src="https://lagosministryofhealth.org/wp-content/uploads/2024/08/IMG-20240815-WA0003.jpg" alt="images" /></div>
                <div className="content__text font__16 font__weight__600">
                <p>Lagos Ship Sets Sail, Promises Enhanced Patient Care And Efficiency.</p>
                <a href="/">Read Now <ArrowUpRight width={15}/> </a>
                </div>

            </div>

        </div>

    </div>

  )

}
