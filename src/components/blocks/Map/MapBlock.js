import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import '../Block.css';

import data from '../../../places';

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

  componentDidUpdate(prevProps, prevState) {
    const top = this.ref.getBoundingClientRect().top;
    const half = window.innerHeight / 2;
    if ((top < half && top > (0 - half))
      && (this.props.page !== this.props.selectedPage)) {
      const langpath = (this.props.language === 'en') ? '/' : '/fr/';
      this.props.changePage(this.props.page);
      this.props.router.push((this.props.page === 'home') ? langpath : `${langpath}${this.props.page}`);
    }
  }

  checkBounds(lat, lng) {
    // console.log('checking bounds');
    Object.keys(data).forEach(place => {
      // console.log(data[place]);
      // console.log(Number(data[place].bounds.north));
      if (
        (lat < Number(data[place].bounds.north)) &&
        (lat > Number(data[place].bounds.south)) &&
        (lng < Number(data[place].bounds.east)) &&
        (lng > Number(data[place].bounds.west))
      ) {
        console.log('we are at a spot');
        this.props.openPanel(place);
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
    // console.log('error');
    // console.log(e);
    this.setState({
      error: e,
    });
  }

  successLocation(position) {
    // console.log('found location');
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
    this.checkBounds(position.coords.latitude, position.coords.longitude);
  }

  render() {
    return (
      <div ref={c => this.ref = c} className="block">
        <div className="innerBlock">
          {React.cloneElement(this.props.children, {
            lat: this.state.lat,
            lng: this.state.lng,
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    language: state._language.language,
    scrollTop: state._ui.scrollTop,
    selectedPage: state._routing.page,
  };
};

export default connect(mapStateToProps, { changePage, openPanel, })(withRouter(Block));
