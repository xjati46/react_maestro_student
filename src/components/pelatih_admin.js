import React, { useState } from 'react';
import { Container, Row, Table, Button, Modal, Form, Col } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function PelatihAdmin(props) {

  const [modal, setModal] = useState(false);

  const handlerMuncul = () => setModal(true);
  const handlerTutup = () => setModal(false);

  return (
    <div>
      <Container>
        <Row className='antarmuka-admin-card'>
          <Button variant="success" onClick={handlerMuncul}>
            <FontAwesomeIcon icon={faPlus}/> Tambah Pelatih
          </Button>
          <Modal show={modal} onHide={handlerTutup}>
            <Modal.Header closeButton>
              <Modal.Title>Tambah Pelatih</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
              <Form>
                <Form.Group controlId="user">
                  <Form.Label>Nama User</Form.Label>
                  <Form.Control as="select">
                    {props.user && props.user.map( user => {
                      return (
                        <option key={user.id}>{user.username}</option>  
                      )
                    })}
                  </Form.Control>
                </Form.Group>

                <Form.Row>
                  <Col>
                    <Form.Group controlId="nama_lengkap">
                      <Form.Label>Nama Lengkap</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                  <Col xs={4}>
                    <Form.Group controlId="nama_panggilan">
                      <Form.Label>Nama Panggilan</Form.Label>
                      <Form.Control type="text" />
                    </Form.Group>
                  </Col>
                </Form.Row>
                
                <Form.Row>
                  <Form.Group controlId="jenis_kelamin" as={Col}>
                    <Form.Label>Jenis Kelamin</Form.Label>
                    <Form.Control as="select">
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="bagi_hasil" as={Col}>
                    <Form.Label>Bagi Hasil</Form.Label>
                    <Form.Control as="select">
                      <option>60%</option>
                      <option>70%</option>
                    </Form.Control>
                  </Form.Group>

                </Form.Row>

                

              </Form>

            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handlerTutup}>
                Close
              </Button>
              <Button variant="primary" onClick={handlerTutup}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </Row>
        <Row className='antarmuka-admin-card'>
          <Table striped bordered hover size='sm' className='center-text'>
            <thead>
              <tr>
                <th>#</th>
                <th>Nama Pengguna</th>
                <th>Nama Lengkap</th>
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
                    <td>{pelatih.user_name}</td>
                    <td>{pelatih.nama_lengkap}</td>
                    <td>{pelatih.jenis_kelamin}</td>
                    <td>{pelatih.bagi_hasil * 100} %</td>
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

export default PelatihAdmin;