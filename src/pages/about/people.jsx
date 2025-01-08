import React from 'react'
import Container from '../../components/container/Container'
import Footer from '../../components/footer/footerArea'
import '../../styles/gallery.scss'

export default function People() {

  return (
    <div className="about__sections">

        <Container>

            <div className="title">

                <h1>Meet the Team: Passionate People Driving Success and Innovation Forward</h1>

                <span>Bringing Innovation, Dedication, and Excellence Together for Lasting Impact and Success</span>

            </div>

            <div className="gallery__mda">

                <section>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://pbs.twimg.com/media/GP0a4CnWwAAD0O4?format=jpg&name=900x900" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Honourable Commissioner</span>
                            <p>Prof. Emmanuel Akinola Abayomi</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://lagosministryofhealth.org/wp-content/uploads/2023/12/Mrs-Olukemi-Ogunyemi.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Special Adviser</span>
                            <p>Mrs. Olukemi Ogunyemi</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/06/2.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Permanent Secretary</span>
                            <p>Dr. Olusegun Ogboye</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/06/Dr.-Folashade-Oludara.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Director, Family health and nutrition</span>
                            <p>Dr. Folashade Oludara</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/06/Dr.-Funmilayo-Shokunbi-1.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Director, Medical Administration, Training and Programs</span>
                            <p>Dr. Funmilayo Shokunbi</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/06/Dr.-OLUROTIMI-AGBOLAGORITE.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Director, Disease Control</span>
                            <p>Dr. Agbolagorite A. Olurotimi</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/06/ajayi.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Director, Occupational & Environmental Health</span>
                            <p>Dr. Ajayi Theophilus</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/06/Dr.-Abdulrasheed-Adegboyeg-Kolade.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Director, Staff Health Services</span>
                            <p>Dr Abdulrasheed Adegboyega Kolade</p>
                        </div>

                    </a>

                    <a href='#' className="pic">

                        <div className="pic__holder">
                            <img src="https://lagosministryofhealth.org/wp-content/uploads/2022/06/MRS-AJIBADE-B.O.jpg" alt="" />
                        </div>

                        <div className="name__card">
                            <span>Director, Finance and Account</span>
                            <p>Mrs Bolajoko Oluwatoyin Ajibade</p>
                        </div>

                    </a>

                </section>

            </div>

        </Container>

        <Footer/>
    </div>
  )

}
