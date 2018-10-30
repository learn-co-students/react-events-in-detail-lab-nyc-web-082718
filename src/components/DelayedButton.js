// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

  handleClick = (event) => {
    event.persist(); //makes the event last long enough to call it back
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  } //the naming convention for handling clicks OR events, should always be 'handle[followed by name of the event]'


  render() {
    return (
    <button onClick={this.handleClick}>Delayed Button</button>
    )
  }

}//end of class

export default DelayedButton
