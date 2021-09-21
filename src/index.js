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

  const initialState = {
    userId: '1',
    userName: '',
    cek: 'wkwkwkwk'
  };

  function reducer(state, action) {
      switch (action.type) {
        case 'setUserId':
          // console.log('berhasil dispatch userId', state.userId)
          return {...state, userId: action.payload}
        case 'setUserName':
          // console.log('berhasil dispatch userName', state.userName)
          return {...state, userName: action.payload}
        default:
          return state
      }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.StrictMode>
      <CookiesProvider>
        <StateContext.Provider value={state}>
          <ReducerContext.Provider value={dispatch}>
            <BrowserRouter>
              <Route exact path='/' component={Auth}/>
              <Route
                path='/admin'
                component={App}
              />
            </BrowserRouter>
          </ReducerContext.Provider>
        </StateContext.Provider>
      </CookiesProvider>
    </React.StrictMode>
  )
};

ReactDOM.render(<Router/>, document.getElementById('root'));

serviceWorker.unregister();