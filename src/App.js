import './App.css';
import React, { useEffect, useState }  from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from './components/Nav';
import Inventory from './components/Inventory';
import ItemDetail from './components/ItemDetail';
import OrderCompleted from './components/OrderCompleted';
import Item from './components/Item';

function App() {
  const [cartQuantity,setCartQuantity] = useState(0);
  const [cartItems,setCartItems] = useState([]);

  const addCartQuant = () => {
    setCartQuantity(cartQuantity + 1)
  }

  const addItemToCart = (e,variant,quantity) => {
    const copyCartItems = [...cartItems];
    const copyInventory = JSON.parse(JSON.stringify(Inventory));
    const productID = Number(e.target.id);
    const inventoryIndex = copyInventory.findIndex(item => item.id === productID);
    const inventoryItem = copyInventory[inventoryIndex];
    const cartDuplicateIndex = copyCartItems.findIndex(itemCopy => itemCopy.id === inventoryItem.id && itemCopy.variant === variant)
    const subTotal = quantity * inventoryItem.unitPrice

    inventoryItem.variant = variant;
    inventoryItem.quantity = quantity;
    inventoryItem.subTotal += subTotal

    if(cartDuplicateIndex === -1 || cartItems[cartDuplicateIndex].variant !== variant){
      copyCartItems.push(inventoryItem);
    } else {
      copyCartItems[cartDuplicateIndex].quantity += quantity;
      copyCartItems[cartDuplicateIndex].subTotal += subTotal;
    }

    setCartItems(copyCartItems)
    setCartQuantity(cartQuantity + quantity);
  }

  const removeItemFromCart = (cartIndex) => {
    const copyCartItems = [...cartItems];
    const quantity = copyCartItems[cartIndex].quantity;

    copyCartItems.splice(cartIndex,1)

    setCartItems(copyCartItems);
    setCartQuantity(cartQuantity - quantity)
  }

  const editQuantity = (cartIndex, e) => {
    const copyCartItems = [...cartItems];
    const oldQuantity = copyCartItems[cartIndex].quantity;
    const newQuantity = e.target.valueAsNumber
    const newSubTotal = newQuantity * copyCartItems[cartIndex].unitPrice

    copyCartItems[cartIndex].quantity = newQuantity
    copyCartItems[cartIndex].subTotal = newSubTotal

    setCartItems(copyCartItems)
    setCartQuantity(cartQuantity + (newQuantity - oldQuantity))
  }

  const calcCartTotal = () => {
    const copyCartItems = [...cartItems]
    const cartTotal = copyCartItems.reduce((accumulator, currentValue) => accumulator + currentValue.subTotal, 0)

    console.log("cart total = " + cartTotal)
    return cartTotal;
  }

  const clearCart = () => {
    const copyCartItems = []
    
    setCartItems(copyCartItems)
    setCartQuantity(0)
  }

  function checkCart(){
    console.log(cartItems)
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Nav 
          cartQuantity={cartQuantity}
        />
          <Switch>
            <Route 
              path="/" exact
              render={(props) => (
                <Home {...props} 
                />
              )}
            />
            <Route 
              path="/react-shop"
              render={(props) => (
                <Home {...props} 
                />
              )}
            />
            <Route 
              path="/shop" exact
              render={(props) => (
                <Shop {...props} 
                  addCartQuant={addCartQuant}
                  addItemToCart={addItemToCart}
                  checkCart={checkCart}
                  cartQuantity={cartQuantity} 
                />
              )}
            />
            <Route 
              path="/cart"
              render={(props) => (
                <Cart {...props}
                  checkCart={checkCart}
                  removeItemFromCart={removeItemFromCart}
                  editQuantity={editQuantity}
                  calcCartTotal={calcCartTotal}
                  clearCart={clearCart}
                  cartQuantity={cartQuantity} 
                  cartItems={cartItems}
                />
              )} 
            />
            <Route 
              path="/shop/:id"
              render={(props) => (
                <ItemDetail {...props}
                  addCartQuant={addCartQuant}
                  addItemToCart={addItemToCart}
                  checkCart={checkCart}
                  cartQuantity={cartQuantity} 
                  cartItems={cartItems}
                />
              )} 
            />
            <Route 
              path="/ordercompleted" exact
              render={(props) => (
                <OrderCompleted {...props} 
                />
              )}
            />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
