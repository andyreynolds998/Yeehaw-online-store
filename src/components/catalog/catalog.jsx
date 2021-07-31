import React, { Component } from 'react';
import Item from '../item/item';
import ItemService from '../../services/itemService';

import "./catalog.css";

class Catalog extends Component {
    state = {
        items: [],
        categories: [],
        selectedCategory: "",
    };
    render() { 

        let itemsToDisplay = this.state.items;

        // sort
        itemsToDisplay = this.state.items.sort((a,b) => a.price < b.price);

        if(this.state.selectedCategory){
            //filter your items array
            itemsToDisplay = itemsToDisplay.filter( item => item.category === this.state.selectedCategory);
        }

        return ( 
            <div className="catalog-page">

                <div className="filterButtons">
                    <button onClick={() => this.filterItems("")} className="btn btn-info">
                        All items
                    </button>
                    
                    {this.state.categories.map(cat => 
                    <button onClick={() => this.filterItems(cat)} className="btn btn-info" key={cat}>
                        {cat}
                    </button> )}
                </div>

                <div className="catalogItems">
                    {itemsToDisplay.map((prod) => (
                    <Item key={prod.id} item={prod}></Item>
                    ))}
                </div>
                
            </div>
        );
    }

    filterItems = (category) => {
        console.log("Filtering", category);
        this.setState({selectedCategory: category})
    }
    //called after the render function is executed (after something has loaded onto the users screen)
    async componentDidMount(){
        //call the service to get the list of items
        var itemService = new ItemService();
        var items = await itemService.getCatalog();
        this.setState({items: items});
        
        //identify the unique categories
        /*let cats = [];
        for(let i=0; i< items.length; i++){
            let cat = items[i].category;
            
            if(!cats.includes(cat)){
                cats.push(cat);
            }
        }*/
        
        //get categories from server
        let cats = await itemService.getCategories();
        console.log("Categories from server", cats);
        this.setState({ categories: cats });
    }
}
 
export default Catalog;