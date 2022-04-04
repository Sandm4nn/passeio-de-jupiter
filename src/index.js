import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function comic(){
  const pages = (
    <div>
      <img src="src/imgs/street.jpeg" alt="o gato Jupiter olhando para rua" />
      <img src="src/imgs/boat.jpeg" alt="o gato Jupiter olhando para o barco" />
      <img src="src/imgs/feather.jpeg" alt="o gato Jupiter com a pena" />
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(
    pages,
    document.getElementById('root')
  );

}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
