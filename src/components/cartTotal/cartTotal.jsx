import React, { Component } from 'react';
import dataContext from '../../context/dataContext';
import ItemService from '../../services/itemService';

import "./cartTotal.css";


class CartTotal extends Component {
    static contextType = dataContext;
    state = { 
        cart : [],
        total: 0,
        discount: 0,
        couponCode: ""
     }
     render() {
        return (<div>{
            this.context.cart.length === 0
                ? (
                    <div className="emptyCart">
                        <p>Your cart is empty right now, when you're done shopping return here to see it!</p>
                    </div>
                ) : (
                    <div className="cartCheckoutContainer">
                        <div className="cartCheckout">
                            <input classsName="couponInput" type="text" name="couponCode"placeholder="Enter coupon code here" value={this.state.couponCode} onChange={this.handleInputChange}></input>
                            <button type="button" className="btn btn-primary btn-small" onClick={this.validateCode}>Verify code</button>

                            <label className="price">Total Price: ${this.getTotal()}</label>
                            <button type="button" className="btn btn-primary btn-small" onClick={this.checkOut}>Checkout</button>
                        </div>
                    </div>
                )
        }</div>);
    }

    validateCode = async() =>{
        //create a method on the service
        // will call the endpoint on the server
        //create in instance of the service
        let service = new ItemService();
        // call the new method
        let res = await service.validateCode(this.state.couponCode);
        console.log(res);
        if (res.error){
            alert("Invalid Code");
        }else{
            console.log("Discount was applied for " + res.discount + "%");
            this.setState({discount: res.discount});
        }

    }

    checkOut = async() =>{
        let order = {
            user : "Andrew",
            couponCode : this.state.couponCode,
            products: this.context.cart,
            createdOn: new Date(),
        };
        let service = new ItemService();
        let res = await service.checkOut(order);
        console.log(res);
    }

    getTotal = () => {
        let total = 0;
 
        for(let i = 0; i<this.context.cart.length; i++) {
            let item = this.context.cart[i];
            total += (item.price * item.quantity);
        }
        
        let discount = total * (this.state.discount / 100);
        return (total - discount).toFixed(2);
    }

    handleTotalChange = (total) => {
        this.setState({total : total})
    };

    handleInputChange = (event) => { //45 minutes left in class, rewatch this lecture tomorrow
        this.setState({ [event.target.name]: event.target.value });
    };
    
}

export default CartTotal