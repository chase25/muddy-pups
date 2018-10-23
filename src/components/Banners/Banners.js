import React, { Component } from 'react';
import './Banners.css';

class Banners extends Component {
  render() {
    return (
      <section className={`divider-banner ${this.props.bannerClass}`} aria-hidden="true"></section>
    )
  }
}

export default Banners;
