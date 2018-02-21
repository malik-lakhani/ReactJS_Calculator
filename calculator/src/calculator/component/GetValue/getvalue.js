import React from 'react';
import '../App.css';

// Get value from the state and display it
export default class Getvalues extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      current: 0,
      total: 0,
      operator: '',
    }
  }

  render(){
    return (
      <div>
        <h3> {this.props.current} </h3>
        <h2 > {this.props.total} </h2>
      </div>
    )
  }
}