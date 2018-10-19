import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PageFooter.css';

class PageFooter extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="inner">
          <div className="column-01">
            <address>
              <p>Cold Ash Hill,<br />
              Cold Ash,<br />
              Newbury,<br />
              Berkshire,<br />
              RG18 9NZ</p>
            </address>
          </div>
          <div className="column-02">
            <ul>
              <li><a href="tel:07584221592"><FontAwesomeIcon icon="phone" /> 07584 221 592</a></li>
              <li><a href="mailto:info@muddy-pups.co.uk"><FontAwesomeIcon icon="at" /> info@muddy-pups.co.uk</a></li>
              <li><a href="https://www.facebook.com/muddypups" target="_blank" title="Link opens in a new window" rel="noopener noreferrer"><FontAwesomeIcon icon={["fab", "facebook"]} /> facebook.com/muddypups</a></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default PageFooter;
