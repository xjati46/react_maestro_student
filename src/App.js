import './App.css';
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashAdmin from './components/dash_admin';
import Header from './components/header';
import Sidebar from './components/sidebar';
import API from './api_service';
import { Route, HashRouter } from "react-router-dom";
import PelatihAdmin from './components/pelatih_admin';
import SiswaAdmin from './components/siswa_admin';
import PesananAdmin from './components/pesanan_admin';

function App() {

  const [ berita, setBerita ] = useState([]);
  const [ jumlahPelatih, setJumlahPelatih ] = useState([]);
  const [ jumlahSiswa, setJumlahSiswa ] = useState([]);
  const [ jumlahPesanan, setJumlahPesanan ] = useState([]);
  const [ pelatih, setPelatih ] = useState([]);
  const [ siswa, setSiswa ] = useState([]);
  const [ pesanan, setPesanan ] = useState([]);

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

    API.daftarPelatih()
    .then( resp => resp.json())
    .then( resp => setPelatih(resp))
    .catch( error => console.log(error));

    API.daftarSiswa()
    .then( resp => resp.json())
    .then( resp => setSiswa(resp))
    .catch( error => console.log(error));
    
    API.daftarPesanan()
    .then( resp => resp.json())
    .then( resp => setPesanan(resp))
    .catch( error => console.log(error));

  }, []);

  return (
    <HashRouter>
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
              <Route exact path="/" component={DashAdmin}>
                <DashAdmin
                  berita={berita}
                  jumlahPelatih={jumlahPelatih}
                  jumlahSiswa={jumlahSiswa}
                  jumlahPesanan={jumlahPesanan}
                />
              </Route>
              <Route path="/pelatih" component={PelatihAdmin}>
                <PelatihAdmin
                  pelatih={pelatih}
                />
              </Route>
              <Route path="/siswa" component={SiswaAdmin}>
                <SiswaAdmin
                  siswa={siswa}
                />
              </Route>
              <Route path="/pesanan" component={PesananAdmin}>
                <PesananAdmin
                  pesanan={pesanan}
                />
              </Route>
              
            </Col>
          </Row>

        </Container>
      </div>
    </HashRouter>
  );
}


export default App;
