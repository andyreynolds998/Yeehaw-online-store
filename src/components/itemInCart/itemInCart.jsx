import React, { Component } from 'react';

import "./itemInCart.css";

class ItemInCart extends Component {
    state = {  }
    render() { 
        return (
        <div className="itemInCart">
            <div className="iicFlexConatiner">
                <div className="iicImageContainer">
                    <img className="iicImage" src={this.props.prod.image}/>
                </div>
            </div>

            <div className="iicTiCat">
                <h6>{this.props.prod.title}</h6>
            </div>

            <div className="iicFlexContainer2">
                <div className="iicQuanTotal">
                    <h6>${this.props.prod.price}</h6>
                    <h6>Quantity: {this.props.prod.quantity}</h6>
                </div>

                <div className="iicDelete">
                    <button className="btn btn-small btn-danger">Remove</button>
                </div>
            </div>
        </div>
        );
    }
}
 
export default ItemInCart;