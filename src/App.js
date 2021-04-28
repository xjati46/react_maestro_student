import './App.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BeritaList from './components/dash_admin';
import Header from './components/header';
import Sidebar from './components/sidebar';

function App() {

  const [berita, setBerita] = useState([]);

  useEffect( () => {
    fetch('http://127.0.0.1:8000/api/berita/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token fb5ec5875f75a4cb52f2a523a2f3be5c4451421d'
      },
    })
    .then( resp => resp.json())
    .then( resp => setBerita(resp))
    .catch( error => console.log(error))
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
          <Col>
            <BeritaList berita={berita}></BeritaList>
          </Col>
        </Row>

      </Container>
    </div>
  );
}


export default App;
