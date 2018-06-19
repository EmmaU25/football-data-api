import React, { Component } from 'react';
import './css/grayscale.css';


class Nav extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
              <div className="container">
                <a className="navbar-brand js-scroll-trigger" href="#page-top"><i className="fas fa-futbol"></i> Accueil</a>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fa fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      
                    </li>
                    <li className="nav-item">
    
                    </li>
                    <li className="nav-item">
                      
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
  );
  }
}

export default Nav;
