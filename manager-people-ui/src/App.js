import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/index';
import ManagerUser from './page/manager-user'

export default function App(){
      return (
      <Provider store={store}>
        <div className="App">
        <ManagerUser />
        </div>
      </Provider>
    );
  }