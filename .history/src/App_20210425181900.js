import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return(<div>
      <Dataviewer></Dataviewer>
      <Counter></Counter>
      </div>
      )
      
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
  decrease=()=>{
    this.setState({count:this.state.count-1})

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
      <button onClick={this.decrease}>Decrease</button>
    </div>
    );
  }
}

class Dataviewer extends React.Component{
  constructor(){
    super();
    this.state={
      id:1,
      jobTitleName:"Developer",
      preferedFullName:"Ahmed Ali",
      replaceemployeeCode:"E1",
      region:"CA",
      phoneNumber:"408-123456",
      emailAddress:"ahmed.ali@gmail.com",
    }
  }
  render(){
    return(
      <div class="container" style={{marginRight: 10px}} >
         ID: {this.state.id}
         <br></br>
         Job title: {this.state.jobTitleName}
         preferedFullName: {this.state.preferedFullName}
         <br></br>
         region: {this.state.region}
         <br></br>
         phoneNumber {this.state.phoneNumber}
         <br></br>
         emailAddress {this.state.emailAddress}
      </div>
    )
  }
}
export default App;
