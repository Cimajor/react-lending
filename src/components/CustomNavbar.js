import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Sticky from 'react-stickynode';
import Service from './Service/Service';

class CustomNavbar extends Component {
    render() {
        var {mClass, nClass, cClass, slogo, hbtnClass} =this.props;
        return (
            <Sticky top={0} innerZ={9999} activeClass="navbar_fixed">
                <header className="header_area">
                <nav className={`navbar navbar-expand-lg menu_one ${mClass}`}>
                    <div className={`container ${cClass}`}>
                        <NavHashLink smooth={true} to="#" role="button" className={`navbar-brand ${slogo}`}>
                            <img src={require("../img/Schoolless_logo_1.svg")} alt="" className='logo'/>
                            <img src={require("../img/Schoolless_logo_1.svg")} alt="logo" className='logo'/>
                        </NavHashLink>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="menu_toggle">
                                <span className="hamburger">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </span>
                                <span className="hamburger-cross">
                                    <span></span>
                                    <span></span>
                                </span>
                            </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className={`navbar-nav menu ml-auto ${nClass}`}>
                                <li className="dropdown submenu nav-item">
                                    <NavHashLink smooth={true} to="#inspiration" component={Service} title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">The Goal</NavHashLink>
                                </li>
                                <li className="dropdown submenu nav-item">
                                    <NavHashLink smooth={true} to="#features" title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Features</NavHashLink>
                                </li>
                                <li className="nav-item dropdown submenu">
                                    <NavHashLink smooth={true} to="#value" title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Our Value</NavHashLink>
                                </li>
                                <li className="dropdown submenu nav-item">
                                    <NavHashLink smooth={true} to="#contact-us" title="Pages" className="dropdown-toggle nav-link" role="button" aria-haspopup="true" aria-expanded="false">Contact Us</NavHashLink>
                                </li>
                                {/* <li className="nav-item"><NavLink title="Pricing" className="nav-link" to="">Contact</NavLink></li> */}
                            </ul>
                            {/* <a className={`btn_get btn_hover ${hbtnClass}`} href="#get-app">Subscribe</a> */}
                        </div>
                    </div>
                </nav>
                </header>
            </Sticky>
        );
    }
}

export default CustomNavbar;