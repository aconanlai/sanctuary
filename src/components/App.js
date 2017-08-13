import React from 'react';
import Nav from './Nav/Nav';
import Block from './blocks/Block';
import Home from './blocks/Home/Home';
import './App.css';

const App = () => (
  <div>
    <Nav />
    <Block>
      <Home />
    </Block>
  </div>
);

export default App;
