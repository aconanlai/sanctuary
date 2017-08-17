import React from 'react';
import { connect } from 'react-redux';

import './Panel.css';

import data from '../../places.json';

import { openVideo, openPanel, closePanel } from '../../redux/modules/video';

const Panel = props => {
  if (props.panel && data[props.panel]) {
    const { name, video, description } = data[props.panel];
    return (<div className="panel">
      <div>{name}</div>
      <div>{description}</div>
      <button
        onClick={() => props.openVideo(props.panel)}
      >
        Play Video
      </button>
      <a
        className="close"
        onClick={(e) => {
          e.preventDefault();
          props.closePanel();
        }}
        role="button"
        tabIndex={-1}
      >X</a>
    </div>);
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    panel: state._video.panel,
  };
};

export default connect(mapStateToProps, { openVideo, openPanel, closePanel, })(Panel);
