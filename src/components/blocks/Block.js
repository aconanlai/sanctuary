import React from 'react';
import Waypoint from 'react-waypoint';
import './Block.css';

const Block = props => (
  <div className="block">
    <Waypoint
      onEnter={() => { console.log(`entering ${props.page}`); }}
    >
      <div className="innerBlock">
        {props.children}
      </div>
    </Waypoint>
  </div>
);

export default Block;
