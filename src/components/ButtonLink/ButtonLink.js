import React, { Component } from 'react';
import './ButtonLink.css';

class ButtonLink extends Component {
  render() {
    return (
      <a className="button" href={this.props.target}>{this.props.title}</a>
    )
  }
}

export default ButtonLink;
