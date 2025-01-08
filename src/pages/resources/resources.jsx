import React from 'react'
import './resources.scss'
import Container from '../../components/container/Container'
import pdf from '../../assets/pdff.png'
import Button from '../../components/button/Button'
import { ArrowSeparate, ArrowSeparateVertical, Download, DownloadCircle } from 'iconoir-react'
import Footer from '../../components/footer/footerArea'

//pdf

import healthacc from '../../assets/pdf/Final-Report_Lagos-State-Health-Accounts-2020-2021-1v-Ubong-6-Oct-2023.pdf'
import pdf2 from '../../assets/pdf/Volunteering-During-COVID-19-Outbreak.pdf'

export default function Resources() {
  return (

    <div className="resources">
       
        <Container>

            <div className="title">

                <h1>Knowledge Vault : Explore Resources & Archives</h1>

                <span>Discover a treasure trove of resources for learning, growth, and innovation.</span>

            </div>

            <div className="vault">

                <div className="doc doc__top">
                    <div className="doc__title flex gap__20"># Resource Title  <ArrowSeparateVertical/> </div>
                    <div className="doc__category flex gap__20">Category <ArrowSeparateVertical/></div>
                    <div className="doc__date flex gap__20">Last Updated <ArrowSeparateVertical/></div>
                    <div className="doc__action">Action</div>
                </div>

                <a href = {healthacc} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Sub-National Health Account
                    
                    </div>
                    <div className="doc__category">Research Work</div>
                    <div className="doc__date"> 16th January 2024 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>

                <a href = {pdf2} download className="doc doc__body">
                    <div className="doc__title flex gap__10">
                        
                        <div className="doc__icon"><img src={pdf} alt="" /></div>
                        
                        Volunteering During COVID 19 Outbreak
                    
                    </div>
                    <div className="doc__category">Research Work</div>
                    <div className="doc__date"> 21st November 2022 </div>
                    <div className="doc__action"> <div className="form__button flex"> <DownloadCircle/> Download </div> </div>
                </a>
                

            </div>

        </Container>

        <Footer/>

    </div>

  )
}
