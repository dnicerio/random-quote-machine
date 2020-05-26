import React, { Component } from 'react';
import QuoteBox from './components/QuoteBox';
import './App.css'


export class App extends Component {
  constructor() {
    super();
    this.state = {
      color: 'color1'
    }
    // Bind Handle color change
    this.handleColorChange = this.handleColorChange.bind(this);
  }
  
  // Get randomColor value from QuoteBox and set state
  handleColorChange = (randomColor) => {
    this.setState({
      color: randomColor
    })
  }

  render() {
    return (
        <div id="app" className={this.state.color}>
          <QuoteBox color={this.state.color} handleColorChange={this.handleColorChange} />
        </div>
    )
  }
}

export default App;
