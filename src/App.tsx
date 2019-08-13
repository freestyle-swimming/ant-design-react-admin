import React from 'react';
import logo from './logo.svg';
import './App.css';
import { requestGetUserInfo } from './api/index';
import requestErrorHandler from './api/utils/requestErrorHandler';

const App = (): JSX.Element => {
  requestGetUserInfo({ userId: 123 })
    .then((data) => {
      window.console.log(data);
    })
    .catch((error) => {
      requestErrorHandler(error);
    });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
