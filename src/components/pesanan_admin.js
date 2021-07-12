import React, {useState, useEffect} from 'react';
import { Row, Col, Form, Table, Button, Modal } from 'react-bootstrap';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlus, faCheck, faCalendarMinus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
import NumberFormat from 'react-number-format';
import API from '../api_service';
import moment from 'moment';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import paginationFactory from 'react-bootstrap-table2-paginator';

function PesananAdmin(props) {
  
  /// STATE
  const [modal, setModal] = useState(false);
  const [modalHapus, setModalHapus] = useState(false);
  const [modalUbah, setModalUbah] = useState(false);
  const [pilihPesananDihapus, setPilihPesananDihapus] = useState({});
  const [pilihPesananDiubah, setPilihPesananDiubah] = useState({});

  const [munculTanggal, setMunculTanggal] = useState(true);
  const [munculArsip, setMunculArsip] = useState(false);
  
  const [siswa, setSiswa] = useState('');
  const [pelatih, setPelatih] = useState('');
  const [produk, setProduk] = useState('');
  const [diskon, setDiskon] = useState('0');
  const [tglBayar, setTglBayar] = useState('');
  const [tglHabis, setTglHabis] = useState('');
  const [arsip, setArsip] = useState(false);
  const [p1, setP1] = useState(null);
  const [p1c, setP1c] = useState(false);
  const [p2, setP2] = useState(null);
  const [p2c, setP2c] = useState(false);
  const [p3, setP3] = useState(null);
  const [p3c, setP3c] = useState(false);
  const [p4, setP4] = useState(null);
  const [p4c, setP4c] = useState(false);
  const [p5, setP5] = useState(null);
  const [p5c, setP5c] = useState(false);
  const [p6, setP6] = useState(null);
  const [p6c, setP6c] = useState(false);
  const [p7, setP7] = useState(null);
  const [p7c, setP7c] = useState(false);
  const [p8, setP8] = useState(null);
  const [p8c, setP8c] = useState(false);

  /// EVENT HANDLER
  const handlerMuncul = () => {
    setModal(true)
    setSiswa('');
    setPelatih('');
    setProduk('');
    setDiskon('0');
    setTglBayar('');
    setTglHabis('');
  };
  const handlerTutup = () => setModal(false);

  const klikHapusPesanan = pesanan => {
    setPilihPesananDihapus(pesanan);
    setModalHapus(true);
  };

  const klikUbahPesanan = pesanan => {
    setPilihPesananDiubah(pesanan);
    setModalUbah(true);
  };

// API CALLS
  const klikTambah = () => {
    API.tambahPesanan({
      siswa: siswa,
      pelatih: pelatih,
      produk: produk,
      diskon: diskon,
      tgl_transaksi: tglBayar,
      tgl_habis: tglHabis
    })
    .then(resp => props.pesananDitambahkan(resp))
    .then(setModal(false))
    .catch(error => console.log(error))
  };

  const klikHapus = pesanan => {
    API.hapusPesanan(pesanan.id)
    .then( () => props.pesananDihapus(pesanan))
    .then(setModalHapus(false))
    .catch( error => console.log(error));
  };

  const klikUbah = pesanan => {
    API.ubahPesanan(pesanan.id, {
      siswa: siswa,
      pelatih: pelatih,
      produk: produk,
      diskon: diskon,
      tgl_transaksi: tglBayar,
      tgl_habis: tglHabis,
      arsip: arsip,
      p1: p1,
      p1_c: p1c,
      p2: p2,
      p2_c: p2c,
      p3: p3,
      p3_c: p3c,
      p4: p4,
      p4_c: p4c,
      p5: p5,
      p5_c: p5c,
      p6: p6,
      p6_c: p6c,
      p7: p7,
      p7_c: p7c,
      p8: p8,
      p8_c: p8c,
    })
    .then(resp => props.pesananDiubah(resp))
    .then(setModalUbah(false))
    .catch(error => console.log(error));
  };

  useEffect( () => {
    if(pilihPesananDiubah.siswa) {
      setSiswa(pilihPesananDiubah.siswa);
    } else {
      setSiswa('');
    };
    if(pilihPesananDiubah.pelatih) {
      setPelatih(pilihPesananDiubah.pelatih);
    } else {
      setPelatih('');
    };
    if(pilihPesananDiubah.produk) {
      setProduk(pilihPesananDiubah.produk);
    } else {
      setProduk('');
    };
    setDiskon(pilihPesananDiubah.diskon);
    setTglBayar(pilihPesananDiubah.tgl_transaksi);
    setTglHabis(pilihPesananDiubah.tgl_habis);
    setArsip(pilihPesananDiubah.arsip);
    setP1(pilihPesananDiubah.p1);
    setP1c(pilihPesananDiubah.p1_c);
    setP2(pilihPesananDiubah.p2);
    setP2c(pilihPesananDiubah.p2_c);
    setP3(pilihPesananDiubah.p3);
    setP3c(pilihPesananDiubah.p3_c);
    setP4(pilihPesananDiubah.p4);
    setP4c(pilihPesananDiubah.p4_c);
    setP5(pilihPesananDiubah.p5);
    setP5c(pilihPesananDiubah.p5_c);
    setP6(pilihPesananDiubah.p6);
    setP6c(pilihPesananDiubah.p6_c);
    setP7(pilihPesananDiubah.p7);
    setP7c(pilihPesananDiubah.p7_c);
    setP8(pilihPesananDiubah.p8);
    setP8c(pilihPesananDiubah.p8_c);
  }, [pilihPesananDiubah]);

// TABLE CONFIGURATION

  // PILIHAN
  const opsiArsip = {
    false: 'AKTIF',
    true: 'PASIF',
  }

  const opsiHabis = {
    false: 'AKTIF',
    true: 'HABIS',
  }

  const handlerMunculTanggal = () => {
    if(munculTanggal === false){
      return setMunculTanggal(true)
    } else {
      return setMunculTanggal(false)
    }
  }

  const handlerMunculArsip = () => {
    if(munculArsip === false){
      return setMunculArsip(true)
    } else {
      return setMunculArsip(false)
    }
  }

  // DATA FORMAT
  const formatStatus = cell => {
    if(cell === true){
      return <strong className="text-danger">PASIF</strong>
    } else {
      return <strong className="text-success">AKTIF</strong>
    }
  }

  const formatHabis = cell => {
    if(cell === true){
      return <strong className="text-danger">HABIS</strong>
    } else {
      return <strong className="text-success">AKTIF</strong>
    }
  }

  const formatHarga = cell => {
    return (<div>
      <NumberFormat
        thousandSeparator={'.'}
        decimalSeparator={','}
        prefix={'Rp. '}
        displayType={'text'} value={cell.x}
      />
      {cell.y ? <sup className='text-info'><em> disc. {cell.y * 100}%</em></sup> : null} 
    </div>)
  }

  const formatTanggal = cell => {
      return (
        <div>
          {moment(cell.x).format('LL')}
          <br/>
          {cell.z ? <strong className="text-danger">{moment(cell.y).format('LL')}</strong> : <span>{moment(cell.y).format('LL')}</span>}
        </div>
      )
  }

  const formatPelatih = cell => {
    if(cell){
      return 'Coach ' + cell
    } else {
      return 'deleted account'
    }
  }

  const formatSiswa = cell => {
    if(cell){
      return cell
    } else {
      return 'deleted account'
    }
  }

  const formatTanggalLatihan = pesanan => {
    switch(pesanan.produk_pert) {
      case 1:
        return (
        <div>
          {pesanan.p1 ? moment(pesanan.p1).format('LL') : '(---)'} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheck}/> : null}
        </div>);
      case 4:
        return (
        <div>
          {pesanan.p1 ? moment(pesanan.p1).format('LL') : '(---)'} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/>
          {pesanan.p2 ? moment(pesanan.p2).format('LL') : '(---)'} {pesanan.p2_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/>
          {pesanan.p3 ? moment(pesanan.p3).format('LL') : '(---)'} {pesanan.p3_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/>
          {pesanan.p4 ? moment(pesanan.p4).format('LL') : '(---)'} {pesanan.p4_c ? <FontAwesomeIcon icon={faCheck}/> : null}
        </div>);
      case 8:
        return (
        <div>
          {pesanan.p1 ? moment(pesanan.p1).format('LL') : '(---)'} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
          {pesanan.p2 ? moment(pesanan.p2).format('LL') : '(---)'} {pesanan.p2_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
          {pesanan.p3 ? moment(pesanan.p3).format('LL') : '(---)'} {pesanan.p3_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
          {pesanan.p4 ? moment(pesanan.p4).format('LL') : '(---)'} {pesanan.p4_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
          {pesanan.p5 ? moment(pesanan.p5).format('LL') : '(---)'} {pesanan.p5_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
          {pesanan.p6 ? moment(pesanan.p6).format('LL') : '(---)'} {pesanan.p6_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
          {pesanan.p7 ? moment(pesanan.p7).format('LL') : '(---)'} {pesanan.p7_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
          {pesanan.p8 ? moment(pesanan.p8).format('LL') : '(---)'} {pesanan.p8_c ? <FontAwesomeIcon icon={faCheck}/> : null}
        </div>);
      default:
        break;
    } 
  }

  // TABLE HEADER
  const columns = [
    {
      dataField: 'kode',
      text: 'Kode Pesanan',
    },
    {
      dataField: 'arsip',
      text: 'Status Latihan',
      sort: true,
      formatter: formatStatus,
      filter: selectFilter({
        options: opsiArsip,
        defaultValue: 'false'
      }),
      hidden: munculArsip
    },
    {
      dataField: 'status_habis',
      text: 'Status Habis',
      sort: true,
      formatter: formatHabis,
      filter: selectFilter({
        options: opsiHabis,
      }),
      hidden: munculArsip
    },
    {
      dataField: 'nama_pelatih',
      text: 'Nama Pelatih',
      sort: true,
      filter: textFilter({placeholder:'Semua'}),
      formatter: formatPelatih
    },
    {
      dataField: 'nama_siswa',
      text: 'Nama Siswa',
      sort: true,
      filter: textFilter({placeholder:'Semua'}),
      formatter: formatSiswa
    },
    {
      dataField: 'nama_produk',
      text: 'Produk',
      sort: true,
      filter: textFilter({placeholder:'Semua'})
    },
    {
      dataField: 'nilai_transaksi',
      text: 'Nilai Transaksi',
      formatter: formatHarga
    },
    {
      dataField: 'masa_latihan',
      text: 'Masa Latihan',
      formatter: formatTanggal
    },
    {
      dataField: 'tanggal_latihan',
      text: 'Tanggal Latihan',
      formatter: formatTanggalLatihan,
      hidden: munculTanggal
    },
    {
      dataField: 'aksi',
      text: 'Aksi',
    },
  ]

  // TABLE DATA
  const daftarPesanan = props.pesanan.map(pesanan => {
    const container = {}
    container.kode = pesanan.__str__
    container.arsip = pesanan.arsip
    container.status_habis = pesanan.status_habis
    container.nama_pelatih = pesanan.nama_pelatih
    container.nama_siswa = pesanan.nama_siswa
    container.nama_produk = pesanan.nama_produk
    container.nilai_transaksi = {x:pesanan.nilai_transaksi, y:pesanan.diskon}
    container.masa_latihan = {x:pesanan.tgl_transaksi, y:pesanan.tgl_habis, z:pesanan.status_habis}
    container.tanggal_latihan = pesanan
    container.aksi = <div>
      <FontAwesomeIcon
        icon={faEdit}
        onClick={() => klikUbahPesanan(pesanan)}
        title='Ubah Pesanan'
      /> 
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => klikHapusPesanan(pesanan)}
        title='Hapus Pesanan'
      />
    </div>

    return container
  })

// LOCAL DATE FORMAT
  moment.locale('id', {
    months : [
      "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli",
      "Agustus", "September", "Oktober", "November", "Desember"
    ],
    longDateFormat : {
      LL: "Do MMMM YYYY",
    }
  });

  return (
    <div>
      <Row className="mb-2">
        <Col xs={2} className="mt-2">
          <Button variant="success" onClick={handlerMuncul}>
            <FontAwesomeIcon icon={faPlus}/> Tambah Pesanan
          </Button>
        </Col>

        <Col>
        </Col>
        
        <Col xs={2}>
          <Form.Check 
            type="switch"
            id="arsip-switch"
            onChange={handlerMunculArsip}
            label="Status"
            checked={munculArsip ? false : true}
          />
          <Form.Check 
            type="switch"
            id="tanggal-latihan-switch"
            onChange={handlerMunculTanggal}
            label="Tanggal Latihan"
            checked={munculTanggal ? false : true}
          />
        </Col>
      </Row>
      
      <BootstrapTable
        bootstrap4
        striped
        hover
        condensed
        keyField='num'
        data={ daftarPesanan }
        columns={ columns }
        filter={ filterFactory() }
        pagination={ paginationFactory() }
        filterPosition='bottom'
        classes='center-text small-text'
      />
      {/* <Container>
        
        <Row className='antarmuka-admin-card'>
          <Button variant="success" onClick={handlerMuncul}>
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
                <th>Produk</th>
                <th>Nilai Transaksi</th>
                <th>Masa Berlaku</th>
                <th>Nama Pelatih</th>
                <th>Tanggal Latihan</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {props.pesanan && props.pesanan.map( (pesanan, index) => {
                return (
                  <tr key={pesanan.id}>
                    <td className='align-middle'>{index+1}</td>
                    <td className='align-middle'>{pesanan.__str__}</td>
                    <td className='align-middle'>{pesanan.arsip ?  <strong className="text-danger">PASIF</strong> : <strong className="text-success">AKTIF</strong>}</td>
                    <td className='align-middle'>{pesanan.nama_siswa}</td>
                    <td className='align-middle'>{pesanan.nama_produk}</td>
                    <td className='align-middle'>
                      <NumberFormat
                        thousandSeparator={'.'}
                        decimalSeparator={','}
                        prefix={'Rp '}
                        displayType={'text'} value={pesanan.nilai_transaksi}
                      />
                      {pesanan.diskon ? <sup><em> disc. {pesanan.diskon * 100}%</em></sup> : null} 
                    </td>
                    {pesanan.status_habis ?
                      <td className='red align-middle'><strong>HABIS! <br/> {moment(pesanan.tgl_habis).format('LL')}</strong></td> :
                      <td className='align-middle'>{moment(pesanan.tgl_transaksi).format('LL')} <br/> {moment(pesanan.tgl_habis).format('LL')}</td>}

                    {pesanan.nama_pelatih ?
                      <td className='align-middle'>Coach {pesanan.nama_pelatih}</td> : <td></td>}
                    

                    <td className='align-middle'>
                      {
                      pesanan.produk_pert === 1 ? <div>
                        {pesanan.p1 ? moment(pesanan.p1).format('LL') : '(---)'} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheck}/> : null}
                        </div> :
                      pesanan.produk_pert === 4 ? <div>
                        {pesanan.p1 ? moment(pesanan.p1).format('LL') : '(---)'} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/>
                        {pesanan.p2 ? moment(pesanan.p2).format('LL') : '(---)'} {pesanan.p2_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/>
                        {pesanan.p3 ? moment(pesanan.p3).format('LL') : '(---)'} {pesanan.p3_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/>
                        {pesanan.p4 ? moment(pesanan.p4).format('LL') : '(---)'} {pesanan.p4_c ? <FontAwesomeIcon icon={faCheck}/> : null}
                        </div> :
                      pesanan.produk_pert === 8 ? <div>
                        {pesanan.p1 ? moment(pesanan.p1).format('LL') : '(---)'} {pesanan.p1_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
                        {pesanan.p2 ? moment(pesanan.p2).format('LL') : '(---)'} {pesanan.p2_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
                        {pesanan.p3 ? moment(pesanan.p3).format('LL') : '(---)'} {pesanan.p3_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
                        {pesanan.p4 ? moment(pesanan.p4).format('LL') : '(---)'} {pesanan.p4_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
                        {pesanan.p5 ? moment(pesanan.p5).format('LL') : '(---)'} {pesanan.p5_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
                        {pesanan.p6 ? moment(pesanan.p6).format('LL') : '(---)'} {pesanan.p6_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
                        {pesanan.p7 ? moment(pesanan.p7).format('LL') : '(---)'} {pesanan.p7_c ? <FontAwesomeIcon icon={faCheck}/> : null}<br/> 
                        {pesanan.p8 ? moment(pesanan.p8).format('LL') : '(---)'} {pesanan.p8_c ? <FontAwesomeIcon icon={faCheck}/> : null}
                        </div>
                      : null
                      }
                    </td>
                    <td className='align-middle'>
                      <FontAwesomeIcon
                        icon={faEdit}
                        onClick={() => klikUbahPesanan(pesanan)}
                        title='Ubah Pesanan'
                      /> 
                      <FontAwesomeIcon
                        icon={faTrash}
                        onClick={() => klikHapusPesanan(pesanan)}
                        title='Hapus Pesanan'
                      />
                    </td>
                  </tr>   
                )
              })}
            </tbody>
          </Table>
        </Row>
      </Container> */}

      <Modal show={modal} onHide={handlerTutup}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Pesanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <Form>
            <Form.Row>
              <Col>
                <Form.Group controlId="siswa">
                  <Form.Label>Nama Siswa</Form.Label>
                  <Form.Control as="select" value={siswa} onChange={evt => setSiswa(evt.target.value)}>
                    <option value=''>-----</option>
                    {props.siswa && props.siswa.map( x => {
                      return (
                        <option value={x.id} key={x.id}>{x.nama_lengkap}</option>  
                      )
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="pelatih">
                  <Form.Label>Nama Pelatih</Form.Label>
                  <Form.Control as="select" value={pelatih} onChange={evt => setPelatih(evt.target.value)}>
                    <option value=''>-----</option>
                    {props.pelatih && props.pelatih.map( x => {
                      return (
                        <option value={x.id} key={x.id}>{x.nama_panggilan}</option>  
                      )
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>
            
            <Form.Row>
              <Col>
                <Form.Group controlId="produk">
                  <Form.Label>Nama Produk</Form.Label>
                  <Form.Control as="select" value={produk} onChange={evt => setProduk(evt.target.value)}>
                    <option value=''>-----</option>
                    {props.produk && props.produk.map( x => {
                      return (
                        <option value={x.id} key={x.id}>{x.nama_produk}</option>  
                      )
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="diskon">
                  <Form.Label>Diskon</Form.Label>
                  <Form.Control type="number" step='0.01' value={diskon} onChange={evt => setDiskon(evt.target.value)}/>
                </Form.Group>
              </Col>
            </Form.Row>
            
            <Form.Row>
              <Col>
                <Form.Group controlId="tglBayar">
                  <Form.Label>Tanggal Bayar</Form.Label>
                  <Form.Control type='date' value={tglBayar} onChange={evt => setTglBayar(evt.target.value)}/>
                </Form.Group>
              </Col>

              <Col>
                <Form.Group controlId="tglHabis">
                  <Form.Label>Tanggal Habis</Form.Label>
                  <Form.Control type='date' value={tglHabis} onChange={evt => setTglHabis(evt.target.value)}/>
                </Form.Group>
              </Col>
            </Form.Row>

          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlerTutup}>
            Batal
          </Button>
          <Button variant="success" onClick={klikTambah}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalHapus} onHide={() => setModalHapus(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Hapus Pesanan</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Yakin hapus <strong>{pilihPesananDihapus.__str__}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalHapus(false)}>
            Batal
          </Button>
          <Button variant="danger" onClick={() => klikHapus(pilihPesananDihapus)}>
            Hapus
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalUbah} onHide={() => {setPilihPesananDiubah({}); setModalUbah(false)}} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Ubah Data: <strong>{pilihPesananDiubah.__str__}</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col xs={6}>
                <Form.Row>
                  <Col>
                    <Form.Group controlId="siswa">
                      <Form.Label>Nama Siswa</Form.Label>
                      <Form.Control as="select" value={siswa} onChange={evt => setSiswa(evt.target.value)}>
                        <option value=''>-----</option>
                        {props.siswa && props.siswa.map( x => {
                          return (
                            <option value={x.id} key={x.id}>{x.nama_lengkap}</option>  
                          )
                        })}
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group controlId="pelatih">
                      <Form.Label>Nama Pelatih</Form.Label>
                      <Form.Control as="select" value={pelatih} onChange={evt => setPelatih(evt.target.value)}>
                        <option value=''>-----</option>
                        {props.pelatih && props.pelatih.map( x => {
                          return (
                            <option value={x.id} key={x.id}>{x.nama_panggilan}</option>  
                          )
                        })}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Row>
                
                <Form.Row>
                  <Col>
                    <Form.Group controlId="produk">
                      <Form.Label>Nama Produk</Form.Label>
                      <Form.Control as="select" value={produk} onChange={evt => setProduk(evt.target.value)}>
                        <option value=''>-----</option>
                        {props.produk && props.produk.map( x => {
                          return (
                            <option value={x.id} key={x.id}>{x.nama_produk}</option>  
                          )
                        })}
                      </Form.Control>
                    </Form.Group>
                  </Col>

                  <Col>
                    <Form.Group controlId="diskon">
                      <Form.Label>Diskon</Form.Label>
                      <Form.Control type="number" step='0.01' value={diskon} onChange={evt => setDiskon(evt.target.value)}/>
                    </Form.Group>
                  </Col>
                </Form.Row>
                
                <Form.Row>
                  <Col xs={6}>
                    <Form.Group controlId="tglBayar">
                      <Form.Label>Tanggal Bayar</Form.Label>
                      <Form.Control type='date' value={tglBayar} onChange={evt => setTglBayar(evt.target.value)}/>
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group controlId="tglHabis">
                      <Form.Label>Tanggal Habis</Form.Label>
                      <Form.Control type='date' value={tglHabis} onChange={evt => setTglHabis(evt.target.value)}/>
                    </Form.Group>
                  </Col>
                </Form.Row>

                <hr/>

                <Form.Group>
                  <Form.Label>Status Latihan</Form.Label>
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    onChange={() => {
                      if(arsip){
                        setArsip(false)
                      } else {
                        setArsip(true)
                      }
                      }}
                    label={arsip ? <strong className="text-danger">PASIF</strong> : <strong className="text-success">AKTIF</strong>}
                    checked={arsip ? false : true}
                  />
                </Form.Group>

              </Col>
              { pilihPesananDiubah.produk_pert === 1 ?
                <Col xs={{ span: 5, offset: 1}}>
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th className='text-center'>Tanggal</th>
                        <th className='text-center'>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Form.Group controlId="p1">
                            <Form.Control type='date' value={p1 ? p1 : ""} onChange={evt => setP1(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td className='text-center'>
                          <Form.Check
                            type="checkbox"
                            name="p1"
                            value={p1c}
                            checked={p1c}
                            onChange={() => {
                              if(p1c){
                                return setP1c(false)
                              } else {
                                return setP1c(true)
                              }}}
                          />
                          <FontAwesomeIcon
                            icon={faCalendarMinus}
                            onClick={() => setP1(null)}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col> 

                : pilihPesananDiubah.produk_pert === 4 ?
                
                <Col xs={{ span: 5, offset: 1}}>
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th className='text-center'>Tanggal</th>
                        <th className='text-center'>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Form.Group controlId="p1">
                            <Form.Control type='date' value={p1 ? p1 : ""} onChange={evt => setP1(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP1(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p1"
                                value={p1c}
                                checked={p1c}
                                onChange={() => {
                                  if(p1c){
                                    return setP1c(false)
                                  } else {
                                    return setP1c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <Form.Group controlId="p2">
                            <Form.Control type='date' value={p2 ? p2 : ""} onChange={evt => setP2(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP2(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p2"
                                value={p2c}
                                checked={p2c}
                                onChange={() => {
                                  if(p2c){
                                    return setP2c(false)
                                  } else {
                                    return setP2c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <Form.Group controlId="p3">
                            <Form.Control type='date' value={p3 ? p3 : ""} onChange={evt => setP3(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP3(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p3"
                                value={p3c}
                                checked={p3c}
                                onChange={() => {
                                  if(p3c){
                                    return setP3c(false)
                                  } else {
                                    return setP3c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <Form.Group controlId="p4">
                            <Form.Control type='date' value={p4 ? p4 : ""} onChange={evt => setP4(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP4(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p4"
                                value={p4c}
                                checked={p4c}
                                onChange={() => {
                                  if(p4c){
                                    return setP4c(false)
                                  } else {
                                    return setP4c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>

                : pilihPesananDiubah.produk_pert === 8 ?

                <Col xs={{ span: 5, offset: 1}}>
                  <Table hover size="sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th className='text-center'>Tanggal</th>
                        <th className='text-center'>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <Form.Group controlId="p1">
                            <Form.Control type='date' value={p1 ? p1 : ""} onChange={evt => setP1(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP1(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p1"
                                value={p1c}
                                checked={p1c}
                                onChange={() => {
                                  if(p1c){
                                    return setP1c(false)
                                  } else {
                                    return setP1c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <Form.Group controlId="p2">
                            <Form.Control type='date' value={p2 ? p2 : ""} onChange={evt => setP2(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP2(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p2"
                                value={p2c}
                                checked={p2c}
                                onChange={() => {
                                  if(p2c){
                                    return setP2c(false)
                                  } else {
                                    return setP2c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <Form.Group controlId="p3">
                            <Form.Control type='date' value={p3 ? p3 : ""} onChange={evt => setP3(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP3(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p3"
                                value={p3c}
                                checked={p3c}
                                onChange={() => {
                                  if(p3c){
                                    return setP3c(false)
                                  } else {
                                    return setP3c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <Form.Group controlId="p4">
                            <Form.Control type='date' value={p4 ? p4 : ""} onChange={evt => setP4(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP4(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p4"
                                value={p4c}
                                checked={p4c}
                                onChange={() => {
                                  if(p4c){
                                    return setP4c(false)
                                  } else {
                                    return setP4c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <Form.Group controlId="p5">
                            <Form.Control type='date' value={p5 ? p5 : ""} onChange={evt => setP5(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP5(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p5"
                                value={p5c}
                                checked={p5c}
                                onChange={() => {
                                  if(p5c){
                                    return setP5c(false)
                                  } else {
                                    return setP5c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <td>
                          <Form.Group controlId="p6">
                            <Form.Control type='date' value={p6 ? p6 : ""} onChange={evt => setP6(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP6(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p6"
                                value={p6c}
                                checked={p6c}
                                onChange={() => {
                                  if(p6c){
                                    return setP6c(false)
                                  } else {
                                    return setP6c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <td>
                          <Form.Group controlId="p7">
                            <Form.Control type='date' value={p7 ? p7 : ""} onChange={evt => setP7(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP7(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p7"
                                value={p7c}
                                checked={p7c}
                                onChange={() => {
                                  if(p7c){
                                    return setP7c(false)
                                  } else {
                                    return setP7c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <td>
                          <Form.Group controlId="p8">
                            <Form.Control type='date' value={p8 ? p8 : ""} onChange={evt => setP8(evt.target.value)}/>
                          </Form.Group>  
                        </td>
                        <td>
                          <Row>
                            <Col className='text-center'>
                              <FontAwesomeIcon
                                icon={faCalendarMinus}
                                onClick={() => setP8(null)}
                              />
                            </Col>
                            <Col className='text-center'>
                              <Form.Check
                                type="checkbox"
                                name="p8"
                                value={p8c}
                                checked={p8c}
                                onChange={() => {
                                  if(p8c){
                                    return setP8c(false)
                                  } else {
                                    return setP8c(true)
                                  }}}
                              />
                            </Col>
                          </Row>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                
                : null } 
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {setPilihPesananDiubah({}); setModalUbah(false)}}>
            Batal
          </Button>
          <Button variant="warning" onClick={() => klikUbah(pilihPesananDiubah)}>
            Ubah
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  );
}

export default PesananAdmin;