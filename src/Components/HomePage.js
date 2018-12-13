import React, { Component } from "react";
import open from "../img/nav-hamburger.png";
import close from "../img/nav-hamburger-close.png";

// import carousel1 from "../img/home/home-jumbotron.png";
// import carousel2 from "../img/home/home-jumbotron1.png";
// import carousel3 from "../img/home/home-jumbotron2.png";
// import carousel4 from "../img/home/home-jumbotron3.png";
// import carousel5 from "../img/home/home-jumbotron4.png";
import about1 from "../img/home/home-img-1.png";
import about2 from "../img/home/home-img-2.png";
import villas from "../img/home/home-villas-img.png";
import outskirts from "../img/home/home-outskirts-img.png";
import blocks from "../img/home/home-the-blocks-img.png";
import villasMobile from "../img/home/home-mobile-villas-img.png";
import outskirtsMobile from "../img/home/home-mobile-outskirts-img.png";
import blocksMobile from "../img/home/home-mobile-the-blocks-img.png";
import Carousel from "./Carousel";

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
      <>
        <div className="home-container">
          <div className="navBar">
            <h1>S&J</h1>
            <div className="menu ">
              <img src={this.state.isOpen} className="hamburger" onClick={this.toggleHamburger} alt="..." />
            </div>
          </div>
          <nav className="navigation hidden">
            <a className="menu-link" href="index.html">
              Home
            </a>
            <a className="menu-link" href="services.html">
              Services{" "}
            </a>
            <a href="..." className="menu-link">Contact</a>
          </nav>

          {carouselSlides}


          <section className="about">
            <div className="about1">
              <div className="aboutText1">
                <h2>Smith & Jones Architects</h2>
                <p>
                  Et sed autem causae appareat, tempor abhorreant te mei, facer
                  facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                  etiam laboramus dissentiet in, nec no errem{" "}
                </p>
                <a href="...">Learn More</a>
              </div>
              <div className="aboutImg1">
                <img src={about1} alt="..." />
              </div>
            </div>

            <div className="about2">
              <div className="aboutText2">
                <h2>Futuristic Designs</h2>
                <p>
                  Et sed autem causae appareat, tempor abhorreant te mei, facer
                  facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo
                  etiam laboramus dissentiet in, nec no errem{" "}
                </p>
                <a href="..." >View Designs</a>
              </div>
              <div className="aboutImg2">
                <img src={about2} alt="..." />
              </div>
            </div>
          </section>
          <section className="recentProjects">
            <h2>Recent Projects</h2>
            <div className="villas">
              <img src={villas} className="desktop" alt="..." />
              <img src={villasMobile} className="mobile" alt="..." />
              <div className="titles">
                <h3>THE VILLAS</h3>
              </div>
              <div className="text-section">
                <p>
                  The Villas bring to the table win-win survival strategies to
                  ensure proactive domination. At the end of the day, going
                  forward, a new normal that has evolved from generation X is on
                  the runway heading towards a streamlined cloud solution.{" "}
                </p>
                <br />
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
            </div>
            <div className="outskirts">
              <img src={outskirts} className="desktop" alt="..." />
              <img src={outskirtsMobile} className="mobile" alt="..." />
              <div className="titles">
                <h3>OUTSKIRTS</h3>
              </div>
              <div className="text-section">
                <p>
                  The Outskirts are amazing to the table win-win survival
                  strategies to ensure proactive domination. At the end of the
                  day, going forward, a new normal that has evolved from
                  generation X is on the runway heading towards a streamlined
                  cloud solution.{" "}
                </p>
                <br />
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
            </div>
            <div className="blocks">
              <img src={blocks} className="desktop" alt="..." />
              <img src={blocksMobile} className="mobile" alt="..." />
              <div className="titles">
                <h3>THE BLOCKS</h3>
              </div>
              <div className="text-section">
                <p>
                  The Blocks are amazing to the table win-win survival
                  strategies to ensure proactive domination. At the end of the
                  day, going forward, a new normal that has evolved from
                  generation X is on the runway heading towards a streamlined
                  cloud solution.{" "}
                </p>
                <br />
                <p>
                  Capitalize on low hanging fruit to identify a ballpark value
                  added activity to beta test. Override the digital divide with
                  additional clickthroughs from DevOps. Nanotechnology immersion
                  along the information highway will close the loop on focusing
                  solely on the bottom line.
                </p>
              </div>
            </div>
          </section>
        

      </>
        );
      }
    }
export default HomePage;