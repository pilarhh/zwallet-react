import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserContext from "./context/UserContext";
import { Provider } from 'react-redux';
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <UserContext>
      <Provider store={store}>
        <App />
      </Provider>
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
