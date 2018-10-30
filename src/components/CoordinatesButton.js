// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component{
  constructor(props){
    super(props)
  }

  setCoordinates = (event) => {

    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render(){
    return(
      <div>
      <button onClick={this.setCoordinates}>CoordinatesButton</button>
      </div>
    )
  }
}

export default CoordinatesButton
