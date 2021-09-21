import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFileInvoiceDollar, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import '../App.css';
import { useCookies } from 'react-cookie';

function Sidebar() {

    const [ token, setToken, removeToken ] = useCookies(['msms-cookie']);

    const klikLogout = () => {
        removeToken(['msms-cookie']);
    };

    useEffect(() => {
        if(!token['msms-cookie']) window.location.href = '/';
      }, [token]);

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
                    <Nav.Link as={NavLink} to='/pesanan' replace>
                        <div>
                            <FontAwesomeIcon icon={faFileInvoiceDollar} size='2x'/>
                            Pesanan
                        </div>
                    </Nav.Link>
                    <div className='divider'></div>
                    <div className='nav-link logout-pointer' onClick={klikLogout}>
                        <FontAwesomeIcon icon={faSignOutAlt} size='2x'/>
                        Keluar
                    </div>
                </Nav>
            </Navbar>
        </React.Fragment>
    );
}


export default Sidebar;