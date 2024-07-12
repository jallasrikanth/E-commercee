import React from 'react'
import './NewsLetter.css'


export const NewLetter = () => {
  return (
    <div className="newsletter">
        <h1>Get Exclusive Offers on Email</h1>
        <p>Suscribe to our newletter and stay updated </p>
        <div>
            <input type="email" placeholder='Your Email id' />
            <button>Subscribe</button>

        </div>

    </div>
  )
}
