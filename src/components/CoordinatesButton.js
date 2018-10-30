import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

  createArray = (event) => {
    const coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
  }

  render() {
    return <button onClick={this.createArray}>1</button>
  }

}
