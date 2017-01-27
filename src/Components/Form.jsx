import React, { Component } from 'react'
import _ from 'lodash'
import * as firebase from 'firebase'

export default class From extends Component {

  handleSubmit(event) {
    event.preventDefault()

    // apparently this.refs is deprecated but will do for now
    const story = this.refs.createStory.value
    if (story && story.trim().length !== 0) {
      const firebaseRef = firebase.database().ref().child('links')
      const newPostRef = firebaseRef.push()
      const autogenKey = newPostRef.path.o[1]
      newPostRef.set({ url: story, upVotes: 0, storyKey: autogenKey })

      // clear input form
      this.refs.createStory.value = ''
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" placeholder="Add a Story" ref="createStory" />
          <button>Add Button</button>
        </form>
      </div>
    )
  }
}
