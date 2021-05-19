const TOKEN = 'fb5ec5875f75a4cb52f2a523a2f3be5c4451421d'

export default class API {
    static updateBerita(token) {
        return fetch('http://127.0.0.1:8000/api/berita/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static daftarUser(token) {
        return fetch('http://127.0.0.1:8000/api/users/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static daftarPelatih(token) {
        return fetch('http://127.0.0.1:8000/api/pelatih/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static daftarSiswa(token) {
        return fetch('http://127.0.0.1:8000/api/siswa/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static daftarPesanan(token) {
        return fetch('http://127.0.0.1:8000/api/pesanan/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static tambahPelatih(body) {
        return fetch(`http://127.0.0.1:8000/api/pelatih/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusPelatih(id_pelatih) {
        return fetch(`http://127.0.0.1:8000/api/pelatih/${id_pelatih}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            }
          })
    };

    static tambahSiswa(body) {
        return fetch(`http://127.0.0.1:8000/api/siswa/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    static hapusSiswa(id_siswa) {
        return fetch(`http://127.0.0.1:8000/api/siswa/${id_siswa}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            }
          })
    };

    static ubahSiswa(id_siswa, body) {
        return fetch(`http://127.0.0.1:8000/api/siswa/${id_siswa}/`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${TOKEN}`
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };

    // static loginUser(body) {
    //     return fetch(`http://127.0.0.1:8000/auth/`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(body)
    //       }).then( resp => resp.json())
    // };
   
    // static registerUser(body) {
    //     return fetch(`http://127.0.0.1:8000/api/users/`, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(body)
    //       }).then( resp => resp.json())
    // };
}
