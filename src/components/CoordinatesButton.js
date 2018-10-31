// Code DelayedButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends React.Component {

  clickHandler = (event) => {
    const array = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
      <button
      onClick={this.clickHandler}
      >COORDS
      </button>
    )
  }

}
