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
import ProdukAdmin from './components/produk_admin';

function App() {

// STATE
  const [ berita, setBerita ] = useState([]);
  const [ user, setUser ] = useState([]);
  const [ produk, setProduk ] = useState([]);
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

    API.daftarProduk()
    .then( resp => resp.json())
    .then( resp => setProduk(resp))
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

  // PRODUK
  const produkDitambahkan = prod => {
    const produkBaru = [...produk, prod];
    setProduk(produkBaru);
  };

  const produkDihapus = prod => {
    const produkBaru = produk.filter( pdk => pdk.id !== prod.id );
    setProduk(produkBaru);
  };

  const produkDiubah = prod => {
    const produkBaru = produk.map( pdk => {
      if(pdk.id === prod.id) {
        return prod;
      }
      return pdk;
    });
    setProduk(produkBaru);
  };

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

  // PESANAN
  const pesananDitambahkan = pes => {
    const pesananBaru = [...pesanan, pes];
    setPesanan(pesananBaru);
  };

  const pesananDihapus = pesn => {
    const pesananBaru = pesanan.filter( pes => pes.id !== pesn.id );
    setPesanan(pesananBaru);
  };

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
              
              <Route path="/produk">
                <ProdukAdmin
                  produk={produk}
                  produkDitambahkan={produkDitambahkan}
                  produkDihapus={produkDihapus}
                  produkDiubah={produkDiubah}
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
                  pelatih={pelatih}
                  siswa={siswa}
                  produk={produk}
                  pesananDitambahkan={pesananDitambahkan}
                  pesananDihapus={pesananDihapus}
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
