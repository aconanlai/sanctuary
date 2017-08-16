import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Waypoint from 'react-waypoint';
import './Block.css';

import { changePage } from '../../redux/modules/routing';

const Block = props => (
  <div className="block">
    <Waypoint
      onEnter={() => {
        const langpath = (props.language === 'en') ? '/' : '/fr/';
        props.changePage(props.page);
        props.router.push((props.page === 'home') ? langpath : `${langpath}${props.page}`);
      }}
    >
      <div className="innerBlock">
        {props.children}
      </div>
    </Waypoint>
  </div>
);

const mapStateToProps = state => {
  return {
    language: state._language.language,
  };
};

export default connect(mapStateToProps, { changePage, })(withRouter(Block));
