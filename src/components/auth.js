import React, { useState, useEffect, useContext, Alert } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import logo from '../mswim.png'
import API from '../api_service'
import { useCookies } from 'react-cookie'
import { ReducerContext } from '../index'
import { StateContext } from '../index'
import '../App.css'

function Auth() {

  const dispatch = useContext(ReducerContext)
  const state = useContext(StateContext)

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ token, setToken ] = useCookies(['msms-cookie'])
  const [ regModal, setRegModal ] = useState(false)

  const loginClicked = e => {
    e.preventDefault()
    API.loginUser({username, password})
    .then( resp => {
      dispatch({type: 'setUserId', payload: resp.user_id})
      dispatch({type: 'setUserName', payload: resp.user_name})
      localStorage.setItem('userId', JSON.stringify(resp.user_id))
      localStorage.setItem('userName', JSON.stringify(resp.user_name))
      setToken('msms-cookie', resp.token)
    })
    .catch( error => console.log(error))
  }

  const registerClicked = () => {
    API.registerUser({username, password})
    .then(alert('Selamat Anda telah berhasil membuat akun baru. Klik OK & lakukan login.'))
    .catch( error => console.log(error))
  }

  useEffect(() => {
    if(token['msms-cookie'] && state.userId && state.userName) {
      window.location.href = '/admin'
    };
  }, [token])

  return (
    <div className='text-center mt-5'>
      <main className='form-signin'>
        <img className="mb-4" src={logo} alt="logo" height='200'/>
        <h1 className="h3 mb-3 fw-normal">Management System</h1>
        <Form onSubmit={loginClicked}>
          <Form.Group className='form-floating'>
            <Form.Control type="text" placeholder='No. Ponsel' id='username' value={username} onChange={evt => setUsername(evt.target.value)} />
          </Form.Group>
          <Form.Group className='form-floating'>
            <Form.Control type="password" placeholder='Password' id='password' value={password} onChange={evt => setPassword(evt.target.value)} />
          </Form.Group>
          <Button variant="success" type='submit'>
            LOGIN
          </Button>
          <br/>
          <p onClick={() => setRegModal(!regModal)} className='link-registrasi'>
            <u>Registrasi Siswa Baru!</u>
          </p>
        </Form>
      </main>
      <footer className="mt-4 text-secondary">
        <p>&copy; Maestro Bisa | 2021</p>
      </footer>

      <Modal show={regModal} onHide={() => {setRegModal(!regModal); setUsername(''); setPassword('')}} size="md">

        <Modal.Header closeButton>
          <Modal.Title>Pendaftaran Siswa Maestro Swim</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{textAlign: 'center'}}>Ketentuan Umum</h5>
          <p>
            1. Jika siswa masih kecil & tidak memiliki nomor ponsel, maka dapat diisi:
          </p>
          <p className="center-text">
            <strong>[nomor ponsel orangtua]-[nama panggilan anak]</strong><br/>
            contoh: 081234567890-budi
          </p>
          <p>
            2. Password harus terdiri dari 8 karakter.
          </p>
          <Form onSubmit={registerClicked}>
            <Form.Group className='form-floating'>
              <Form.Control type="text" placeholder='No. Ponsel' id='username' value={username} onChange={evt => setUsername(evt.target.value)} />
            </Form.Group>
            <Form.Group className='form-floating'>
              <Form.Control type="password" placeholder='Password' id='password' value={password} onChange={evt => setPassword(evt.target.value)} />
            </Form.Group>
            <Modal.Footer>
              
              <Button variant="warning" onClick={() => setRegModal(!regModal)} type='submit'>
                Registrasi
              </Button>
              
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}


export default Auth
