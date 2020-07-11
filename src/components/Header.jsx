import React from 'react';
import '../App.css';
import logo from '../images/img2.jpg';
function header(){
    return <div className="header-div">
     <img src={logo} alt="it's me" />
        <h1>Hey, I'm Aditya.</h1>
        <p>A Full Stack Web Developer.</p>
    </div>
}
export default header;