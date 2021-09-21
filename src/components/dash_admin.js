import React, {useContext} from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faComments } from '@fortawesome/free-solid-svg-icons';
import { StateContext } from '../index';

function DashAdmin(props){
    const state = useContext(StateContext)

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
                                <Table striped bordered hover size='sm' className='center-text'>
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
                    <Col className='antarmuka-admin-card'>
                    </Col>
                </Row>
                <h1> hai {props.namauser}</h1>
                <button onClick={() => console.log(`nama user: ${state.userId}`)}>cek</button>
            </Container>
            

            
        </div>
  )
}

export default DashAdmin;
