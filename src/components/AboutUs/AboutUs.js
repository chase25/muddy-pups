import React, { Component } from 'react';
import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <section id="about-us" className="AboutUs">
        <div className="inner">
          <h2>About us</h2>
          <p>Muddy Pups are a fully qualified groomers based within Cold Ash in Newbury, Berkshire.</p>
          <p>We offer a wide range of professional grooming services ranging from nail trimming, bathing puppies through to grooming elderly and nervous dogs. We pride ourselves on our patience with your dog and will do out utmost to carry out a groom to the highest of standards.</p>
          <p>If you would like your dog booked in for a groom but finding that suitable time is difficult for you please let us know and will we do all that we can to fit you in.</p>
        </div>
      </section>
    )
  }
};

export default AboutUs;
