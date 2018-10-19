import React, { Component } from 'react';
import logo from './logo.svg';
import './Masthead.css';
import Menu from '../Menu/Menu';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

class Masthead extends Component {
  render() {
    return (
      <header className="Masthead">
        <div className="Masthead-inner">
          <a href="/">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="accessible">Muddy Pups Dog Grooming</span>
          </a>
          <Menu />
          <ButtonIcon icon="phone" title="07584221592" target="tel:07584221592" />
        </div>
      </header>
    )
  }
};

export default Masthead;
