import React, { Component } from 'react';
import FoodItem from './components/FoodItem'
import './App.css';

class FoodList extends Component {
  constructor(props){
    super(props);
    this.state = {
    foodlist: [{}]
    }
  }
  componentDidMount(){
    const foodlist = [{
    name: 'Ricotta Ravioli',
    price:'$20.95',
    descripion: 'Homemade ravioli with ricotta cheese, pine nuts, black olive and roasted red bell pepper tomato sauce finished with fresh basil',
    url: 'https://liveblissful.files.wordpress.com/2012/11/dsc00763.jpg',
    },
    {
    name: 'Portobello Mushroom Napoleon',
    price: '$19.95',
    descripion: 'Crisp puff pastry layered with Portobello mushrooms, roasted red peppers and roasted garlic-feta spread, with sherry tomato cream sauce',
    url: 'http://4.bp.blogspot.com/-lyREap9lrDc/Vi0XYsRBtvI/AAAAAAAAFp4/4OZfRC7rnUU/w1200-h630-p-k-no-nu/Mod-4.jpg',
    },
    {
    name: 'Chicken Parmigiana',
    price: '$24.95',
    descripion: 'Breaded chicken cutlet baked with Parmesan cheese and fresh mozzarella served with marinara sauce, pasta linguine and fresh vegetables',
    url: 'http://sundayexpress.co.ls/wp-content/uploads/2013/11/Chicken-Parmesan1.jpg',
    },
    {
    name:'New York Strip',
    price:'$32.00',
    descripion:'12oz Stock Yard Angus Strip Loin grilled to perfection and finished with a red wine-shallot compound butter',
    url:'https://aandmfarmsbeef.com/wp-content/uploads/2017/02/grass-fed-ny-strip.jpeg',
    },
  ];
  this.setState({foodlist});
  }
  render(){
    return(
      <React.Fragment>
      <nav className="navbar navbar-light bg-light">
        <div className="navbar-brand">Wild Thyme Gourmet</div>
        <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </nav>
      <div className="container">
      <FoodItem foodlist={this.state.foodlist}/>
      </div>
      </React.Fragment>
    )
  }
}

export default FoodList;