import React from 'react';
import { connect } from 'react-redux';

import './Panel.css';

import data from '../../places.json';

import { openVideo, openPanel, closePanel } from '../../redux/modules/video';

const PanelContent = props => {
  const { name, video, description, image } = props;
  return (<div className="panel">
    <div className="panelWrapper">
      <div className="panelInfo">
        <div className="panelName">{name}</div>
        <div className="panelDesc">{description}</div>
        <button
          className="panelButton"
          onClick={() => {
            props.closePanel();
            props.openVideo(props.panel);
          }
          }
        >
          Play Video
        </button>
      </div>
      <div className="panelImage">
        <img alt={name} src={image} />
      </div>
    </div>
    <a
      className="closePanel"
      onClick={(e) => {
        e.preventDefault();
        props.closePanel();
      }}
      role="button"
      tabIndex={-1}
    >X</a>
  </div>);
};

const Panel = props => {
  if (props.panel && data[props.panel]) {
    return <PanelContent {...data[props.panel]} {...props} />;
  }
  return null;
};

const mapStateToProps = (state) => {
  return {
    panel: state._video.panel,
  };
};

export default connect(mapStateToProps, { openVideo, openPanel, closePanel, })(Panel);
