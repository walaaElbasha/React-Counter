import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  constructor(){
      super();
      this.state={
        count:0
        
      }
    }
  render(){
  return (
    //JSX code w babel by7awlo js 
    //bs b3d ma 7tet render khleto html
    <div className="App">
      <div>
        {this.state.count }
      </div>

    </div>
    );
  }
}

export default App;
