import React from 'react';
import { withRouter } from 'react-router';
import scrollIntoView from 'scroll-into-view';
import Nav from './Nav/Nav';
import LangSwitcher from './LangSwitcher/LangSwitcher';
import Block from './blocks/Block';
import MapBlock from './blocks/Map/MapBlock';
import Home from './blocks/Home/Home';
import About from './blocks/About/About';
import Map from './blocks/Map/Map';
import Stories from './blocks/Stories/Stories';
import Artist from './blocks/Artist/Artist';
import Credits from './blocks/Credits/Credits';
import Panel from './Panel/Panel';
import Video from './Video/Video';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    const splits = this.props.location.pathname.split('/');
    const route = splits[splits.length - 1];
    if (route && (route !== 'fr')) {
      const element = document.getElementById(route);
      scrollIntoView(element, {
        time: 0,
      });
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <LangSwitcher />
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
        <MapBlock
          page="map"
        >
          <Map />
        </MapBlock>
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
        <Panel />
        <Video />
      </div>
    );
  }
}

export default withRouter(App);
