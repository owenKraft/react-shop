import React, { useEffect, useState }  from 'react';
import {Link} from "react-router-dom";
import Cart from './Cart';
// import CartLogic from './CartLogic'

const Nav = (props) => {
    console.log("Nav = " + props.cartQuantity)

    return (
        <nav className="nav">
            <span className="nav-link-left">
                <Link className="nav-icon-div" to="/">
                    <img className="nav-icon" src="https://i.imgur.com/gTl8Dqo.png" alt=""></img>
                </Link>
                <Link className="nav-text" to="/shop">
                    Shop
                </Link>
            </span>
            <span className="nav-link-right">
                <Link className="cart-icon-div" to="/cart">
                    <img className="cart-icon" src="https://static.wikia.nocookie.net/animalcrossing/images/a/a1/NH-Icon-Nook_Phone-Nook_shopping.png" alt=""></img>
                <span className="cart-quantity">
                    ({props.cartQuantity})
                </span>
                </Link>
            </span>
        </nav>
    );
};

export default Nav;