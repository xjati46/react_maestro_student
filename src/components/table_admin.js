import React from 'react'
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css'
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css'
import BootstrapTable from 'react-bootstrap-table-next'
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter'
import paginationFactory from 'react-bootstrap-table2-paginator'

export default function TableAdmin(props) {

  // TABLE HEADER
  const columns = [
    {
      dataField: 'no',
      text: 'No.',
      // sort: true
    },
    {
      dataField: 'nama_lengkap',
      text: 'Nama Lengkap',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'nama_panggilan',
      text: 'Nama Panggilan',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'jenis_kelamin',
      text: 'Jenis Kelamin',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'usia',
      text: 'Usia',
      sort: true,
      filter: textFilter()
    },
    {
      dataField: 'aksi',
      text: 'Aksi',
    },
  ]

  // TABLE DATA
  const daftarSiswa = props.siswa.map((siswa, index) => {
    const container = {}

    container.no = index + 1
    container.nama_lengkap = siswa.nama_lengkap
    container.nama_panggilan = siswa.nama_panggilan
    container.jenis_kelamin = siswa.jenis_kelamin
    container.usia = siswa.usia
    container.aksi = <p>cek</p>

    return container
  })

  return (
    <div>
      <BootstrapTable
        bootstrap4
        keyField='no'
        data={ daftarSiswa }
        columns={ columns }
        filter={ filterFactory() }
        pagination={ paginationFactory() }
        striped
        hover
        condensed
      />
    </div>
  )
}