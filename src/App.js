import logo from './logo.svg';
import './App.css';
import Fun from './New';
import React from 'react';
import App1 from './app1';
import Cls from './cls';


class App extends React.Component {
 
 render(){ return (
    <React.Fragment>
  <h1 style={{color:'red', backgroundColor: "lightblue", padding: "15px",
    fontFamily: "Sans-Serif"}}>this is app</h1>
  <Fun/>
  <App1/>
  <Cls/>
  </React.Fragment>
    )}
}

export default App;
