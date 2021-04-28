import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSwimmer } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

function Header() {

  return (
    <React.Fragment>

        <Navbar>
          <Navbar.Brand href="#">
            <FontAwesomeIcon icon={faSwimmer} flip="horizontal" size="2x"/>
            <Navbar.Text>Maestro Swim Management System</Navbar.Text>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Selamat Datang: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>

    </React.Fragment>
  );
}


export default Header;
