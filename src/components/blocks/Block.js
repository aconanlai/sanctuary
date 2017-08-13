import React from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';
import './Block.css';

import { changePage } from '../../redux/modules/routing';

const Block = props => (
  <div className="block">
    <Waypoint
      onEnter={() => { props.changePage(props.page); }}
    >
      <div className="innerBlock">
        {props.children}
      </div>
    </Waypoint>
  </div>
);

export default connect(null, { changePage, })(Block);
