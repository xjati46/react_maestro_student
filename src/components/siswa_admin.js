import React, {useState} from 'react';
import { Container, Row, Table, Button, Modal, Form, Col } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import API from '../api_service';

function SiswaAdmin(props) {

/// STATE
const [modal, setModal] = useState(false);
  
const [nl, setNl] = useState('');
const [np, setNp] = useState('');
const [jk, setJk] = useState('Laki-laki');
const [usia, setUsia] = useState('');

/// EVENT HANDLER
const handlerMuncul = () => setModal(true);
const handlerTutup = () => setModal(false);

const klikTambah = () => {
  API.tambahSiswa({
    nama_lengkap: nl,
    nama_panggilan: np,
    jenis_kelamin: jk,
    usia: usia,
  })
  .then(resp => props.siswaDitambahkan(resp))
  .then(setModal(false))
  .catch(error => console.log(error))
};

  return (
    <div>
      <Container>
        <Row className='antarmuka-admin-card'>
          <Button variant="success" onClick={handlerMuncul}>
            <FontAwesomeIcon icon={faPlus}/> Tambah Siswa
          </Button>
          <Modal show={modal} onHide={handlerTutup}>
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
              <Button variant="secondary" onClick={handlerTutup}>
                Tutup
              </Button>
              <Button variant="primary" onClick={klikTambah}>
                Simpan
              </Button>
            </Modal.Footer>
          </Modal>
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
                    <td><FontAwesomeIcon icon={faEdit}/> <FontAwesomeIcon icon={faTrash}/></td>
                  </tr>   
                )
              })}
            </tbody>
          </Table>
        </Row>
      </Container>
    </div>
  );
}


export default SiswaAdmin;