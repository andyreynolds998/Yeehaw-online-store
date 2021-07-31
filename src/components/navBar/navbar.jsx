import React, { Component } from 'react'; 
import {Link} from 'react-router-dom';
import dataContext from "../../context/dataContext";
import "./navbar.css";

class NavBar extends Component {
    static contextType = dataContext;
    state = {};

    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg">
                <Link className="navbar-brand" to="/home">
                    <img className="logo" src="data:image/png;base64,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" width="30" height="24"></img>
                </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link className="nav-link" id="navbarColor" aria-current="page" to="/catalog">Catalog</Link>
                <Link className="nav-link" id="navbarColor" aria-current="page" to="/cart">Shopping cart</Link>
                <Link className="nav-link" id="navbarColor" aria-current="page" to="/contact">Contact us</Link>
                <Link className="nav-link" id="navbarColor" aria-current="page" to="/shoppingList">Shopping list</Link>
                <Link className="nav-link" id="navbarColor" aria-current="page" to="/admin">Admin</Link>
                </div>
            </div>
        </nav>
        )
    }
}
 
export default NavBar