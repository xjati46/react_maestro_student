import './App.css';
import { useState, useEffect, useContext } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DashAdmin from './components/dash_admin';
import Header from './components/header';
import Sidebar from './components/sidebar';
import API from './api_service';
import { Route, HashRouter } from "react-router-dom";
import PesananAdmin from './components/pesanan_admin';
import { useCookies } from 'react-cookie';
import { StateContext } from './index';

function App() {

  const state = useContext(StateContext)

// STATE
  const [ berita, setBerita ] = useState([]);
  const [ user, setUser ] = useState([]);
  const [ produk, setProduk ] = useState([]);
  const [ pelatih, setPelatih ] = useState([]);
  const [ siswa, setSiswa ] = useState([]);
  const [ pesanan, setPesanan ] = useState([]);

  const [ token ] = useCookies('msms-cookie');

// API CALLS
  useEffect( () => {
    API.updateBerita(token['msms-cookie'])
    .then( resp => resp.json())
    .then( resp => setBerita(resp))
    .catch( error => console.log(error));

    API.daftarUser(token['msms-cookie'])
    .then( resp => resp.json())
    .then( resp => setUser(resp))
    .catch( error => console.log(error));

    API.daftarProduk(token['msms-cookie'])
    .then( resp => resp.json())
    .then( resp => setProduk(resp))
    .catch( error => console.log(error));

    API.daftarPelatih(token['msms-cookie'])
    .then( resp => resp.json())
    .then( resp => setPelatih(resp))
    .catch( error => console.log(error));

    API.daftarSiswa(token['msms-cookie'])
    .then( resp => resp.json())
    .then( resp => setSiswa(resp))
    .catch( error => console.log(error));
    
    API.daftarPesanan(token['msms-cookie'])
    .then( resp => resp.json())
    .then( resp => {
      const data = resp.filter(filterPesanan)
      setPesanan(data)
    })
    .catch( error => console.log(error));

  }, [token]);

  useEffect(() => {
    if(!token['msms-cookie']) window.location.href = '/';
  }, [token]);

// EVENT HANDLER
  const filterPesanan = pesanan => {
    const userId = state.userId.toString()
    if(userId) {
        return pesanan.id_siswa === userId
    }
  }

  // PESANAN
  const pesananDiubah = pesn => {
    const pesananBaru = pesanan.map( pes => {
      if(pes.id === pesn.id) {
        return pesn;
      }
      return pes;
    });
    setPesanan(pesananBaru);
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
              <Route path="/pesanan">
                <PesananAdmin
                  pesanan={pesanan}
                  pelatih={pelatih}
                  siswa={siswa}
                  produk={produk}
                  pesananDiubah={pesananDiubah}
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
