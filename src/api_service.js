// const TOKEN = 'fb5ec5875f75a4cb52f2a523a2f3be5c4451421d'

export default class API {

    // BERITA
    static updateBerita(token) {
        // return fetch('https://127.0.0.1:8000/api/berita/', {
        return fetch('https://dj-maestro.herokuapp.com/api/berita/', {
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
        return fetch('https://dj-maestro.herokuapp.com/api/users/', {
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
        return fetch('https://dj-maestro.herokuapp.com/api/produk/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    static tambahProduk(body, token) {
        // return fetch(`https://127.0.0.1:8000/api/produk/`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/produk/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusProduk(id_produk, token) {
        // return fetch(`https://127.0.0.1:8000/api/produk/${id_produk}`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/produk/${id_produk}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            }
        })
    };

    static ubahProduk(id_produk, body, token) {
        // return fetch(`https://127.0.0.1:8000/api/produk/${id_produk}/`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/produk/${id_produk}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // PELATIH
    static daftarPelatih(token) {
        // return fetch('https://127.0.0.1:8000/api/pelatih/', {
        return fetch('https://dj-maestro.herokuapp.com/api/pelatih/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    static tambahPelatih(body, token) {
        // return fetch(`https://127.0.0.1:8000/api/pelatih/`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/pelatih/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusPelatih(id_pelatih, token) {
        // return fetch(`https://127.0.0.1:8000/api/pelatih/${id_pelatih}`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/pelatih/${id_pelatih}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            }
        })
    };

    static ubahPelatih(id_pelatih, body, token) {
        // return fetch(`https://127.0.0.1:8000/api/pelatih/${id_pelatih}/`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/pelatih/${id_pelatih}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // SISWA
    static daftarSiswa(token) {
        // return fetch('https://127.0.0.1:8000/api/siswa/', {
        return fetch('https://dj-maestro.herokuapp.com/api/siswa/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    static tambahSiswa(body, token) {
        // return fetch(`https://127.0.0.1:8000/api/siswa/`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/siswa/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusSiswa(id_siswa, token) {
        // return fetch(`https://127.0.0.1:8000/api/siswa/${id_siswa}`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/siswa/${id_siswa}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            }
          })
    };

    static ubahSiswa(id_siswa, body, token) {
        // return fetch(`https://127.0.0.1:8000/api/siswa/${id_siswa}/`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/siswa/${id_siswa}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // PESANAN
    static daftarPesanan(token) {
        // return fetch('https://127.0.0.1:8000/api/pesanan/', {
        return fetch('https://dj-maestro.herokuapp.com/api/pesanan/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            },
            })
    };

    static tambahPesanan(body, token) {
        // return fetch(`https://127.0.0.1:8000/api/pesanan/`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/pesanan/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusPesanan(id_pesanan, token) {
        // return fetch(`https://127.0.0.1:8000/api/pesanan/${id_pesanan}`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/pesanan/${id_pesanan}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
            }
        })
    };

    static ubahPesanan(id_pesanan, body, token) {
        // return fetch(`https://127.0.0.1:8000/api/pesanan/${id_pesanan}/`, {
        return fetch(`https://dj-maestro.herokuapp.com/api/pesanan/${id_pesanan}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static loginUser(body) {
        // return fetch(`https://127.0.0.1:8000/auth/`, {
        return fetch(`https://dj-maestro.herokuapp.com/auth/`, {
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
