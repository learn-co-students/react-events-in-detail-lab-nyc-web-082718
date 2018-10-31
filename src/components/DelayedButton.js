// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  handleClick = (event) => {
    setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
    event.persist()
  }

  render() {
  return (
      <button onClick={this.handleClick}/>
  )
  }
};
