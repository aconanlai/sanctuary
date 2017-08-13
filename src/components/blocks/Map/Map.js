import React from 'react';
import MapComponent from './MapComponent';
import './Map.css';

const Map = props => (
  <div id="map">
    <MapComponent
      {...props}
    />
  </div>
);

export default Map;
