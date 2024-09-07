import React from 'react'
import './header.scss'
import Container from '../container/Container'
import logo from '../../assets/logo/lasg__logo.png'
import Button from '../button/Button'

export default function Header() {
  return (
    <div className="header header_type_drill flex flex__align__center font__14 ">
        <Container customClass = 'flex__combo__align__spacebtw'>
            <div className="brand_area flex flex__align__center gap__15">
              <div className="logo image__logo image__item"> <img src={logo} alt="Lagos State Government Ministry, Department & Agency" /> </div>
              <p className="bebas-neue-regular font__21"> Ministry of Health </p>
            </div>
            <div className="navigations flex flex__align__center gap__40 font__weight__600 absolute absolute_full_center">
                <li className='flex flex__align__center current'><a className='dark bebas-neue-regular font__21 letter__spacing__2' href="/home">Home</a></li>
                <li className='flex flex__align__center'><a className='dark bebas-neue-regular font__21 letter__spacing__2' href="/about">About</a></li>
                <li className='flex flex__align__center'><a className='dark bebas-neue-regular font__21 letter__spacing__2' href="/newsroom">Newsroom</a></li>
                <li className='flex flex__align__center'><a className='dark bebas-neue-regular font__21 letter__spacing__2' href="/resources">Resources</a></li>
                <li className='flex flex__align__center'><a className='dark bebas-neue-regular font__21 letter__spacing__2' href="/contact us">Connect</a></li>
            </div>
            <Button content = 'Emergency Services' type = 'button__warning' />
        </Container>
    </div>
  )
}
