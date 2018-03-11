import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    textValue: '',
    textLength: 0
  }

  changeListener = (event) => {
    this.setState({
      textValue: event.target.value,
      textLength: event.target.value.length,
    })
  }

  deleteCharHandler = (index) => {
    let text = [...this.state.textValue];
    text.splice(index, 1);
    text = text.join('');
    this.setState({
      textValue: text,
      textLength: text.length
    });
  }

  render() {
    let chars = (
      <div>
        {[...this.state.textValue].map( (char, index) => {
          return <CharComponent 
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
        <ValidationComponent 
          textLength={this.state.textLength}
        />
        {chars}
      </div>
    );
  }
}

export default App;
