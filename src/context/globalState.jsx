import React, { Component } from 'react';
import DataContext from './dataContext';

class GlobalState extends Component {
    state = {
        cart: [],
        shoppingList: [],
        order: [],
    };

    render() { 
        return (
            <DataContext.Provider 
            value={{
                cart: this.state.cart,
                shoppingList: this.state.shoppingList,
                order: this.state.order,
                addProdToCart: this.addProdToCart,
                addProdToList: this.addProdToList,
                checkOut: this.checkOut,
            }}>
                {this.props.children}
            </DataContext.Provider>
        );
    }        

    addProdToList = (product) => {
        let myList = this.state.shoppingList;
        let found = false;
        for(let i=0; i<myList.length; i++){
            let current = myList[i];
            if(current.id === product.id){
                found = true;
                current.quantity += product.quantity;
            }
        }
        if(!found){
            myList.push(product);
        }
        this.setState({shoppingList:myList});
        console.log("Adding product to list", myList);
    }

    addProdToCart = (product) => {
        let myCart = this.state.cart;
        
        let found = false;
        for(let i=0; i<myCart.length; i++){
            let current = myCart[i];
            if(current.id === product.id){
                found = true;
                current.quantity += product.quantity;
            }
        }
        if(!found){
            myCart.push(product);
        }
        
        this.setState({ cart: myCart});
        console.log("Added a prod to the cart", myCart);
    }
}
 
export default GlobalState;

/**
 * travel the array
 * get the product inside
 * 
 * if the product id is equal to the new product id
 *  increase the quantity of product
 *  set a flag to found
 * 
 * outside the for
 *  if not found, push it
 */