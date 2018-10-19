import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ButtonIcon.css';

class ButtonIcon extends Component {
  render() {
    return (
      <a className="buttonIcon" href={this.props.target}><FontAwesomeIcon icon={this.props.icon} /> <span className="desktop-only">{this.props.title}</span></a>
    )
  }
}

export default ButtonIcon;
