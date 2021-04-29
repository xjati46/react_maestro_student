import './App.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashAdmin from './components/dash_admin';
import Header from './components/header';
import Sidebar from './components/sidebar';
import API from './api_service';

function App() {

  const [ berita, setBerita ] = useState([]);
  const [ jumlahPelatih, setJumlahPelatih ] = useState([]);
  const [ jumlahSiswa, setJumlahSiswa ] = useState([]);
  const [ jumlahPesanan, setJumlahPesanan ] = useState([]);

  useEffect( () => {
    API.updateBerita()
    .then( resp => resp.json())
    .then( resp => setBerita(resp))
    .catch( error => console.log(error));

    API.updatePelatih()
    .then( resp => resp.json())
    .then( resp => setJumlahPelatih(resp))
    .catch( error => console.log(error));

    API.updateSiswa()
    .then( resp => resp.json())
    .then( resp => setJumlahSiswa(resp))
    .catch( error => console.log(error));

    API.updatePesanan()
    .then( resp => resp.json())
    .then( resp => setJumlahPesanan(resp))
    .catch( error => console.log(error));

  }, []);

  return (
    <div>
      <Container fluid >
        <Row>
          <Col className='header'>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col md={1} className='sidebar'>
            <Sidebar/>
          </Col>
          <Col className='antarmuka-admin'>
            <DashAdmin
              berita={berita}
              jumlahPelatih={jumlahPelatih}
              jumlahSiswa={jumlahSiswa}
              jumlahPesanan={jumlahPesanan}
            />
          </Col>
        </Row>

      </Container>
    </div>
  );
}


export default App;
