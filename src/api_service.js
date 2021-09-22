// const TOKEN = 'fb5ec5875f75a4cb52f2a523a2f3be5c4451421d'
// const devPath = 'http://127.0.0.1:8000/api';
const buildPath = 'https://dj-maestro.herokuapp.com/api';
const usePath = buildPath

export default class API {

    // BERITA
    static updateBerita(token) {
        // return fetch('https://127.0.0.1:8000/api/berita/', {
        // return fetch('https://dj-maestro.herokuapp.com/api/berita/', {
        return fetch(`${usePath}/berita/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    // USER
    static daftarUser(token) {
        // return fetch('https://127.0.0.1:8000/api/users/', {
        // return fetch('https://dj-maestro.herokuapp.com/api/users/', {
        return fetch(`${usePath}/users/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    // PRODUK
    static daftarProduk(token) {
        // return fetch('https://127.0.0.1:8000/api/produk/', {
        // return fetch('https://dj-maestro.herokuapp.com/api/produk/', {
        return fetch(`${usePath}/produk/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    // PELATIH
    static daftarPelatih(token) {
        // return fetch('https://127.0.0.1:8000/api/pelatih/', {
        // return fetch('https://dj-maestro.herokuapp.com/api/pelatih/', {
        return fetch(`${usePath}/pelatih/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    // SISWA
    static daftarSiswa(token) {
        // return fetch('https://127.0.0.1:8000/api/siswa/', {
        // return fetch('https://dj-maestro.herokuapp.com/api/siswa/', {
        return fetch(`${usePath}/siswa/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    // PESANAN
    static daftarPesanan(token) {
        // return fetch('https://127.0.0.1:8000/api/pesanan/', {
        // return fetch('https://dj-maestro.herokuapp.com/api/pesanan/', {
          return fetch(`${usePath}/pesanan/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    static ubahPesanan(id_pesanan, body, token) {
        // return fetch(`https://127.0.0.1:8000/api/pesanan/${id_pesanan}/`, {
        // return fetch(`https://dj-maestro.herokuapp.com/api/pesanan/${id_pesanan}/`, {
        return fetch(`${usePath}/pesanan/${id_pesanan}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static loginUser(body) {
        return fetch(`https://dj-maestro.herokuapp.com/auth/`, {
        // return fetch(`https://dj-maestro.herokuapp.com/auth/`,
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };
   
    // static registerUser(body) {
    //     return fetch(`httpss://127.0.0.1:8000/api/users/`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(body)
    //       }).then( resp => resp.json())
    // };
}
