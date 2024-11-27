import React from 'react'
import { assets } from '../../assets/assets'
import './AppDownload.css'


const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
      <p>For better experience download <br></br>Tomato APP </p>
      <div className='app-download-components' >   
        <img src={assets.play_store} alt='' ></img>
        <img  src={assets.app_store} alt='' ></img>
      </div>
    </div>
  )
}

export default AppDownload
