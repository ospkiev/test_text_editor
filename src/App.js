import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    inputValue: '',
    toArr: [],
    selectWord: []
  }

  inputFunc = (e) => {
    let value = e.target.value;
    // let arr = value.split(' ');
    this.setState({
      inputValue: value,
    })
  }

  getSelectionText = () => {
    let txt = window.getSelection().toString();
    console.log(txt);
    this.setState({
      selectWord: txt,
    })
  }

  render() {

    const { inputValue, toArr, selectWord } = this.state;
    return (
      <div className="App">
        <div className='title'>Text editor</div>
        <form action="submit" >
          {/* <textarea rows="10" cols="45" name="text" onChange={this.inputInfo} value={this.state.inputValue} onDoubleClick={this.getSelectionText}>{selectWord}</textarea> */}
          <input type='text' value={this.state.inputValue} onChange={this.inputFunc} onDoubleClick={this.getSelectionText} id='input'></input>
          <p className='targetword'>{selectWord}</p>
          <div className='modal_window'>Text editor</div>
        </form>
      </div >
    )
  }
}


export default App;
