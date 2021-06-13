import React from 'react';
import { Container, Row, Table, Button } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus, faCheckDouble } from '@fortawesome/free-solid-svg-icons';
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
                <th>Tanggal Latihan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.pesanan && props.pesanan.map( (pesanan, index) => {
                return (
                  <tr key={pesanan.id}>
                    <td>{index+1}</td>
                    <td>{pesanan.__str__}</td>
                    <td>{pesanan.arsip ?  "Pasif" : "Aktif"}</td>
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
                    {pesanan.status_habis ?
                      <td className='red'><strong>Habis</strong> {pesanan.tgl_habis}</td> :
                      <td>{pesanan.tgl_transaksi} <br/> {pesanan.tgl_habis}</td>}
                    <td>
                      {
                      pesanan.produk_pert === 1 ? <div>
                        {pesanan.p1} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}
                        </div> :
                      pesanan.produk_pert === 4 ? <div>
                        {pesanan.p1} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/>
                        {pesanan.p2} {pesanan.p2_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/>
                        {pesanan.p3} {pesanan.p3_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/>
                        {pesanan.p4} {pesanan.p4_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}
                        </div> :
                      pesanan.produk_pert === 8 ? <div>
                        {pesanan.p1} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/> 
                        {pesanan.p2} {pesanan.p2_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/> 
                        {pesanan.p3} {pesanan.p3_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/> 
                        {pesanan.p4} {pesanan.p4_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/> 
                        {pesanan.p5} {pesanan.p5_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/> 
                        {pesanan.p6} {pesanan.p6_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/> 
                        {pesanan.p7} {pesanan.p7_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}<br/> 
                        {pesanan.p8} {pesanan.p8_c ? <FontAwesomeIcon icon={faCheckDouble}/> : null}
                        </div>
                      : null
                      }
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