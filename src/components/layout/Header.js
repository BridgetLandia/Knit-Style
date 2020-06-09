import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import knitting from '../../assets/knitting.svg'

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar id="mainNavbar" light expand="md">
      <Link to="/">
        <img id="logo" src={knitting} alt="logo" />
    </Link>
        <NavbarBrand href="/"><span id="business_name">SütiMama Kötödéje</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav_link" to="/">Home</Link>
            </NavItem>
            <NavItem>
            <Link className="nav_link" to="/shop">Shop</Link>
          </NavItem>
          <NavItem>
          <Link className="nav_link" to="/orders">Egyedi megrendelések</Link>
        </NavItem>
            <NavItem>
              <Link className="nav_link" to="/about">Rólam</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;


