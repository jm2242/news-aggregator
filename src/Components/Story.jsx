// @flow
import React, { Component } from 'react'


export default class Story extends Component {
  render() {
    return (
      <li>
        {this.props.url}
      </li>
    )
  }
}
