import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut, faUser, faFileInvoiceDollar, faComments } from '@fortawesome/free-solid-svg-icons';

function DashAdmin(props){
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
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faUserAstronaut}/> Jumlah Pelatih
                                </Col>
                                <Col xs={3}>
                                    {props.jumlahPelatih ? 
                                        <strong>{props.jumlahPelatih.length}</strong> :
                                        <strong>0</strong>
                                    }
                                </Col>
                            </Row>
                        </Card.Header>
                    </Card>
                </Col>
                <Col className='antarmuka-admin-card'>
                    <Card bg='info' text='white'>
                        <Card.Header as="h5">
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faUser}/> Jumlah Siswa
                                </Col>
                                <Col xs={3}>
                                    {props.jumlahSiswa ? 
                                        <strong>{props.jumlahSiswa.length}</strong> :
                                        <strong>0</strong>
                                    }
                                </Col>
                            </Row>
                        </Card.Header>
                    </Card>
                </Col>
                <Col className='antarmuka-admin-card'>
                    <Card bg='success' text='white'>
                        <Card.Header as="h5">
                            <Row>
                                <Col>
                                    <FontAwesomeIcon icon={faFileInvoiceDollar}/> Pesanan Aktif
                                </Col>
                                <Col xs={3}>
                                    {props.jumlahPesanan ? 
                                        <strong>{props.jumlahPesanan.length}</strong> :
                                        <strong>0</strong>
                                    }
                                </Col>
                            </Row>
                        </Card.Header>
                    </Card>
                </Col>
            </Row>
        </Container>
        

        
    </div>
  )
}

export default DashAdmin;
