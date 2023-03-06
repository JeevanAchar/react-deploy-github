import React from 'react';
import STYLE from './netflix.module.css';

const NetFlix = () => {
  return (
    <>
    <div className={STYLE.NetFlixDiv}>
    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" alt="" className={STYLE.logo}/>
        <ul>
            <li>
                <a href="HOME">HOME</a>
            </li>
            <li>
                <a href="ABOUT">ABOUT</a>
            </li>
            <li>
                <a href="Services">SERVICES</a>
            </li>
            <li>
                <a href="movie">MOVIE</a>
            </li>
            <li>
                <a href="contact">CONTACT</a>
            </li>
            <button className={STYLE.signUp}>SIGNUP</button>
            <button className={STYLE.login}>LOGIN.</button>
        </ul>
    </div>
    </>
  )
}

export default NetFlix;