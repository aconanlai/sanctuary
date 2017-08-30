import React from 'react';
import { connect } from 'react-redux';
import './Stories.css';

import data from '../../../places';

import { openVideo } from '../../../redux/modules/video';


const Story = props => (
  <div
    className="story"
    onClick={() => props.openVideo(props.id)}
  >
    <img
      className="storyImage"
      alt={props.name}
      src={props.image}
    />
    <span className="storyName">{props.name}</span>
  </div>
);

const Stories = (props) => (
  <div id="stories">
    <h1>Stories</h1>
    <div className="storiesList">
      {Object.keys(data).map(story => {
        return <Story openVideo={props.openVideo} {...data[story]} />;
      })}
    </div>
  </div>
);

export default connect(null, { openVideo, })(Stories);
