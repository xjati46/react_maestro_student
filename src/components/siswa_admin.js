import React, {useState, useEffect} from 'react';
import { Container, Row, Table, Button, Modal, Form, Col } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import API from '../api_service';

function SiswaAdmin(props) {

/// STATE
const [modalTambah, setModalTambah] = useState(false);
const [modalHapus, setModalHapus] = useState(false);
const [modalUbah, setModalUbah] = useState(false);
  
const [nl, setNl] = useState('');
const [np, setNp] = useState('');
const [jk, setJk] = useState('Laki-laki');
const [usia, setUsia] = useState('');

const [pilihSiswaDihapus, setPilihSiswaDihapus] = useState({});
const [pilihSiswaDiubah, setPilihSiswaDiubah] = useState({});

/// EVENT HANDLER
const handlerMunculTambah = () => {
  setModalTambah(true);
  setNl('');
  setNp('');
  setJk('Laki-laki');
  setUsia('');
};
const handlerTutupTambah = () => setModalTambah(false);

const handlerMunculHapus = () => setModalHapus(true);
const handlerTutupHapus = () => setModalHapus(false);

const handlerMunculUbah = () => setModalUbah(true);
const handlerTutupUbah = () => setModalUbah(false);

const klikHapusSiswa = siswa => {
  setPilihSiswaDihapus(siswa);
  handlerMunculHapus();
};

const klikUbahSiswa = siswa => {
  setPilihSiswaDiubah(siswa);
  handlerMunculUbah();
};

// API CALLS
const klikTambah = () => {
  API.tambahSiswa({
    nama_lengkap: nl,
    nama_panggilan: np,
    jenis_kelamin: jk,
    usia: usia,
  })
  .then(resp => props.siswaDitambahkan(resp))
  .then(setModalTambah(false))
  .catch(error => console.log(error))
};

const klikUbah = siswa => {
  API.ubahSiswa(siswa.id, {
    nama_lengkap: nl,
    nama_panggilan: np,
    jenis_kelamin: jk,
    usia: usia,
  })
  .then(resp => props.siswaDiubah(resp))
  .then(setModalUbah(false))
  .catch(error => console.log(error));
};

const klikHapus = siswa => {
  API.hapusSiswa(siswa)
  .then( () => props.klikHapus(siswa))
  .then(setModalHapus(false))
  .catch( error => console.log(error));
};

useEffect( () => {
  setNl(pilihSiswaDiubah.nama_lengkap);
  setNp(pilihSiswaDiubah.nama_panggilan);
  setJk(pilihSiswaDiubah.jenis_kelamin);
  setUsia(pilihSiswaDiubah.usia);
}, [pilihSiswaDiubah]);

  return (
    <div>
      <Container>
        <Row className='antarmuka-admin-card'>
          <Button variant="success" onClick={handlerMunculTambah}>
            <FontAwesomeIcon icon={faPlus}/> Tambah Siswa
          </Button>
        </Row>
        <Row className='antarmuka-admin-card'>
          <Table striped bordered hover size='sm' className='center-text'>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Lengkap</th>
                <th>Nama Panggilan</th>
                <th>Jenis Kelamin</th>
                <th>Usia</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.siswa && props.siswa.map( (siswa, index) => {
                return (
                  <tr key={siswa.id}>
                    <td>{index+1}</td>
                    <td>{siswa.nama_lengkap}</td>
                    <td>{siswa.nama_panggilan}</td>
                    <td>{siswa.jenis_kelamin}</td>
                    <td>{siswa.usia} th</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => klikUbahSiswa(siswa)}
                        title='Ubah Siswa'/> 
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => klikHapusSiswa(siswa)}
                        title='Hapus Siswa'
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Row>
      </Container>

      <Modal show={modalTambah} onHide={handlerTutupTambah}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Siswa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group controlId="nl">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="text" value={nl} onChange={evt => setNl(evt.target.value)}/>
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group controlId="np">
                  <Form.Label>Nama Panggilan</Form.Label>
                  <Form.Control type="text" value={np} onChange={evt => setNp(evt.target.value)}/>
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="jk" as={Col}>
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control as="select" value={jk} onChange={evt => setJk(evt.target.value)}>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="usia" as={Col}>
                <Form.Label>Usia</Form.Label>
                <Form.Control type="text" value={usia} onChange={evt => setUsia(evt.target.value)}/>
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerTutupTambah}>
            Batal
          </Button>
          <Button variant="success" onClick={klikTambah}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalUbah} onHide={handlerTutupUbah}>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Data Siswa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Col>
                <Form.Group controlId="nl">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="text" value={nl} onChange={evt => setNl(evt.target.value)} />
                </Form.Group>
              </Col>
              <Col xs={4}>
                <Form.Group controlId="np">
                  <Form.Label>Nama Panggilan</Form.Label>
                  <Form.Control type="text" value={np} onChange={evt => setNp(evt.target.value)} />
                </Form.Group>
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Group controlId="jk" as={Col}>
                <Form.Label>Jenis Kelamin</Form.Label>
                <Form.Control as="select" value={jk} onChange={evt => setJk(evt.target.value)} >
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="usia" as={Col}>
                <Form.Label>Usia</Form.Label>
                <Form.Control type="text" value={usia} onChange={evt => setUsia(evt.target.value)} />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerTutupUbah}>
            Batal
          </Button>
          <Button variant="warning" onClick={() => klikUbah(pilihSiswaDiubah)}>
            Ubah
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalHapus} onHide={handlerTutupHapus}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Siswa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Yakin hapus <strong>{pilihSiswaDihapus.nama_lengkap}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerTutupHapus}>
            Batal
          </Button>
          <Button variant="danger" onClick={() => klikHapus(pilihSiswaDihapus.id)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}


export default SiswaAdmin;