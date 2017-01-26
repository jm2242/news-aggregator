// @flow
import * as firebase from 'firebase'
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import StoryList from './Components/StoryList'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
    }
  }

  // Define types
  state: {
    items: string[],
  }

  componentWillMount() {
    this.firebaseRef = firebase.database().ref().child('links')
    this.firebaseRef.on('child_added', function (dataSnapshot) {
      let updatedItems = this.state.items.concat(dataSnapshot.val())
      this.setState({
        items: updatedItems,
      })
    }.bind(this))
  }
  //
  // componentWillMount() {
  //   this.firebaseRef.off()
  // }



  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Real Time News Stories</h2>
        </div>
        <StoryList stories={this.state.items} ></StoryList>
      </div>
    )
  }
}

export default App
