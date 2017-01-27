// @flow
import React, { Component } from 'react'
import * as firebase from 'firebase'



export default class Story extends Component {

  upvoteHandler() {
    const firebaseRef = firebase.database().ref().child('links')
    const storyRef = firebaseRef.child(this.props.storyKey)
    storyRef.update({upVotes: this.props.upVotes + 1})
  }

  render() {
    return (
      <li>
        {this.props.url} {this.props.upVotes} <button onClick={this.upvoteHandler.bind(this)} >Upvote</button>
      </li>
    )
  }
}
