import React, {createContext, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Auth from './components/auth';
import { CookiesProvider } from 'react-cookie';


export const StateContext = createContext();
export const ReducerContext = createContext();

function Router() {

  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const initialState = {
    userId: userId,
    userName: userName,
  };

  function reducer(state, action) {
      switch (action.type) {
        case 'setUserId':
          // console.log('berhasil dispatch userId', state.userId)
          return {...state, userId: action.payload}
        case 'setUserName':
          // console.log('berhasil dispatch userName', state.userName)
          return {...state, userName: action.payload}
        case 'ubahcek':
          return {...state, cek: action.payload}
        default:
          return state
      }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.StrictMode>
      <StateContext.Provider value={state}>
        <ReducerContext.Provider value={dispatch}>
          <CookiesProvider>
            <BrowserRouter>
              <Route exact path='/' component={Auth}/>
              <Route
                path='/admin'
                component={App}
              />
            </BrowserRouter>
          </CookiesProvider>
        </ReducerContext.Provider>
      </StateContext.Provider>
    </React.StrictMode>
  )
};

ReactDOM.render(<Router/>, document.getElementById('root'));

serviceWorker.unregister();