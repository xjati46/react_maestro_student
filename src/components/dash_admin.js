import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function BeritaList(props){

  return (
    <div className='antarmuka-admin'>
        <Table striped bordered hover size='sm'>
            <thead>
                <tr>
                    <th>Judul</th>
                    <th>Isi</th>
                </tr>
            </thead>
            <tbody>
                {props.berita && props.berita.map( berita => {
                    return (
                        <tr key={berita.id}>
                            <td>{berita.judul}</td>
                            <td>{berita.konten}</td>
                        </tr>   
                    )
                })}
            </tbody>

        </Table>
    </div>
  )
}

export default BeritaList;
