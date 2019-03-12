import React, { Component } from 'react';
import axios from 'axios';
import './App.css';



class App extends Component {

  state = {
    selectWord: '',
    arraySyn: [],
    word: '',
    replaceWord: '',
  };


  getSyn = () => {
    let synWord = this.state.selectWord;
    axios.get(`https://api.datamuse.com//words?rel_syn=${synWord}`)
      .then(res => res.data)
      .then(res => {
        this.setState({
          arraySyn: [...res],
        })
      })
      .catch(error => console.log(error))
  };


  getSelectText = async (e) => {
    let txt = window.getSelection().toString();
    await this.setState({
      selectWord: txt,
    });
    this.getSyn();
  };


  targetWord = (e) => {
    let syncWord = e.target.dataset.name;
    this.setState({
      word: syncWord,
    })
  };


  keyHandler = (e) => {
    let character = e.key;
    if (character === 'Backspace') {
      let arrOfWord = this.state.word.split('');
      arrOfWord.pop();
      arrOfWord = arrOfWord.join('');
      this.setState({
        word: arrOfWord,
      })
    } else {
      this.setState(prev => ({
        word: prev.word + character,
      }))
    }
  };

  render() {

    const { arraySyn, word } = this.state;

    return (

      <div className="App">

        <div className='label_wrapper'>
          <label for='check_bold' className='bold'>BOLD</label>
          <label for='check_underline' className='underline'>UNDERLINE</label>
          <label for='check_italic' className='italic'>ITALIC</label>
        </div>

        <input type='checkbox' name='input' id='check_bold' />
        <input type='checkbox' name='input' id='check_underline' />
        <input type='checkbox' name='input' id='check_italic' />

        <div onKeyDown={this.keyHandler} tabIndex={-1} onClick={this.getSelectText} className='bold italic underline textfield'>{word}</div>

        {arraySyn.length !== 0 ? <div className='modal_of_syn' >{arraySyn.slice(0, 6).map(el => <p className='word_syn' data-name={el.word} onClick={this.targetWord}>{el.word}</p>)}</div> : null}

      </div >
    )
  }
}


export default App;
