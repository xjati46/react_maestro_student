import React, { useState } from 'react'
import { Container, Modal, Form, Col, Button } from 'react-bootstrap'
import '../App.css'
import API from '../api_service'
import { useCookies } from 'react-cookie'

function DashAdmin(props){

    const [ modalAwal, setModalAwal ] = useState(false)
    const [token] = useCookies(['msms-cookie'])

    const [nl, setNl] = useState('')
    const [np, setNp] = useState('')
    const [jk, setJk] = useState('Laki-laki')
    const [usia, setUsia] = useState('')

    const userName = localStorage.getItem('userName')
    const userId = localStorage.getItem('userId')

    const klikTambah = () => {
        API.tambahSiswa({
            user: userId,
            nama_lengkap: nl,
            nama_panggilan: np,
            jenis_kelamin: jk,
            usia: usia,
        }, token['msms-cookie'])
        .then(setModalAwal(false))
        .catch(error => console.log(error))
      };

    return (
        <div>

            <Container>
                <h1>Halo, selamat datang {userName}.</h1>
                <Button onClick={() => setModalAwal(!modalAwal)}>Lengkapi Profil</Button>
            </Container>
            
            <Modal show={modalAwal} onHide={() => setModalAwal(!modalAwal)}>
                <Modal.Header closeButton>
                    <Modal.Title>Lengkapi Profil</Modal.Title>
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

                        <Modal.Footer>
                            <Button variant="success" onClick={klikTambah} type='submit'>
                                Simpan
                            </Button>
                        </Modal.Footer>

                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default DashAdmin;
