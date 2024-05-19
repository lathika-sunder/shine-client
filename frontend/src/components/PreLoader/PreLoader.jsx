import React from 'react'
import './PreLoader.css'
import preloadergif from '../../assets/images/preloader.gif'
const PreLoader = () => {
  return (
    <div className='preloader'>
      <img src={preloadergif}/>
    </div>
  )
}

export default PreLoader