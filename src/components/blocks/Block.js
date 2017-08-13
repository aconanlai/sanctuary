import React from 'react';
import './Block.css';

const Block = props => (
  <div className="block">
    {props.children}
  </div>
);

export default Block;
