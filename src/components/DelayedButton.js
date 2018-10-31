// Code DelayedButton Component Here
import React, { Component } from 'react';

export default class DelayedButton extends Component {

  myFun = (event) => {
    event.persist()
    // debugger
    setTimeout(() => { this.props.onDelayedClick(event) }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.myFun}>My Other Button</button>
    );
  }

}
