import React, { Component } from 'react';
import ItemService from '../../services/itemService';

import "./admin.css";
// review class at 2:29 for convo regarding parameter being passed as string rather than a number
class Admin extends Component {
    defaultState={
       id: "",
       price: 0,
       stock: 0,
       title: "",
       description: "",
       image: "",
       discount: 0,
       category: ""
    }
   state = {...this.defaultState}
    render() { 
        return (
            <div className="adminPage">

                <label>id</label>
                <input className="id" type="text" name="id" value={this.state.id} onChange={this.handleInputChange}/>
                <br/>

                <label>Price</label>
                <input className="price" type="number" name="price" value={this.state.price} onChange={this.handleInputChange}/>
                <br/>

                <label>Stock</label>
                <input className="stock" type="number" name="stock" value={this.state.stock} onChange={this.handleInputChange}/>
                <br/>

                <label>Title</label>
                <input className="title" type="text" name="title" value={this.state.title} onChange={this.handleInputChange}/>
                <br/>

                <label>Description</label>
                <input className="description" type="text" name="description" value={this.state.description} onChange={this.handleInputChange}/>
                <br/>

                <label>Image URL</label>
                <input className="imageURL" type="text" name="image" value={this.state.image} onChange={this.handleInputChange}/>
                <br/>

                <label>Discount</label>
                <input className="discount" type="number" name="discount" value={this.state.discount} onChange={this.handleInputChange}/>
                <br/>

                <label>Category</label>
                <input className="category" type="text" name="category" value={this.state.category} onChange={this.handleInputChange}/>
                <br/>

                <button className="btn btn-dark" onClick={this.handleSave}>Save Product</button>
            </div>
          );
    }

    handleInputChange = (event) => { //45 minutes left in class, rewatch this lecture tomorrow
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSave = async () => {
        let item = {...this.state};
        item.price = item.price * 1; //all three ways work to pass a string as a number the same way
        item.stock = +item.stock;
        item.discount = parseInt(item.minimum);
        //send the object to service
        let itemService = new ItemService();
        let response = await itemService.saveItem(item);
        console.log("Saving response", response);
        // clear the capture form


    }
}
 
export default Admin;