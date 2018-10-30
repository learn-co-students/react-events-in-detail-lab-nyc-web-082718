import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

  listenForClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {
    return (
      <button onClick={this.listenForClick}>Coordinates Button</button>
    )
  }
}
