import React from "react";

export default React.createContext({
  cart: [],
  shoppingList: [],
  order: [],
  addProdToList: (text) => {},
  addProdToCart: (product) => {},
  checkOut: (order) => {},
});
