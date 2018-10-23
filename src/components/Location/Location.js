import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Location.css';

const AnyReactComponent = ({ text }) => <div className="Location-pin"><p>{text}</p></div>;

class Location extends Component {
  static defaultProps = {
    center: {
      lat: 51.420578,
      lng: -1.265195
    },
    zoom: 18
  };

  render() {
    return (
      <section className="Location" id="location">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAoGYN46HS3CfdnmyZTEX6Ih8cbwbhhLKg' }}
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <AnyReactComponent
          lat={51.420578}
          lng={-1.265195}
          text={'Muddy Pups Dog Grooming'}
        />
      </GoogleMapReact>
      </section>
    )
  }
}

export default Location;
