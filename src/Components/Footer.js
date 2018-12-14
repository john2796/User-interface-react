import React from 'react';


const Footer = () => {
  return (
    <React.Fragment>
      <div>
        <section className="footer">
          <div className="letsTalk">
            <h3>Interested in starting a project?</h3>
            <h3>Let's talk:</h3>
            <div className="disclaimer">
              <div className="email">
                <input type="text" placeholder="Enter email" />
              </div>
              <p>We'll never share your email with anyone else.</p>
            </div>
          </div>
          <div className="locations">
            <div className="locationInfo">
              <h3>New York</h3>
              <p>123 Lane</p>
              <p>Suite 100</p>
              <p>Albany, NY 12345</p>
              <p>202 555 0144</p>
            </div>
            <div className="locationInfo">
              <h3>Florida</h3>
              <p>Ocean Drive</p>
              <p>Suite 201</p>
              <p>Orlando, FL 22345</p>
              <p>502 555 0144</p>
            </div>
            <div className="locationInfo">
              <h3>California</h3>
              <p>Mountain Street</p>
              <p>Suite 105</p>
              <p>San Diego, CA 22345</p>
              <p>702 555 0144</p>
            </div>
          </div>
        </section>

        <div className="copyright">
          <p>Copyright © 2018 Smith and Jones</p>
        </div>
      </div >
    </React.Fragment>
  );
}

export default Footer;