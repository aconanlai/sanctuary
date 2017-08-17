import React from 'react';
import './Stories.css';

const Stories = () => (
  <div id="stories">
    <h1>Stories</h1>
    <div className="storiesList">
      <div className="story">
        <div className="storySquare" />
        <span className="storyName">Story 1</span>
      </div>
      <div className="story">
        <div className="storySquare" />
        <span className="storyName">Story 2</span>
      </div>
      <div className="story">
        <div className="storySquare" />
        <span className="storyName">Story 3</span>
      </div>
      <div className="lineBreak" />
      <div className="story">
        <div className="storySquare" />
        <span className="storyName">Story 4</span>
      </div>
      <div className="story">
        <div className="storySquare" />
        <span className="storyName">Story 5</span>
      </div>
    </div>
  </div>
);

export default Stories;
