import React, { Component } from 'react';
// import Tree from 'react-animated-tree'
// import { timingSafeEqual } from 'crypto';
import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Treebeard } from 'react-treebeard';

const treeStyles = {
  position: 'absolute',
  top: 40,
  left: 40,
  color: 'white',
  fill: 'white',
  width: '100%'
}

const typeStyles = {
  fontSize: '2em',
  verticalAlign: 'middle'
}


const data = {

  "nodes": {
    "EXAMPLE.COM_192.168.0.1": {
      "storage": [
        "EXAMPLE.COM_192.168.0.1-storages-12",
        "EXAMPLE.COM_192.168.0.1-storages-37",
        "EXAMPLE.COM_192.168.0.1-storages-41"
      ],
      "interfaces": [
        "EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth0",
        "EXAMPLE.COM_192.168.0.1-snmp-interfaces-eth1",
        "EXAMPLE.COM_192.168.0.1-snmp-interfaces-br.lxc-4"
      ]
    },
    "Cisco3745new-1.SAMPLE.COM_192.168.0.120": {
      "interfaces": [
        "Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth0",
        "Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth1",
        "Cisco3745new-1.SAMPLE.COM_192.168.0.120-snmp-interfaces-eth2"
      ]
    },
    "Cisco3640new-1.SAMPLE.COM_192.168.0.180": {
      "interfaces": [
        "Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth0",
        "Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth1",
        "Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth2",
        "Cisco3640new-1.SAMPLE.COM_192.168.0.180-snmp-interfaces-eth3"
      ]
    },
  },
  "info": {
    "id": "Dailysync0d464eb75582c5da0f7b3285d460557dd3d2843a",
    "endTimestamp": 1534685151333
  }
};



class App extends Component {

  state = {
    inputValue: '',
    toArr: [],
    selectWord: []
  }

  componentDidMount = () => {
    // e.preventDefault();
    // this.iterObj(data);
  }

  inputInfo = (e) => {
    let value = e.target.value;
    let arr = value.split(' ');
    this.setState({
      inputValue: value,
      toArr: arr,
    })
  }

  getSelectionText = () => {
    let txt = window.getSelection().toString();
    console.log(txt);
    this.setState({
      selectWord: txt,
    })
  }


  // iterObj(obj) {
  //   for (let el in obj) {
  //     if (el) {
  //       let res = obj[el]
  //       return res;
  //     }
  //     if (typeof obj[el] === 'object') {
  //       this.iterObj(obj[el]);
  //     }
  //   }
  // };




  render() {

    const { inputValue, toArr, selectWord } = this.state;
    return (
      <div className="App">
        <form action="submit" >
          <textarea rows="10" cols="45" name="text" onChange={this.inputInfo} value={this.state.inputValue} onDoubleClick={this.getSelectionText}>{selectWord}</textarea>
          <p className='targetword'>{selectWord}</p>
        </form>
      </div >
    )
  }
}


export default App;
