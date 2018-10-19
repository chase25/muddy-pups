import React, { Component } from 'react';
import Masthead from './components/Masthead/Masthead';
import SidebarLinks from './components/SidebarLinks/SidebarLinks';
import Banners from './components/Banners/Banners';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import FAQs from './components/FAQs/FAQs';
import Location from './components/Location/Location';
import ContactForm from './components/ContactForm/ContactForm';
import PageFooter from './components/PageFooter/PageFooter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faPlus, faPhone, faAt, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

library.add(fab,faBars,faPlus,faPhone,faAt,faTimes);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Masthead />
        <SidebarLinks />
        <Banners bannerClass="banner-3" />
        <AboutUs />
        <Banners bannerClass="banner-2" />
        <Services />
        <Banners bannerClass="banner-1" />
        <FAQs />
        <Banners bannerClass="banner-4" />
        <Location />
        <Banners bannerClass="banner-1" />
        <ContactForm />
        <PageFooter />
      </div>
    );
  }
}

export default App;
