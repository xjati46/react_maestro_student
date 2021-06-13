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
import VerifikasiAdmin from './components/verifikasi_admin';

function App() {

// STATE
  const [ berita, setBerita ] = useState([]);
  const [ user, setUser ] = useState([]);
  const [ pelatih, setPelatih ] = useState([]);
  const [ siswa, setSiswa ] = useState([]);
  const [ pesanan, setPesanan ] = useState([]);

// API CALLS
  useEffect( () => {
    API.updateBerita()
    .then( resp => resp.json())
    .then( resp => setBerita(resp))
    .catch( error => console.log(error));

    API.daftarUser()
    .then( resp => resp.json())
    .then( resp => setUser(resp))
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

// EVENT HANDLER
  // PELATIH
  const pelatihDitambahkan = pel => {
    const pelatihBaru = [...pelatih, pel];
    setPelatih(pelatihBaru);
  };

  const pelatihDiubah = pelat => {
    const pelatihBaru = pelatih.map( pel => {
      if(pel.id === pelat.id) {
        return pelat;
      }
      return pel;
    });
    setPelatih(pelatihBaru);
  };

  const pelatihDihapus = pelat => {
    const pelatihBaru = pelatih.filter( pel => pel.id !== pelat.id );
    setPelatih(pelatihBaru);
  };

  // SISWA
  const siswaDitambahkan = sis => {
    const siswaBaru = [...siswa, sis];
    setSiswa(siswaBaru);
  };

  const siswaDiubah = sisw => {
    const siswaBaru = siswa.map( sis => {
      if(sis.id === sisw.id) {
        return sisw;
      }
      return sis;
    });
    setSiswa(siswaBaru);
  };

  const siswaDihapus = sisw => {
    const siswaBaru = siswa.filter( sis => sis.id !== sisw.id );
    setSiswa(siswaBaru);
  };

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
              <Route exact path="/">
                <DashAdmin
                  berita={berita}
                  jumlahPelatih={pelatih}
                  jumlahSiswa={siswa}
                  jumlahPesanan={pesanan}
                />
              </Route>
              
              <Route path="/pelatih">
                <PelatihAdmin
                  pelatih={pelatih}
                  user={user}
                  pelatihDitambahkan={pelatihDitambahkan}
                  pelatihDihapus={pelatihDihapus}
                  pelatihDiubah={pelatihDiubah}
                />
              </Route>
              <Route path="/siswa">
                <SiswaAdmin
                  siswa={siswa}
                  siswaDitambahkan={siswaDitambahkan}
                  siswaDihapus={siswaDihapus}
                  siswaDiubah={siswaDiubah}
                />
              </Route>
              <Route path="/pesanan">
                <PesananAdmin
                  pesanan={pesanan}
                />
              </Route>
              <Route path="/verifikasi">
                <VerifikasiAdmin
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
