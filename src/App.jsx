// @flow
import * as firebase from 'firebase'
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      speed: 10,
    }
  }

  // Define types
  state: {
    speed: Number,
  }

  // only called once
  // but apparently will still listen for changes
  componentDidMount() {
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed')
    speedRef.on('value', (snap) => {
      console.log(snap.val())
      this.setState({
        speed: snap.val(),
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reloa.
        </p>
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default App;
