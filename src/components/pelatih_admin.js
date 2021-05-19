import React, {useState, useEffect} from 'react';
import { Container, Row, Table, Button, Modal, Form, Col } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import API from '../api_service';

function PelatihAdmin(props) {

/// STATE
  const [modal, setModal] = useState(false);
  const [modalHapus, setModalHapus] = useState(false);
  const [modalUbah, setModalUbah] = useState(false);
  const [pilihPelatihDihapus, setPilihPelatihDihapus] = useState({});
  const [pilihPelatihDiubah, setPilihPelatihDiubah] = useState({});
  
  const [usr, setUsr] = useState('');
  const [nl, setNl] = useState('');
  const [np, setNp] = useState('');
  const [jk, setJk] = useState('Laki-laki');
  const [bh, setBh] = useState('0.6');

/// EVENT HANDLER
  const handlerMuncul = () => {
    setModal(true)
    setUsr('');
    setNl('');
    setNp('');
    setJk('Laki-laki');
    setBh('0.6');
  };
  const handlerTutup = () => setModal(false);

  const klikHapusPelatih = pelatih => {
    setPilihPelatihDihapus(pelatih);
    setModalHapus(true);
  };

  const klikUbahPelatih = pelatih => {
    setPilihPelatihDiubah(pelatih);
    setModalUbah(true);
  };

// API CALLS
  const klikTambah = user => {
    API.tambahPelatih({
      user: usr,
      nama_lengkap: nl,
      nama_panggilan: np,
      jenis_kelamin: jk,
      bagi_hasil: bh,
    })
    .then(resp => props.pelatihDitambahkan(resp))
    .then(setModal(false))
    .catch(error => console.log(error));
  };

  const klikHapus = pelatih => {
    API.hapusPelatih(pelatih.id)
    .then( () => props.pelatihDihapus(pelatih))
    .then(setModalHapus(false))
    .catch( error => console.log(error));
  };

  const klikUbah = pelatih => {
    API.ubahPelatih(pelatih.id, {
      user: usr,
      nama_lengkap: nl,
      nama_panggilan: np,
      jenis_kelamin: jk,
      bagi_hasil: bh,
    })
    .then(resp => props.pelatihDiubah(resp))
    .then(setModalUbah(false))
    .catch(error => console.log(error));
  };

  useEffect( () => {
    if(pilihPelatihDiubah.user) {
      setUsr(pilihPelatihDiubah.user);
    } else {
      setUsr('');
    };
    setNl(pilihPelatihDiubah.nama_lengkap);
    setNp(pilihPelatihDiubah.nama_panggilan);
    setJk(pilihPelatihDiubah.jenis_kelamin);
    setBh(pilihPelatihDiubah.bagi_hasil);
  }, [pilihPelatihDiubah]);

  return (
    <div>
      <Container>
        <Row className='antarmuka-admin-card'>
          <Button variant="success" onClick={handlerMuncul}>
            <FontAwesomeIcon icon={faPlus}/> Tambah Pelatih
          </Button>
          
        </Row>
        <Row className='antarmuka-admin-card'>
          <Table striped bordered hover size='sm' className='center-text'>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Pengguna</th>
                <th>Nama Lengkap</th>
                <th>Nama Panggilan</th>
                <th>Jenis Kelamin</th>
                <th>Bagi Hasil</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.pelatih && props.pelatih.map( (pelatih, index) => {
                return (
                  <tr key={pelatih.id}>
                    <td>{index+1}</td>
                    <td>{
                      pelatih.user ? pelatih.user_name : '-----'
                    }</td>
                    <td>{pelatih.nama_lengkap}</td>
                    <td>{pelatih.nama_panggilan}</td>
                    <td>{pelatih.jenis_kelamin}</td>
                    <td>{pelatih.bagi_hasil * 100} %</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => klikUbahPelatih(pelatih)}
                        title='Ubah Pelatih'
                      /> 
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => klikHapusPelatih(pelatih)}
                        title='Hapus Pelatih'
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
          <Modal.Title>Tambah Pelatih</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form>
            <Form.Group controlId="usr">
              <Form.Label>Nama Pengguna</Form.Label>
              <Form.Control as="select" value={usr} onChange={evt => setUsr(evt.target.value)}>
                <option value=''>-----</option>
                {props.user && props.user.map( x => {
                  return (
                    <option value={x.id} key={x.id}>{x.username}</option>  
                  )
                })}
              </Form.Control>
            </Form.Group>
            
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

              <Form.Group controlId="bh" as={Col}>
                <Form.Label>Bagi Hasil</Form.Label>
                <Form.Control as="select" value={bh} onChange={evt => setBh(evt.target.value)}>
                  <option value="0.6">60%</option>
                  <option value="0.7">70%</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerTutup}>
            Tutup
          </Button>
          <Button variant="primary" onClick={() => klikTambah(usr)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalHapus} onHide={() => setModalHapus(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Pelatih</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Yakin hapus <strong>{pilihPelatihDihapus.nama_lengkap}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalHapus(false)}>
            Batal
          </Button>
          <Button variant="danger" onClick={() => klikHapus(pilihPelatihDihapus)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalUbah} onHide={() => setModalUbah(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ubah Data Pelatih</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Form>
            <Form.Group controlId="usr">
              <Form.Label>Nama Pengguna</Form.Label>
              <Form.Control as="select" value={usr} onChange={evt => setUsr(evt.target.value)}>
                <option value=''>-----</option>
                {props.user && props.user.map( x => {
                  return (
                    <option value={x.id} key={x.id}>{x.username}</option>  
                  )
                })}
              </Form.Control>
            </Form.Group>
            
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

              <Form.Group controlId="bh" as={Col}>
                <Form.Label>Bagi Hasil</Form.Label>
                <Form.Control as="select" value={bh} onChange={evt => setBh(evt.target.value)}>
                  <option value="0.6">60%</option>
                  <option value="0.7">70%</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalUbah(false)}>
            Batal
          </Button>
          <Button variant="warning" onClick={() => klikUbah(pilihPelatihDiubah)}>
            Ubah
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default PelatihAdmin;