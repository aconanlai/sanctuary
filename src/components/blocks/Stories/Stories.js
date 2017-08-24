import React from 'react';
import './Stories.css';

import data from '../../../places.json';

const Story = props => (
  <div className="story">
    <img
      className="storyImage"
      alt={props.name}
      src={props.image}
    />
    <span className="storyName">{props.name}</span>
  </div>
);

const Stories = () => (
  <div id="stories">
    <h1>Stories</h1>
    <div className="storiesList">
      {Object.keys(data).map(story => {
        return <Story {...data[story]} />;
      })}
    </div>
  </div>
);

export default Stories;
