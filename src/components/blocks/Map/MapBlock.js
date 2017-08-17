import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Waypoint from 'react-waypoint';
import '../Block.css';

import data from '../../../places.json';

import { openPanel } from '../../../redux/modules/video';
import { changePage } from '../../../redux/modules/routing';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 45.521681,
      lng: -73.574336,
      error: null,
    };
    this.checkBounds = this.checkBounds.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.findLocation = this.findLocation.bind(this);
    this.errorLocation = this.errorLocation.bind(this);
    this.successLocation = this.successLocation.bind(this);
  }

  checkBounds(lat, lng) {
    console.log('checking bounds');
    console.log(lat, lng);
    Object.keys(data).forEach(place => {
      console.log(data[place]);
      console.log(Number(data[place].bounds.north));
      if (
        (lat < Number(data[place].bounds.north)) &&
        (lat > Number(data[place].bounds.south)) &&
        (lng < Number(data[place].bounds.east)) &&
        (lng > Number(data[place].bounds.west))
      ) {
        // this.props.openPanel(place);
      }
    });
  }

  handleEnter() {
    const langpath = (this.props.language === 'en') ? '/' : '/fr/';
    this.props.changePage(this.props.page);
    this.props.router.push(`${langpath}${this.props.page}`);
    this.findLocation();
  }

  findLocation() {
    console.log('finding location');
    if (navigator && navigator.geolocation) {
      setInterval(() => {
        this.watchPositionId = navigator.geolocation.getCurrentPosition(this.successLocation, this.errorLocation, {
          enableHighAccuracy: true,
          maximumAge: 3000,
          timeout: 3000,
        });
      }, 3000);
    } else {
      this.setState({
        error: 'Geolocation is not supported',
      });
    }
  }

  errorLocation(e) {
    console.log('error');
    console.log(e);
    this.setState({
      error: e,
    });
  }

  successLocation(position) {
    console.log('found location');
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    this.checkBounds(position.coords.latitude, position.coords.longitude);
  }

  render() {
    return (
      <div className="block">
        <Waypoint
          onEnter={this.handleEnter}
        >
          <div className="innerBlock">
            {React.cloneElement(this.props.children, {
              lat: this.state.lat,
              lng: this.state.lng,
            })}
          </div>
        </Waypoint>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state._language.language,
  };
};

export default connect(mapStateToProps, { changePage, openPanel, })(withRouter(Block));
