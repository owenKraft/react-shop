import React from "react";
import {Link} from "react-router-dom";
import CartItem from './CartItem';
import Inventory from './Inventory';
import BellsIcon from './Misc/BellsIcon';
import {numberWithCommas} from './AppLogic';

const Cart = (props) => {
    const test = () => {
        props.cartItems.forEach()
    }

    props.calcCartTotal();

    let cartEmptyState
    let checkOutBtn
    if(props.cartQuantity === 0){
        cartEmptyState = <div className="flex-center-justify cart-empty-state">
                <div className=" cart-empty-text-area">
                    <div className="cart-empty-header">Oh no!</div>
                    <div className="cart-empty-body">Your cart is empty.</div>
                </div>
                <img className="cart-empty-pic" src="https://i.pinimg.com/originals/4e/7c/da/4e7cda72d0daa9b605cc735b61eb198d.png"></img>
            </div>
            checkOutBtn = "";
    } else {
        cartEmptyState = "";
        checkOutBtn = <Link style={{"text-decoration" : "none"}} to="/ordercompleted">
                        <div className="btn-div cart-total-btn-div">
                            <button className="hero-btn" onClick={() => props.clearCart()}>
                                <span >Complete purchase</span>
                            </button>
                        </div>
                    </Link>
    }

    let cartTotal = numberWithCommas(props.calcCartTotal())

    return (
        <div>
            <h1>Your cart</h1>
            {cartEmptyState}
            <div>
                {props.cartItems.map((x, i) =>
                    <CartItem 
                        key={i}
                        id={i}
                        cartItem={props.cartItems[i]}
                        removeItemFromCart={props.removeItemFromCart}
                        editQuantity={props.editQuantity}
                    />
                )}
            </div>
            <div className="cart-total">
                <div>
                    <h3>
                        Your total: <BellsIcon />{cartTotal} Bells
                    </h3>
                    {checkOutBtn}
                </div>
            </div>

        </div>
    );
};

export default Cart;