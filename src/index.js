import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Auth from './components/auth';
// import { CookiesProvider } from 'react-cookie';


function Router() {

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Route exact path='/' component={Auth}/>
        <Route
          path='/admin'
          component={App}
        />
      </BrowserRouter>
    </React.StrictMode>
  )
};

ReactDOM.render(<Router/>, document.getElementById('root'));

serviceWorker.unregister();