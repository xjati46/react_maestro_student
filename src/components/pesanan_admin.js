import React from 'react';
import { Container, Row, Table, Button } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import NumberFormat from 'react-number-format';

function PesananAdmin(props) {
  
  return (
    <div>
      <Container>
        <Row className='antarmuka-admin-card'>
          <Button variant="success">
            <FontAwesomeIcon icon={faPlus}/> Tambah Pesanan
          </Button>
        </Row>
        <Row className='antarmuka-admin-card'>
          <Table striped bordered hover size='sm' className='center-text small-text'>
            <thead>
              <tr>
                <th>#</th>
                <th>Kode Pesanan</th>
                <th>Status</th>
                <th>Nama Siswa</th>
                <th>Nama Pelatih</th>
                <th>Produk</th>
                <th>Nilai Transaksi</th>
                <th>Masa Berlaku</th>
                <th>Honor Per Sesi</th>
                <th>Honor Pencairan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.pesanan && props.pesanan.map( (pesanan, index) => {
                return (
                  <tr key={pesanan.id}>
                    <td>{index+1}</td>
                    <td>{pesanan.__str__}</td>
                    <td>{pesanan.arsip ?  "Arsip" : "Aktif"}</td>
                    <td>{pesanan.nama_siswa}</td>
                    <td>{pesanan.nama_pelatih}</td>
                    <td>{pesanan.nama_produk}</td>
                    <td>
                      <NumberFormat
                        thousandSeparator={'.'}
                        decimalSeparator={','}
                        prefix={'Rp '}
                        displayType={'text'} value={pesanan.nilai_transaksi}
                      />
                      {pesanan.diskon ? <sup><em> disc. {pesanan.diskon * 100}%</em></sup> : null} 
                    </td>
                    <td>{pesanan.tgl_transaksi} - {pesanan.tgl_habis}</td>
                    <td>
                      <NumberFormat
                        thousandSeparator={'.'}
                        decimalSeparator={','}
                        prefix={'Rp '}
                        displayType={'text'} value={pesanan.honor_per_sesi}
                      />
                    </td>
                    <td>
                      <NumberFormat
                        thousandSeparator={'.'}
                        decimalSeparator={','}
                        prefix={'Rp '}
                        displayType={'text'} value={pesanan.honor_pencairan !== 0 ? pesanan.honor_pencairan : null}
                      />
                    </td>
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


export default PesananAdmin;


// '__str__', 'pelatih', 'arsip', 'siswa', 'produk', 'diskon', 'tgl_transaksi', 'tgl_habis', 'p1', 'p1_c', 'p2', 'p2_c', 'p3', 'p3_c', 'p4', 'p4_c', 'p5', 'p5_c', 'p6', 'p6_c', 'p7', 'p7_c', 'p8', 'p8_c', 'status_habis', 'nilai_transaksi', 'p_total', 'p_c_total', 'margin_p_c', 'honor_per_sesi', 'honor_pencairan'