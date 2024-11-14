import React from 'react'
import Button from '../Button/Button';
import "../Navbar/navBar.scss";


function NavBar() {
    return (
        <div className="navbar">
            <img className="emumba-logo" src="/images/logo.png" />
            <ul className="links">
                <a className="links-button" href="#">Home</a>
                <a className="links-button" href="#">Services</a>
                <a className="links-button" href="#">AWS</a>
                <a className="links-button" href="#">Case Study</a>
                <a className="links-button" href="#">Company</a>
                <a className="links-button" href="#">Career</a>
            </ul>
            <Button onClick={() => alert("Clicked!")} variant="primary">Contact Us</Button>
        </div>
    )
}

export default NavBar
