import "./App.css";
import Footer from "./components/footer/footer";
import NavBar from "./components/navBar/navbar";
import Catalog from "./components/catalog/catalog";
import Home from "./components/home/home";
import About from "./components/about/about";
import Cart from "./components/cart/cart";
import Contact from "./components/contact/contact";
import Admin from "./components/admin/admin";
import GlobalState from "./context/globalState";
import ShoppingList from "./components/shoppingList/shoppingList";
import CartTotal from "./components/cartTotal/cartTotal";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <div className="App">
          <NavBar></NavBar>

          <Switch>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/catalog" exact component={Catalog}></Route>
            <Route path="/about" exact component={About}></Route>
            <Route path="/cart" exact component={Cart}></Route>
            <Route path="/contact" exact component={Contact}></Route>
            <Route path="/admin" exact component={Admin}></Route>
            <Route path="/shoppingList" exact component={ShoppingList}></Route>
          </Switch>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;

// last 5 minutes of 110 class 4 for brief project description for resume
