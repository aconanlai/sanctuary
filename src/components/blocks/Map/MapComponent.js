/* eslint quote-props: 0 */
/* eslint comma-dangle: 0 */

import React, { PureComponent } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import './Map.css';
import YouAreHere from './youarehere.png';

class MapComponent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onMarkerClick = this.onMarkerClick.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  render() {
    const { google } = this.props;
    return (
      <div id="map">
        <Map
          google={this.props.google}
          style={{ width: '100%', height: '100%', position: 'relative' }}
          className={'map'}
          zoom={16}
          initialCenter={{ lat: 45.521681, lng: -73.574336, }}
          center={google ? new google.maps.LatLng(this.props.lat, this.props.lng) : null}
          styles={[
            {
              'featureType': 'water',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#e9e9e9'
                },
                {
                  'lightness': 17
                }
              ]
            },
            {
              'featureType': 'landscape',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#f5f5f5'
                },
                {
                  'lightness': 20
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#ffffff'
                },
                {
                  'lightness': 17
                }
              ]
            },
            {
              'featureType': 'road.highway',
              'elementType': 'geometry.stroke',
              'stylers': [
                {
                  'color': '#ffffff'
                },
                {
                  'lightness': 29
                },
                {
                  'weight': 0.2
                }
              ]
            },
            {
              'featureType': 'road.arterial',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#ffffff'
                },
                {
                  'lightness': 18
                }
              ]
            },
            {
              'featureType': 'road.local',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#ffffff'
                },
                {
                  'lightness': 16
                }
              ]
            },
            {
              'featureType': 'poi',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#f5f5f5'
                },
                {
                  'lightness': 21
                }
              ]
            },
            {
              'featureType': 'poi.park',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#dedede'
                },
                {
                  'lightness': 21
                }
              ]
            },
            {
              'elementType': 'labels.text.stroke',
              'stylers': [
                {
                  'visibility': 'on'
                },
                {
                  'color': '#ffffff'
                },
                {
                  'lightness': 16
                }
              ]
            },
            {
              'elementType': 'labels.text.fill',
              'stylers': [
                {
                  'saturation': 36
                },
                {
                  'color': '#333333'
                },
                {
                  'lightness': 40
                }
              ]
            },
            {
              'elementType': 'labels.icon',
              'stylers': [
                {
                  'visibility': 'off'
                }
              ]
            },
            {
              'featureType': 'transit',
              'elementType': 'geometry',
              'stylers': [
                {
                  'color': '#f2f2f2'
                },
                {
                  'lightness': 19
                }
              ]
            },
            {
              'featureType': 'administrative',
              'elementType': 'geometry.fill',
              'stylers': [
                {
                  'color': '#fefefe'
                },
                {
                  'lightness': 20
                }
              ]
            },
            {
              'featureType': 'administrative',
              'elementType': 'geometry.stroke',
              'stylers': [
                {
                  'color': '#fefefe'
                },
                {
                  'lightness': 17
                },
                {
                  'weight': 1.2
                }
              ]
            }
          ]}
        >
          {/*<Marker
            name={'First Park'}
            position={{ lat: this.props.lat, lng: this.props.lng, }}
            onClick={this.onMarkerClick}
          />*/}
          <Marker
            name={'Your position'}
            position={{ lat: this.props.lat, lng: this.props.lng, }}
            icon={{
              url: YouAreHere,
              anchor: google ? new google.maps.Point(16, 16) : null,
              scaledSize: google ? new google.maps.Size(32, 32) : null
            }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <p>5455 Ave de Gaspé<br />
                Montréal
              </p>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

// key appears in bundle anyways, ¯\_(ツ)_/¯

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC1_tz3QGGKPq6iinGN4h-FqPrLOhTlgVI',
})(MapComponent);
