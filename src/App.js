import React, { Component } from 'react';
// import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';
import axios from 'axios';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './App.css';



class App extends Component {

  state = {
    editorState: EditorState.createEmpty(),
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


  // onEditorStateChange = async (editorState) => {
  //   console.log(editorState);
  //   this.setState({
  //     editorState,
  //   });
  //   await this.getSelectionText();
  //   this.getSyn();
  // };


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
    let j = e.key;
    console.log(j);
    this.setState(prev => ({
      word: prev.word + j,
    }))
  };



  // getCoord = (e) => {
  //   const coords = e.target.getBoundingClientRect();
  //   console.log(coords);
  //   console.log('width :' + coords.width);
  // }


  render() {

    const { editorState, arraySyn, word } = this.state;
    return (
      <div className="App">
        {arraySyn.length !== 0 ? <div className='modal_of_syn' >{arraySyn.slice(0, 6).map(el => <p className='word_syn' data-name={el.word} onClick={this.targetWord}>{el.word}</p>)}</div> : null}
        {/* <Editor editorState={editorState} toolbarClassName="toolbarClassName" wrapperClassName="wrapperClassName" editorClassName="editorClassName"
          onEditorStateChange={this.onEditorStateChange} className='editor' /> */}
        <div className='label_wrapper'>
          <label for='check_bold' className='bold'>BOLD</label>
          <label for='check_underline' className='underline'>UNDERLINE</label>
          <label for='check_italic' className='italic'>ITALIC</label>
        </div>
        <input type='checkbox' name='input' id='check_bold' />
        <input type='checkbox' name='input' id='check_underline' />
        <input type='checkbox' name='input' id='check_italic' />

        <div onKeyPress={this.keyHandler} tabIndex={-1} onClick={this.getSelectText} className='bold italic underline textfield'>{word}</div>
      </div >
    )
  }
}


export default App;
