import React, {useState, useEffect} from 'react'
import Container from '../../components/container/Container'
import Footer from '../../components/footer/footerArea'
import '../../styles/gallery.scss'
import { convertToTitleCase } from '../../middleware/middleware'
import { getAdminData } from '../../api/core/admin'

export default function People() {

    const[data, setData] = useState([])

  useEffect(() => {
    
    getAdminData("moh")
    .then( res => setData(res[0].people) )

  }, []);

  return (
    <div className="about__sections">

        <Container>

            <div className="title">

                <h1>Meet the Team: Passionate People Driving Success and Innovation Forward</h1>

                <span>Bringing Innovation, Dedication, and Excellence Together for Lasting Impact and Success</span>

            </div>

            <div className="gallery__mda gallx">

                <section>

                    {
                        data?.length ? data.map( (res, index) => (

                            <a className="pic" key = {index} >

                                <div className="pic__holder">
                                    <img src={res.photo} alt= { `${res.name}_${res.role}` } />
                                </div>

                                <div className="name__card">
                                    <span> {res.role} </span>
                                    <p> { convertToTitleCase( res.name ) } </p>
                                </div>

                            </a>

                        ) ) : null
                    }

                </section>

            </div>

        </Container>

        <Footer/>
    </div>
  )

}
