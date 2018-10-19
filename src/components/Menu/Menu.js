import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Menu.css';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {isOpen: false};
    this.handleClick = this.handleClick.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  escFunction(event){
    if(event.keyCode === 27) {
      this.setState({
        isOpen: false
      })
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {

    return (
      <div className="burger-menu">
        <button type="button" className="burger-menu-btn" onClick={this.handleClick}>
          <FontAwesomeIcon icon="bars" />
          <span className="accessible">{this.state.isOpen ? 'Open navigation' : 'Close navigation'}</span>
        </button>
        <ul className={`burger-menu-wrapper ${this.state.isOpen ? 'is-open' : 'is-closed'}`} aria-hidden={this.state.isOpen ? 'true' : 'false'}>
          <button type="button" className="burger-menu-close" onClick={this.handleClick}>
            <FontAwesomeIcon icon="times" />
            <span className="accessible">Close navigation</span>
          </button>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    );
  }
};

export default Menu;
