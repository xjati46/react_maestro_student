import React from 'react';
import { Container, Row, Table, Button } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function PelatihAdmin(props) {

  return (
    <div>
      <Container>
        <Row className='antarmuka-admin-card'>
          <Button variant="success">
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
