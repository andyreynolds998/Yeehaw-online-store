import React, { Component } from 'react';
import dataContext from '../../context/dataContext';

import './shoppingList.css';

class ShoppingList extends Component {
    static contextType = dataContext;
    state = {  }
    render() { 
        return (
            <div className="ShoppingList">
                <div className="capture">
                    <input type="text"/>
                    <button onClick={this.handleAddtoList}>Add to list</button>
                </div>

                <div>
                    {this.context.shoppingList.map(x => x)}
                </div>
            </div>
        );
    }

    handleAddtoList = () => {
            var copy = {
                ...this.props.item
            };
    
            this.context.addProdToList(copy);
    
            console.log(copy)
        };
    
        }
        
export default ShoppingList;

/**
 *
 * handle the button click
 * call a function
 * get the text from the input field
 * connect your component to use the context store
 * call the function (addToShoppingList) on the context
 *
 * read the shoppingList [] from the context
 * map that array into div with the text inside
 *
 */
