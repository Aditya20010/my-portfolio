import React from 'react';
import '../App.css';
import logo from '../images/img2.jpg';
function header(){
    return <div className="header-div">
     <img src={logo} alt="it's me" />
        <h1>I'm Aditya.</h1>
        <p>a web designer.</p>
    </div>
}
export default header;