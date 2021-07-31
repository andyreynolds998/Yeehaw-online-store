import React, { Component } from 'react';
import dataContext from '../../context/dataContext';
import ItemInCart from '../itemInCart/itemInCart';
import CartTotal from '../cartTotal/cartTotal';
import "./cart.css";

class Cart extends Component {
    static contextType = dataContext;
    state = {  }
    render() { 
                 
        return (
                <div className="cartPage">
                        <div className="productContainer">
                            {this.context.cart.map((prod) => 
                            <ItemInCart key={prod.id} prod={prod}></ItemInCart>
                            )}
                        </div>
                        <div className="checkout">
                            <CartTotal handleTotalChange={this.handleTotalChange}></CartTotal>
                        </div>
                    </div>        
        );

    }
}
 
export default Cart;