import React, { Component } from 'react';

export default class DelayedButton extends Component {
  callDelay = (event, callback, delay) => {
    debugger
    event.persist()
    setTimeout(() => callback(event), delay)
  }

  render() {
    return (
      <button onClick={(event) => {this.callDelay(event, this.props.onDelayedClick, this.props.delay)}}>
        Delay
      </button>
    )
  }
}
