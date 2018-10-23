import React, { Component } from 'react';
import logo from './logo.svg';
import './Masthead.css';
import Menu from '../Menu/Menu';
import ButtonIcon from '../ButtonIcon/ButtonIcon';

class Masthead extends Component {
  constructor(props){
  	super(props);
    this.state={isHidden:false};
    this.hideMenu = this.hideMenu.bind(this)
  }
  hideMenu(){
    let {isHidden} = this.state
    window.scrollY > this.prev?
    !isHidden && this.setState({isHidden:true})
    :
    isHidden && this.setState({isHidden:false})

    this.prev = window.scrollY;
  }
  componentDidMount(){
    window.addEventListener('scroll',this.hideMenu);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.hideMenu);
  }
  render() {
    let classHide=this.state.isHidden?"is-hidden":""

    return (
      <header className={"Masthead "+classHide}>
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
