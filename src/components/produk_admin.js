import React, {useState, useEffect} from 'react';
import { Container, Row, Table, Button, Modal, Form } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import API from '../api_service';
import NumberFormat from 'react-number-format';
import { useCookies } from 'react-cookie';

function ProdukAdmin(props) {

/// STATE
  const [modal, setModal] = useState(false);
  const [modalHapus, setModalHapus] = useState(false);
  const [modalUbah, setModalUbah] = useState(false);
  const [pilihProdukDihapus, setPilihProdukDihapus] = useState({});
  const [pilihProdukDiubah, setPilihProdukDiubah] = useState({});
  
  const [nama, setNama] = useState('');
  const [harga, setHarga] = useState('');
  const [pertemuan, setPertemuan] = useState('');

  const [token] = useCookies(['msms-cookie']);

/// EVENT HANDLER
  const handlerMuncul = () => {
    setModal(true);
    setNama('');
    setHarga('');
    setPertemuan('')
  };
  const handlerTutup = () => setModal(false);

  const klikHapusProduk = produk => {
    setPilihProdukDihapus(produk);
    setModalHapus(true);
  };

  const klikUbahProduk = produk => {
    setPilihProdukDiubah(produk);
    setModalUbah(true);
  };

// API CALLS
  const klikTambah = () => {
    API.tambahProduk({
      nama_produk: nama,
      harga: harga,
      jumlah_pertemuan: pertemuan
    }, token['msms-cookie'])
    .then(resp => props.produkDitambahkan(resp))
    .then(setModal(false))
    .catch(error => console.log(error))
  };

  const klikHapus = produk => {
    API.hapusProduk(produk.id, token['msms-cookie'])
    .then( () => props.produkDihapus(produk))
    .then(setModalHapus(false))
    .catch( error => console.log(error));
  };

  const klikUbah = produk => {
    API.ubahProduk(produk.id, {
      nama_produk: nama,
      harga: harga,
      jumlah_pertemuan: pertemuan
    }, token['msms-cookie'])
    .then(resp => props.produkDiubah(resp))
    .then(setModalUbah(false))
    .catch(error => console.log(error));
  };

  useEffect( () => {
    setNama(pilihProdukDiubah.nama_produk);
    setHarga(pilihProdukDiubah.harga);
    setPertemuan(pilihProdukDiubah.jumlah_pertemuan);
  }, [pilihProdukDiubah]);

  return (
    <div>
      <Container>
        <Row className='antarmuka-admin-card'>
          <Button variant="success" onClick={handlerMuncul}>
            <FontAwesomeIcon icon={faPlus}/> Tambah Produk
          </Button>
          
        </Row>
        <Row className='antarmuka-admin-card'>
          <Table striped bordered hover size='sm' className='center-text'>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Produk</th>
                <th>Harga</th>
                <th>Jumlah Pertemuan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.produk && props.produk.map( (produk, index) => {
                return (
                  <tr key={produk.id}>
                    <td>{index+1}</td>
                    <td>{produk.nama_produk}</td>
                    <td>
                      <NumberFormat
                          thousandSeparator={'.'}
                          decimalSeparator={','}
                          prefix={'Rp '}
                          displayType={'text'} value={produk.harga}
                        />
                    </td>
                    <td>{produk.jumlah_pertemuan}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => klikUbahProduk(produk)}
                        title='Ubah Produk'
                      /> 
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => klikHapusProduk(produk)}
                        title='Hapus Produk'
                      />
                    </td>
                  </tr>   
                )
              })}
            </tbody>
          </Table>
        </Row>
      </Container>

      <Modal show={modal} onHide={handlerTutup}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form>
            <Form.Group controlId="nama">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control type="text" value={nama} onChange={evt => setNama(evt.target.value)}/>
            </Form.Group>

            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" value={harga} onChange={evt => setHarga(evt.target.value)}/>
            </Form.Group>

            <Form.Group controlId="pertemuan">
              <Form.Label>Jumlah Pertemuan</Form.Label>
              <Form.Control type="number" value={pertemuan} onChange={evt => setPertemuan(evt.target.value)}/>
            </Form.Group>
            
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerTutup}>
            Batal
          </Button>
          <Button variant="success" onClick={klikTambah}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalHapus} onHide={() => setModalHapus(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Yakin hapus <strong>{pilihProdukDihapus.nama_produk}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalHapus(false)}>
            Batal
          </Button>
          <Button variant="danger" onClick={() => klikHapus(pilihProdukDihapus)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalUbah} onHide={() => setModalUbah(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Data Produk</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form>
            <Form.Group controlId="nama">
              <Form.Label>Nama Produk</Form.Label>
              <Form.Control type="text" value={nama} onChange={evt => setNama(evt.target.value)}/>
            </Form.Group>

            <Form.Group controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" value={harga} onChange={evt => setHarga(evt.target.value)}/>
            </Form.Group>

            <Form.Group controlId="pertemuan">
              <Form.Label>Jumlah Pertemuan</Form.Label>
              <Form.Control type="number" value={pertemuan} onChange={evt => setPertemuan(evt.target.value)}/>
            </Form.Group>
            
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalUbah(false)}>
            Batal
          </Button>
          <Button variant="warning" onClick={() => klikUbah(pilihProdukDiubah)}>
            Ubah
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProdukAdmin;