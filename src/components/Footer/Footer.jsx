import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className='footer-content' >
            <div className='footer-content-left' >
                <img src={assets.logo} ></img>
                <p>sbhc ajxhbKCS xjahsvghxva sxjhavscghvx asxagscuxjha sxvahsgcx as</p>
                <div className='footer-social-icons' >
                    <img  src={assets.facebook_icon} ></img>
                    <img  src={assets.twitter_icon} ></img>
                    <img  src={assets.linkedin_icon} ></img>
                    </div>
            </div>
            <div className='footer-content-center' >
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About-Us</li>
                    <li>Deliverry</li>
                    <li>Privacy Policy </li>
                </ul>
            </div>
            <div className='footer-content-right' >
                <h2>Get in Touch </h2>
                <ul>
                    <li>+1-212-456</li>
                    <li>contact@gmail.com</li>
                </ul>
            </div>
        </div>
        <p className='footer-copyright'> </p>
        <hr></hr>
    </div>
  )
}

export default Footer
