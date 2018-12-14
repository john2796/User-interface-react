import React, { Component } from "react";
import open from "../img/nav-hamburger.png";
import close from "../img/nav-hamburger-close.png";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Carousel from "./Carousel";
import Footer from "./Footer";
import HomePageContent from "./HomePageContent";
import Service from './Service';

const images = [
  {
    src: "https://images.pexels.com/photos/262367/pexels-photo-262367.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500",

  },
  {
    src: "https://images.pexels.com/photos/373965/pexels-photo-373965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500",

  },
  {
    src: "https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500",

  },
  {
    src: "https://images.pexels.com/photos/135018/pexels-photo-135018.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500",

  },
]

class HomePage extends Component {
  state = {
    isOpen: open,
    activeIndex: 0
  }

  toggleHamburger = () => {
    const nav = document.querySelector('nav');
    if (!nav.classList.toggle('hidden')) {
      this.setState({ isOpen: close })
    } else {
      this.setState({ isOpen: open })
    }
  }

  next = () => {
    const nextIndex = this.state.activeIndex === images.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    const nextIndex = this.state.activeIndex === 0 ? images.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }



  render() {
    const { activeIndex } = this.state;
    const carouselSlides = images.map((image, index) => {
      let computedClass = index === activeIndex ? 'active ' : 'slide'
      return (
        <Carousel
          previous={this.previous}
          next={this.next}
          computedClass={computedClass}
          key={index}
          image={image}
        />
      )

    })
    return (
      <Router>
        <React.Fragment>
          <div className="home-container">
            <div className="navBar">
              <h1>S&J</h1>
              <div className="menu ">
                <img src={this.state.isOpen} className="hamburger" onClick={this.toggleHamburger} alt="..." />
              </div>
            </div>
            <nav className="navigation hidden">
              <Link to="/" className="menu-link" >
                Home
            </Link>
              <Link to="/services" className="menu-link" >
                Services{" "}
              </Link>
              <Link to="/contact" className="menu-link">Contact</Link>
            </nav>

            {carouselSlides}
            <HomePageContent />
            <Footer />
          </div>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/service" component={Service} />
          {/* <Route exact path="/" component={HomePage} /> */}

        </React.Fragment>
      </Router>
    );
  }
}
export default HomePage;