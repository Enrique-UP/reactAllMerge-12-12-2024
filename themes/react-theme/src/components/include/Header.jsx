import React from "react";
import {NavLink, Link} from "react-router-dom";
import logo from "../../images/logo.png";
const Header = () => {
    function showhide() {
        document.getElementById("menu").classList.add("active");
        document.getElementById("headerBottom").classList.add("active")
    }
    function hide() {
        document.getElementById("menu").classList.remove("active");
        document.getElementById("headerBottom").classList.remove("active")
    }
  return (
    <>
      <header>
        <div className="headerTop">
            <div className="container">
                <span data-aos="fade-right">Welcome to my website</span>
                <a data-aos="fade-left" href="#" target="_blank">For more details visit now www.demo.com</a>
            </div>
        </div>
        <div className="headerMiddle">
            <div className="container">
                <Link exact="true" to="/" className="logo" data-aos="fade-right">
                    <img src={logo} />
                </Link>
                <div className="details" data-aos="fade-left">
                    <a href="mailto:info@demo.com" target="_blank" title="Online Support" className="email">
                        <i className="icon">&#xf0e0;</i>
                        <span>
                            <b>Online Support</b>
                            <i>info@demo.com</i>
                        </span>
                    </a>
                    <a href="tel:+91-000-000-0000" target="_blank" title="Contact Us">
                        <i className="icon">&#xe804;</i>
                        <span>
                            <b>Contact Us</b>
                            <i>+91-000-000-0000</i>
                        </span>
                    </a>
                    <a href="www.demo.com" target="_blank" title="More Information" className="website">
                        <i className="icon">&#xe808;</i>
                        <span>
                            <b>More Information</b>
                            <i>www.demo.com</i>
                        </span>
                    </a>
                </div>
                <i className="icon menu" id="menu" onClick={showhide}>&#xf0c9;</i>
            </div>
        </div>
        <div className="headerBottom" id="headerBottom">
            <div className="container">
                <span className="logoClose">
                    <Link to="/">
                        <img src={logo} />
                    </Link>
                    <i className="icon" id="close" onClick={hide}>&#xe803;</i>
                </span>
                <ul>
                    <li><NavLink to="/" exact="true">Home</NavLink></li>
                    <li><NavLink to="/about-us">About Us</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/contact-us">Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
      </header>
    </>
  );
}

export default Header;
