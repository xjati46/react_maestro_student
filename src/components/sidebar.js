import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAstronaut, faUser, faFileInvoiceDollar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';

function Sidebar() {

  return (
    <React.Fragment>
        <Navbar expand="s" variant='dark'>
            <Nav className='center-text'>
                <Nav.Link href="#">
                    <NavLink exact to='/'>
                        <div>
                            <FontAwesomeIcon icon={faHome} size='2x'/>
                            Beranda
                        </div>
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to='/pelatih'>
                        <div>
                            <FontAwesomeIcon icon={faUserAstronaut} size='2x'/>
                            Pelatih
                        </div>
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to='/siswa'>
                        <div>
                            <FontAwesomeIcon icon={faUser} size='2x'/>
                            Siswa
                        </div>
                    </NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to='/pesanan'>
                        <div>
                            <FontAwesomeIcon icon={faFileInvoiceDollar} size='2x'/>
                            Pesanan
                        </div>
                    </NavLink>
                </Nav.Link>
                <div className='divider'></div>
                <Nav.Link>
                    <NavLink to='/logout'>
                        <div>
                            <FontAwesomeIcon icon={faSignOutAlt} size='2x'/>
                            Keluar
                        </div>
                    </NavLink>
                </Nav.Link>
            </Nav>
        </Navbar>
    </React.Fragment>
  );
}


export default Sidebar;