import React from 'react'
import './welcomeScreen.scss'
import Logo from '../../../../assets/icons/logo.png'

export default function WelcomeScreen() {
  return (
    <div className='welcome'>
        <div className="container">
            <div className="row">
                <div className="col content">
                    <img src={Logo} alt="" />
                    <h1>TonyBank</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

