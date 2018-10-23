import React, { Component } from 'react';
import DocumentMeta from 'react-document-meta';
import ReactGA from 'react-ga';
import Masthead from './components/Masthead/Masthead';
import SidebarLinks from './components/SidebarLinks/SidebarLinks';
import Banners from './components/Banners/Banners';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/Services/Services';
import FAQs from './components/FAQs/FAQs';
import Location from './components/Location/Location';
import PuppyPacks from './components/PuppyPacks/PuppyPacks';
import PageFooter from './components/PageFooter/PageFooter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars, faPlus, faPhone, faAt, faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

ReactGA.initialize('UA-24446820-1');
ReactGA.pageview(window.location.pathname + window.location.search);

library.add(fab,faBars,faPlus,faPhone,faAt,faTimes);

class App extends Component {
  render() {
    const meta = {
      title: 'Muddy Pups Dog Grooming',
      description: 'Mudy Pups dog grooming, berkshires premier dog groomers based in Newbury',
      canonical: 'http://example.com/path/to/page',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'dog grooming, dog groomers, newbury, berkshire, dog groomers berkshire, dog groomers newbury, dog grooming berkshire, dog grooming newbury, newbury groomers, newbury grooming, dogs newbury, berkshire grooming, berkshire groomers'
        }
      }
    };

    return (
      <div className="App">
        <DocumentMeta {...meta}>
          <Masthead />
          <SidebarLinks />
		  <Banners bannerClass="banner-1" />
          <AboutUs />
          <Banners bannerClass="banner-2" />
          <Services />
		  <Banners bannerClass="banner-3" />
          <FAQs />
          <Banners bannerClass="banner-4" />
          <Location />
          <Banners bannerClass="banner-5" />
          <PuppyPacks />
          <PageFooter />
        </DocumentMeta>
      </div>
    );
  }
}

export default App;
