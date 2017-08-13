import React from 'react';
import Nav from './Nav/Nav';
import Block from './blocks/Block';
import Home from './blocks/Home/Home';
import About from './blocks/About/About';
import Map from './blocks/Map/Map';
import Stories from './blocks/Stories/Stories';
import Artist from './blocks/Artist/Artist';
import Credits from './blocks/Credits/Credits';

import './App.css';

const App = () => (
  <div>
    <Nav />
    <Block
      page="home"
    >
      <Home />
    </Block>
    <Block
      page="about"
    >
      <About />
    </Block>
    <Block
      page="map"
    >
      <Map />
    </Block>
    <Block
      page="stories"
    >
      <Stories />
    </Block>
    <Block
      page="artist"
    >
      <Artist />
    </Block>
    <Block
      page="credits"
    >
      <Credits />
    </Block>
  </div>
);

export default App;
