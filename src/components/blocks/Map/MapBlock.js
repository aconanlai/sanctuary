import React, { Component } from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import '../Block.css';

import { changePage } from '../../../redux/modules/routing';

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 45.521681,
      lng: -73.574336,
      error: null,
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.findLocation = this.findLocation.bind(this);
    this.errorLocation = this.errorLocation.bind(this);
    this.successLocation = this.successLocation.bind(this);
  }

  handleEnter() {
    this.props.changePage(this.props.page);
    setInterval(this.findLocation, 2000);
  }

  findLocation() {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successLocation, this.errorLocation);
    } else {
      this.setState({
        error: 'Geolocation is not supported',
      });
    }
  }

  errorLocation(e) {
    this.setState({
      error: e,
    });
  }

  successLocation(position) {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
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

export default connect(null, { changePage, })(Block);
