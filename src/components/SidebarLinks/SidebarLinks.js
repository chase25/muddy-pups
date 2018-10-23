import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SidebarLinks.css';

class SidebarLinks extends Component {
  render() {
    return (
      <ul className="sidebarLinks">
        <li><a href="tel:07584221592"><FontAwesomeIcon icon="phone" /><span className="accessible">Call us</span></a></li>
        <li><a href="mailto:info@muddy-pups.co.uk"><FontAwesomeIcon icon="at" /> <span className="accessible">info@muddy-pups.co.uk</span></a></li>
        <li><a href="https://www.facebook.com/muddypups" target="_blank" title="Link opens in a new window" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "facebook"]} /> <span className="accessible">Visit our Facebook page</span></a></li>
      </ul>
    )
  }
}

export default SidebarLinks;
