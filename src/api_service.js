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

    static updatePelatih(token) {
        return fetch('http://127.0.0.1:8000/api/pelatih/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static updateSiswa(token) {
        return fetch('http://127.0.0.1:8000/api/siswa/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static updatePesanan(token) {
        return fetch('http://127.0.0.1:8000/api/pesanan/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${TOKEN}`
            },
            })
    };

    static loginUser(body) {
        return fetch(`http://127.0.0.1:8000/auth/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
          }).then( resp => resp.json())
    };
   
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
