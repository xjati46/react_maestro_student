import React from 'react';
import { Container, Row, Table, Button } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function SiswaAdmin(props) {

  return (
    <div>
      <Container>
        <Row className='antarmuka-admin-card'>
          <Button variant="success">
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