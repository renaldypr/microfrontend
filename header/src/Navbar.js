import React from 'react';
import {
  Navbar,
  NavbarBrand
 } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar style={{backgroundColor: '#4D51AB'}} expand="md">
          <NavbarBrand href="#" style={{color: '#FFF'}}>Dashboard App</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}