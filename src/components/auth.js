// import React, { useState, useEffect } from 'react';
// import API from '../api_service';
// import { useCookies } from 'react-cookie';

// function Auth(){

//     const [ username, setUsername ] = useState('');
//     const [ password, setPassword ] = useState('');
//     const [ isLoginView, setIsLoginView ] = useState(true);

//     const [ token, setToken ] = useCookies(['msms-cookie']);

//     useEffect(() => {
//         if(token['mr-token']) window.location.href = '/movies';
//     }, [token]);

//     const loginClicked = () => {
//         API.loginUser({username: username, password: password})
//         .then( resp => setToken('msms-cookie', resp.token))
//         .catch( error => console.log(error))
//     };
    
//     const registerClicked = () => {
//         API.registerUser({username: username, password: password})
//         .then( () => loginClicked())
//         .catch( error => console.log(error))
//     };

//     const isDisabled = username.length === 0 || password.length === 0;

//     return (
//         <div className="App">
//             <header className="App-header">
//                 {isLoginView ? 
//                     <h1>Login</h1> :
//                     <h1>Register</h1>
//                 }
//             </header>
//             <div className='login-container'>
//                 <label htmlFor="username">Username</label><br/>

//                 <input type="text" id="username" placeholder="username" value={username}
//                 onChange={evt => setUsername(evt.target.value)}
//                 ></input><br/>

//                 <label htmlFor='password'>Password</label><br/>

//                 <input type="password" id='password' placeholder="password" value={password}
//                 onChange={evt => setPassword(evt.target.value)}
//                 ></input><br/>

//                 {isLoginView ?
//                     <button onClick={loginClicked} disabled={isDisabled}>Login</button> :
//                     <button onClick={registerClicked} disabled={isDisabled}>Register</button>
//                 }

//                 {isLoginView ?
//                     <p onClick={() => setIsLoginView(false)}>You don't have an account? Register here!</p> :
//                     <p onClick={() => setIsLoginView(true)}>You already have an account? Login here!</p>
//                 }
//             </div>
//         </div>
//     )
// };

// export default Auth;


import React from 'react';

function Auth() {

  return (
    <React.Fragment>

        <h1>cek auth page admin</h1>

    </React.Fragment>
  );
}


export default Auth;
