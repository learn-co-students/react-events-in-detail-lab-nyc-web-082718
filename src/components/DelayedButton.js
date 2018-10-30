// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

  handleClick = (event) => {
    // event.persist()
    setTimeout(() => {
      this.props.onDelayedClick()
    }, this.props.delay)
  }
  render() {
    return (
      <button onClick={this.handleClick}>delay</button>
    )
  }
}

export default DelayedButton
