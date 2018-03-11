import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    textValue: ''
  }

  changeListener = (event) => {
    this.setState({
      textValue: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    let text = [...this.state.textValue];
    text.splice(index, 1);
    text = text.join('');
    this.setState({
      textValue: text
    });
  }

  render() {
    let chars = (
      <div>
        {[...this.state.textValue].map( (char, index) => {
          return <Char
              char={char}
              key={index}
              click={() => this.deleteCharHandler(index)}
            />
        })}
      </div>
    );

    return (
      <div className="App">
        <input 
          type="text"
          value={this.state.textValue}
          onChange={this.changeListener}
        />
        <Validation
          textLength={this.state.textValue.length}
        />
        {chars}
      </div>
    );
  }
}

export default App;
