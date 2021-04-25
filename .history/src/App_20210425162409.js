import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return(
      <counter></counter>
    )

  }
}
class Counter extends React.Component{
  constructor(){
      super();
      this.state={
        count:0
        
      }
  
  increase=()=>{

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
      <button onClick={this.Increase}>Increase</button>
      <button>Decrease</button>
    </div>
    );
  }
}

export default App;
