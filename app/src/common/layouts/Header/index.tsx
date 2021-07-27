import * as React from 'react';
import { NavLink } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import logo from './logo.svg';

const Header: React.FC = () => (
  <>
    <header className="header">
      <Navbar>
        <Navbar.Brand as={NavLink} to="/" exact>
          <img
            src={logo}
            alt=""
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Weather
        </Navbar.Brand>

        <Nav
          activeKey="/"
        >
          <Nav.Item>
            <Nav.Link as={NavLink} activeClassName="active" to="/" exact>
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} activeClassName="active" to="/weather" exact>
              Weather
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} activeClassName="active" to="/notes" exact>
              Notes
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </header>
  </>
);

export default Header;
