import React from 'react';
import {
  Navbar,
  NavbarBrand
 } from 'reactstrap';

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}