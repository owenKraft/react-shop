import React  from 'react';
import {Link} from "react-router-dom";
import BellsIcon from './Misc/BellsIcon';
import {numberWithCommas} from './AppLogic';

const CartItem = (props) => {
    const item = props.cartItem

    let variant;
    if(item.category === "tools" && item.name !== "Axe"){
        variant = <div className="cart-item-info">
                    <strong>Style: {item.variant}</strong>
                </div>;
    } else {
        variant = "";
    }

    let subTotal = numberWithCommas(item.subTotal)

    return (
        <div className="cart-item">
            <div className="flex-center-align">
                <img className="item-pic" src={item.src} alt=""></img>
                <div>
                    <div className="cart-item-info">
                        <Link className="item-name" to={`/shop/${item.id}`}>{item.name}</Link>
                    </div>
                    <div className="cart-item-info">
                        <strong>Quantity: </strong>
                        <input type="number" defaultValue={item.quantity} onChange={(e) => props.editQuantity(props.id,e)} min="1"></input>
                    </div>
                    {variant}
                    <div className="cart-item-info">
                        <button onClick={() => props.removeItemFromCart(props.id)}>Remove from cart</button>
                    </div>
                </div>
            </div>
            
            <div className="flex-center-align">
                <BellsIcon /> <strong>{subTotal} </strong> <span style={{"margin-left": "3px"}}>Bells</span>
            </div>
        </div>
    )
}

export default CartItem;