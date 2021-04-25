import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
  return (
    //JSX code w babel by7awlo js 
    //bs b3d ma 7tet render khleto html
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My Application
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
  }
}

export default App;
