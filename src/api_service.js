const devPath = 'http://127.0.0.1:8000/api';
// const buildPath = 'https://dj-maestro.herokuapp.com/api';
const usePath = devPath

export default class API {

    // BERITA
    static updateBerita(token) {
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
        return fetch(`${usePath}/siswa/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    static tambahSiswa(body, token) {
        return fetch(`${usePath}/siswa/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // PESANAN
    static daftarPesanan(token) {
          return fetch(`${usePath}/pesanan/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    static ubahPesanan(id_pesanan, body, token) {
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
        return fetch(`http://127.0.0.1:8000/auth/`, {
        // return fetch(`https://dj-maestro.herokuapp.com/auth/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };
   
    static registerUser(body) {
        return fetch(`http://127.0.0.1:8000/api/users/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };
}
