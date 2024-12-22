import React from 'react'

export default function Rrs() {

    const styles = {
        color : 'crimson',
        height : '10px',
        width : '1px',
        backgroundColor : '#fff'
    }

  return (

    <div className="flex flex__align__center flex__justify__center padding__top__bottom_10 gap__15 button__main rrs">
        <a className='text__trend font__weight__600 font__12 cream' href="#"> Emergency ( 112 ) </a>
        <div style = { styles } ></div>
        <a className='text__trend font__weight__600 font__12 cream' href="#"> Mental Health ( +2349090006463 )</a>
    </div>

  )

}
