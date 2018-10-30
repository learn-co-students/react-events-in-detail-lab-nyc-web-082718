// Code CoordinatesButton Component Here
import React, {Component} from 'react'

class CoordinatesButton extends Component {
//if the class is not going to receive props, then you dont need a constructor.
//when you dont need to set state inside of the component, then you dont need a constructor.

  handleClick = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
    //accessing the props passed to it from index.js
  }

  render() {
    return (
      <button onClick={this.handleClick}>Coordinate Button</button>
    )
  } //invoking class method on line 15
}
export default CoordinatesButton
