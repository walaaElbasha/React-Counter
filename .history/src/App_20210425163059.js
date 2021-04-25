import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return(<Counter></Counter>)

  }
}
class Counter extends React.Component{
  constructor(){
      super();
      this.state={
        count:0
      }
   }
  increase=()=>{
    this.setState({count:this.state.count+1})

  }

  render(){
  return (
    //JSX code w babel by7awlo js 
    //bs b3d ma 7tet render khleto html
    <div className="App">
      <div>
        {this.state.count }
      </div>
      <button onClick={this.increase}>Increase</button>
      <button OnClick={this.decrease}>Decrease</button>
    </div>
    );
  }
}

export default App;
