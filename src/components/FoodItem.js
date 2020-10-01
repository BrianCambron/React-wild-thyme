import React, { Component } from 'react';
import './FoodItem.css';

class FoodItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: '',
      price:'',
      descripion: '',
      url:'',
    }
  }
  render(){
    const foodlist = this.props.foodlist.map((food, index) => <li className="list-group-item col-12 col-md-4 list-style" key={index}>{food.name}<img className="foodpic"src={food.url} alt='#'/><p>{food.descripion}</p><button type="button">{food.price}</button></li>);
    console.log(this.props.foodlist);
    return(
  <ul className="list-group list-group-flush">
    {foodlist}
  </ul>
    )
  }
}
export default FoodItem;
