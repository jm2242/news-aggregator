import React, { Component } from 'react'
import _ from 'lodash'
import Story from './Story'

export default class StoryList extends Component {

  renderStories() {
    return _.map(this.props.stories, (item, index) => <Story key={index}
      url={item}
    />)
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <h1>Feed</h1>
        <ul>
          {this.renderStories()}
        </ul>
      </div>
    )
  }
}
