import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAstronaut, faUser, faFileInvoiceDollar, faSignOutAlt, faTicketAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';

function Sidebar() {

  return (
    <React.Fragment>
        <Navbar expand="s" variant='dark'>
            <Nav className='center-text'>
                <Nav.Link as={NavLink} exact to='/' replace>
                    <div>
                        <FontAwesomeIcon icon={faHome} size='2x'/>
                        Beranda
                    </div>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/produk' replace>
                    <div>
                        <FontAwesomeIcon icon={faTicketAlt} size='2x'/>
                        Produk
                    </div>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/pelatih' replace>
                    <div>
                        <FontAwesomeIcon icon={faUserAstronaut} size='2x'/>
                        Pelatih
                    </div>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/siswa' replace>
                    <div>
                        <FontAwesomeIcon icon={faUser} size='2x'/>
                        Siswa
                    </div>
                </Nav.Link>
                <Nav.Link as={NavLink} to='/pesanan' replace>
                    <div>
                        <FontAwesomeIcon icon={faFileInvoiceDollar} size='2x'/>
                        Pesanan
                    </div>
                </Nav.Link>
                <div className='divider'></div>
                <Nav.Link as={NavLink} to='/logout'>
                    <div>
                        <FontAwesomeIcon icon={faSignOutAlt} size='2x'/>
                        Keluar
                    </div>
                </Nav.Link>
            </Nav>
        </Navbar>
    </React.Fragment>
  );
}


export default Sidebar;