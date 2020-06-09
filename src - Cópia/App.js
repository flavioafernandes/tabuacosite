import React from 'react';
import './App.css';
import sample from './videohd.mp4';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <video id="myVideo" loop autoPlay muted>
        <source src={sample} type="video/mp4" />
     </video>
     
     <div className="content">
        <div id = "textContainer">
          <h1 id="tbcName">Tabuaço</h1>
          <p id="tbcSlogan">O melhor do Douro está aqui!</p>
        </div>
          <img id="btnIn" src={require('./more.png')} onClick={getMore} />   
      </div>
    </div>
  );
}

function getMore(e){
  console.log("Clicado");
}

export default App;
