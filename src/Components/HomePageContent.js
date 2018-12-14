import React from 'react';
import about1 from "../img/home/home-img-1.png";
import about2 from "../img/home/home-img-2.png";
import villas from "../img/home/home-villas-img.png";
import outskirts from "../img/home/home-outskirts-img.png";
import blocks from "../img/home/home-the-blocks-img.png";
import villasMobile from "../img/home/home-mobile-villas-img.png";
import outskirtsMobile from "../img/home/home-mobile-outskirts-img.png";
import blocksMobile from "../img/home/home-mobile-the-blocks-img.png";


const HomePageContent = (props) => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default HomePageContent;