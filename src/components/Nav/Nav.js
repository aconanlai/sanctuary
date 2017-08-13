import React from 'react';
import { connect } from 'react-redux';
import './Nav.css';

const items = ['home', 'about', 'map', 'stories', 'artist', 'credits'];

const NavItem = props => (
  <li
    className={(props.selected === props.name) ? 'navItem selected' : 'navItem'}
  >
    {props.name}
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
