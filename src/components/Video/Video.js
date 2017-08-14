import React from 'react';
import { connect } from 'react-redux';

import './Video.css';

import { closeVideo } from '../../redux/modules/video';

const Video = props => {
  if (props.video) {
    return (<div className="video">
      <iframe
        title="video"
        className="vidframe"
        src="https://www.youtube.com/embed/97oN_DfkJoY?autoplay=1"
        frameBorder="0"
        allowFullScreen
      />
      <a
        className="close"
        onClick={(e) => {
          e.preventDefault();
          props.closeVideo();
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
    video: state._video.video,
  };
};

export default connect(mapStateToProps, { closeVideo, })(Video);
