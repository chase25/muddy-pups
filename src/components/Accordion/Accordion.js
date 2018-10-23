import React, { Component } from 'react';
import './Accordion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Accordion extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(e) {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
    e.preventDefault();
  }


  render() {
    return (
      <div className="Accordion-item" key={this.props.itemCounter}>
        <button type="button" className={`Accordion-heading ${this.state.isOpen ? 'is-open' : 'is-closed' }`} onClick={this.toggleAccordion}>{this.props.heading}<FontAwesomeIcon icon="plus" /></button>
        <div className={`Accordion-content ${this.state.isOpen ? 'is-open' : 'is-closed'}`} aria-hidden={this.state.isOpen ? 'true' : 'false'}>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export default Accordion;
