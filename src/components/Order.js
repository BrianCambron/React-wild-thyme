import React, { Component } from 'react';



class Order extends Component{
  constructor(props){
    super(props);
    this.state = {
      order: [],
    }
  }
  render(){
    console.log(this.props.order);
    return(
      <div>
      </div>
    )
  }
}
export default Order;
