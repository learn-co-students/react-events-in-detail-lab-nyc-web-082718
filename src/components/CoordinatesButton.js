// Code CoordinatesButton Component Here
import React, {Component}from 'react';
export default class CoordinatesButton extends Component {
  handelOnClick = (e)=>{
    console.log(e.clientX,e.clientY)

    let co = [e.clientX, e.clientY]
    this.props.onReceiveCoordinates(co)

  }
  render(){

    return(
      <button onClick={this.handelOnClick} > Click Me! </button>
    )
  }
}
