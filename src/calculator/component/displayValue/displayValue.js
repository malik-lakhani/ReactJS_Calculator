import React from 'react';

// Display value from the props
export default class DisplayValue extends React.Component {
  render(){
    return (
      <div>
        <h3> {this.props.current} </h3>
        <h2 > {this.props.total} </h2>
      </div>
    )
  }
}