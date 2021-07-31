import React, { Component, createContext } from 'react';
import QuantityPicker from '../quantityPicker/quantityPicker';
import dataContext from "../../context/dataContext";

import "./item.css";

class Item extends Component {
    static contextType = dataContext;
    state ={
        quantity: 1,
    }

    render(){
        return(
            <div className="item">
                <img className="itemPhoto" src={this.props.item.image}/>
                <h6 className="itemTitle">{this.props.item.title}</h6>
                <label className="itemPrice">Total Price: ${this.getTotal()}</label>

                <QuantityPicker onQuantityChange={this.handleQuantityChange}></QuantityPicker>
                <button onClick={this.handleAddButton} className="btn btn-sm btn-primary">🛒</button>
                <h6 className="itemDesc">{this.props.item.description}</h6>
            </div>
        );
    }

    handleAddButton = () => {
        // create a copy of the prod
        var copy = {
            ...this.props.item, //copy every property from prod object
            quantity: this.state.quantity
        };

        // send the copy to cart
        this.context.addProdToCart(copy);

        console.log(copy)
    };

    getTotal =()=>{
        let total = this.props.item.price * this.state.quantity;
        return total.toFixed(2);
    }

    handleQuantityChange = (quantity) => {
        console.log("Quantity Changed");
        this.setState({quantity : quantity})
    }
}

export default Item;