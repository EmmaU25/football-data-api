import React, { Component } from 'react';
import '../Assets/css/grayscale.css';

class Home extends Component {
  render() {
    return (
    <div>
    <header className="masthead">
      <div className="intro-body">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h1 className="brand-heading">Football</h1>
              <p className="intro-text">Le meilleur du football a cote de toi</p>
              <a href="#about" className="btn btn-circle js-scroll-trigger">
                <i className="fa fa-angle-double-down animated"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
    
    <section id="about" className="content-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>A propos de Football Beb</h2>
                <p>Grayscale is a free Bootstrap theme created by Start Bootstrap. It can be yours right now, simply download the template on
                  <a href="http://startbootstrap.com/template-overviews/grayscale/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
                <p>This theme features stock photos by
                  <a href="http://gratisography.com/">Gratisography</a>
                  along with a custom Google Maps skin courtesy of
                  <a href="http://snazzymaps.com/">Snazzy Maps</a>.</p>
                <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with SASS and LESS files for easy customization!</p>
              </div>
            </div>
          </div>
        </section>

        <section id="download" className="download-section content-section text-center">
          <div className="container">
            <div className="col-lg-8 mx-auto">
              <h2>Download Grayscale</h2>
              <p>You can download Grayscale for free on the preview page at Start Bootstrap.</p>
              <a href="http://startbootstrap.com/template-overviews/grayscale/" className="btn btn-default btn-lg">Visit Download Page</a>
            </div>
          </div>
        </section>

        <section id="contact" className="content-section text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Contactez l'equipe</h2>
                <p>Feel free to leave us a comment on the 
                  <a href="http://startbootstrap.com/template-overviews/grayscale/">Grayscale template overview page</a>
                  on Start Bootstrap to give some feedback about this theme!</p>
                <ul className="list-inline banner-social-buttons">
                  <li className="list-inline-item">
                    <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg">
                      <i className="fab fa-twitter"></i>
                      <span className="network-name"> Twitter</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://github.com/BlackrockDigital/startbootstrap" className="btn btn-default btn-lg">
                      <i className="fab fa-github"></i>
                      <span className="network-name"> Github</span>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="https://plus.google.com/+Startbootstrap/posts" className="btn btn-default btn-lg">
                      <i className="fab fa-google-plus-g"></i>
                      <span className="network-name"> Google+</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
  );
  }
}

export default Home;