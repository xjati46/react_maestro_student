import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAstronaut, faUser, faFileInvoiceDollar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

function Sidebar() {

  return (
    <React.Fragment>
        <Navbar expand="s" variant='dark'>
            <Nav className='center-text'>
                <Nav.Link href="#">
                    <FontAwesomeIcon icon={faHome} size='2x'/>
                    Beranda
                </Nav.Link>
                <Nav.Link href="#">
                    <FontAwesomeIcon icon={faUserAstronaut} size='2x'/>
                    Pelatih
                </Nav.Link>
                <Nav.Link href="#">
                    <FontAwesomeIcon icon={faUser} size='2x'/>
                    Siswa
                </Nav.Link>
                <Nav.Link href="#">
                    <FontAwesomeIcon icon={faFileInvoiceDollar} size='2x'/>
                    Pesanan
                </Nav.Link>
                <div className='divider'></div>
                <Nav.Link href="#">
                    <FontAwesomeIcon icon={faSignOutAlt} size='2x'/>
                    Keluar
                </Nav.Link>
            </Nav>
        </Navbar>
    </React.Fragment>
  );
}


export default Sidebar;
