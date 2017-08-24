import React from 'react';
import { connect } from 'react-redux';
import scrollIntoView from 'scroll-into-view';
import './Nav.css';

const items = ['home', 'about', 'map', 'stories', 'artist', 'credits'];

const handleClick = page => {
  const element = document.getElementById(page);
  scrollIntoView(element, {
    time: 500,
    align: {
      top: 0,
    },
  });
};

const NavItem = props => (
  <li
    className={(props.selected === props.name) ? 'navItem selected' : 'navItem'}
  >
    <a
      onClick={(e) => {
        e.preventDefault();
        handleClick(props.name);
      }}
      role="link"
      tabIndex={0}
    >
      {props.name}
    </a>
  </li>
);

const Nav = props => (
  <div className="nav">
    <ul className="navList">
      {items.map(item => {
        return (
          <NavItem
            name={item}
            selected={props.page}
            key={item}
          />
        );
      })}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    page: state._routing.page,
  };
};

export default connect(mapStateToProps, {})(Nav);
