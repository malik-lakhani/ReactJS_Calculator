import React, { Component } from 'react';
import './App.css';
import Getvalues from './component/getvalue.js';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        current: 0,
        total: 0,
        operator: ''
      };
  }

  calculate = () => {
    const total = parseInt(this.state.total);
    const current = parseInt(this.state.current);
    const operator = this.state.operator;
    switch(operator){
       case "+":
          return total + current;
          break;
       case "-":
          return  total - current;
          break;
       case "*":
          return  total * current;
          break;
       case "/":
          return  total / current;
          break;
       default:
          return 0;
     }
  };

  operation = (e) => {
    const operator = e.target.attributes.getNamedItem('value').value;
    this.setState({
       total: this.state.current,
       current: 0,
       operator: operator
    });
  }

  getResult = () => {
    this.setState({
       total: this.calculate(),
       current: 0
    });
  }

   getValue = (e) => {
    const value = e.target.attributes.getNamedItem('value').value;
    this.setState(() => {
      return {current: value};
    });
  }

  clear = () => {
    this.setState({
      total: 0,
      current: 0,
      operator: ''
    });
  }

  render() {
    return (
      <div>
        <div>
          <div id="calculator">
            <div className="top">
              <button onClick={this.clear} className="clear"> C </button>
              <div class="screen">
                <Getvalues current={this.state.current} total={this.state.total} />
              </div>
            </div>
            <div className="keys">
              <div>
                <button value="7" onClick={this.getValue}> 7 </button>
                <button value="8" onClick={this.getValue}> 8 </button>
                <button value="9" onClick={this.getValue}> 9 </button>
                <button value="+" onClick={this.operation} className="operator"> + </button>
              </div>
              <div>
                <button value="4" onClick={this.getValue}> 4 </button>
                <button value="5" onClick={this.getValue}> 5 </button>
                <button value="6" onClick={this.getValue}> 6 </button>
                <button value="-" onClick={this.operation} className="operator"> - </button>
              </div>
              <div>
                <button value="1" onClick={this.getValue}> 1 </button>
                <button value="2" onClick={this.getValue}> 2 </button>
                <button value="3" onClick={this.getValue}> 3 </button>
                <button value="*" onClick={this.operation} className="operator"> * </button>
              </div>
              <div>
                <button value="0" onClick={this.getValue}> 0 </button>
                <button value="." onClick={this.getValue}> . </button>
                <button onClick={this.getResult} class="eval"> = </button>
                <button value="/" onClick ={this.operation} className="operator"> / </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
