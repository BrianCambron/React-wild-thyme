import React, { Component } from 'react';

class OrderItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      specialinstructions:'',
      // editing: false,
    }
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(event){
  this.setState({[event.target.name]: event.target.value});
  }
  handleClick(){
    this.setState{{specialinstructions}}
  }
  render(){
    console.log(this.props.orderItem);
    return(
    <li className="list-group-item col-12 col-md-4 list-style">{this.props.orderItem.name}
    <img className="foodpic"src={this.props.orderItem.url} alt='#'/>
    <p>{this.props.orderItem.descripion}</p>
    <button className="btn btn-danger"type="button" onClick={()=> this.props.deleteOrderItem(this.props.orderItem)}>&#x2613;</button>
    <input type="text" placeholder="Special Instructions" name="specialinstructions" id="specialinstructions" value={this.state.specialinstructions} onChange={this.handleInput}/>
    <button className="btn btn-info" type="submit">Save</button>
    </li>
    )
  }
}



class Order extends Component{

  render(){
    const order = this.props.order.map((orderItem, index) => <OrderItem key={index} orderItem={orderItem} deleteOrderItem={this.props.deleteOrderItem}/>)
    const subtotal = this.props.order.reduce((total, order) => total + order.price, 0);
    console.log(subtotal);
    console.log(this.props.order);
    return(
      <div>
        ${subtotal}
        {order}
     </div>
    )
  }
}
export default Order;
