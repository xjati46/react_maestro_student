import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUserAstronaut, faUser, faFileInvoiceDollar, faComments } from '@fortawesome/free-solid-svg-icons'

function BeritaList(props){

  return (
    <div>

        <Container>
            <Row>
                <Col className='antarmuka-admin-card'>
                    <Card>
                        <Card.Header as="h5">
                            <FontAwesomeIcon icon={faComments}/> Berita
                        </Card.Header>
                        <Card.Body>
                            <Table striped bordered hover size='sm'>
                                <thead>
                                    <tr>
                                        <th>Waktu</th>
                                        <th>Judul</th>
                                        <th>Isi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.berita && props.berita.map( berita => {
                                        return (
                                            <tr key={berita.id}>
                                                <td>{berita.waktu_pos}</td>
                                                <td>{berita.judul}</td>
                                                <td>{berita.konten}</td>
                                            </tr>   
                                        )
                                    })}
                                </tbody>

                            </Table>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col className='antarmuka-admin-card'>
                    <Card bg='primary' text='white'>
                        <Card.Header as="h5">
                            <FontAwesomeIcon icon={faUserAstronaut}/> Jumlah Pelatih
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>check card 1</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='antarmuka-admin-card'>
                    <Card bg='info' text='white'>
                        <Card.Header as="h5">
                            <FontAwesomeIcon icon={faUser}/> Jumlah Siswa
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>check card 2</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='antarmuka-admin-card'>
                    <Card bg='success' text='white'>
                        <Card.Header as="h5">
                            <FontAwesomeIcon icon={faFileInvoiceDollar}/> Pesanan Aktif
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>check card 2</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        

        
    </div>
  )
}

export default BeritaList;
