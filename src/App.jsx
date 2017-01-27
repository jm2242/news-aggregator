// @flow
import * as firebase from 'firebase'
import _ from 'lodash'
import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import StoryList from './Components/StoryList'
import Form from './Components/Form'


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
    this.firebaseRef.on('value', function (dataSnapshot) {
      const updatedItems = _.map(dataSnapshot.val(), (item, index) => item)
      console.log(updatedItems)
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
        <Form />
        <StoryList stories={this.state.items} />
      </div>
    )
  }
}

export default App
