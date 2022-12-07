import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {App} from './components/app'
import {BrowserRouter as Router} from "react-router-dom";
import Store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = new Store();

export const Context = createContext({
    store
})
root.render(
  <React.StrictMode>
      <Context.Provider value={{store}}>
          <Router>
              <App/>
          </Router>
      </Context.Provider>
  </React.StrictMode>
);

