// export default class API {
//     static updateMovie(mov_id, body, token) {
//         return fetch(`http://127.0.0.1:8000/api/movies/${mov_id}/`, {
//             method: 'PUT',
//             headers: {
//               'Content-Type': 'application/json',
//               'Authorization': `Token ${token}`
//             },
//             body: JSON.stringify(body)
//           }).then( resp => resp.json())
//     };

// }