import React, { useEffect, useState }  from 'react';
import SuggestedShopping from './SuggestedShopping';
import Inventory from './Inventory';
import BellsIcon from './Misc/BellsIcon';
import {Link} from "react-router-dom";
import {numberWithCommas} from './AppLogic';

const ItemDetail = (props) => {
    const item = Inventory[props.match.params.id];

    const runOnClick = (e) => {
        props.addItemToCart(e,getVariant(),getQuantity());
        displayConfirmText();
    }

    const getQuantity = () => {
        const quantity = Number(document.querySelector("#quantity").value);

        return quantity;
    }
    
    const getVariant = () => {
        let variant
        if(document.querySelector("#variant") !== null){
            variant = document.querySelector("#variant").value;
        } else {
            variant = null;
        }
        
        return variant;
    }

    const displayConfirmText = () => {
        let confirmText = document.querySelector(".btn-confirm-text")
        confirmText.classList.add("fade-out")
        setTimeout(function(){confirmText.classList.remove("fade-out")},1000)
    }

    let unitPrice = numberWithCommas(item.unitPrice)

    let variant;
    if(item.category === "tools" && item.name !== "Axe"){
        variant = <div>
            <strong>Style: </strong>
                <select id="variant">
                    <option value="Standard">Standard</option>
                    <option value="Colorful">Colorful</option>
                    <option value="Outdoorsy">Outdoorsy</option>
            </select>
        </div>;
    } else {
        variant = "";
    }

    return (
        <div className="item-detail-area">
            <Link className="keep-shopping-text" to="/shop">
                &lt; Return to shop
            </Link>
            <div className="item-detail">
                <img className="item-pic" src={item.src} alt=""></img>
                <div className="item-detail-body">
                    <div className="item-detail-name">
                        <h1>{item.name}</h1>
                    </div>
                    <strong>Quantity: </strong><input id="quantity" type="number" defaultValue="1" min="1"></input>
                    {variant}
                    <div className="item-price-div">
                        <strong>Price: </strong><BellsIcon />{unitPrice} Bells
                    </div>
                    <div className="btn-div">
                        <button className="hero-btn" id={item.id} onClick={(e) => runOnClick(e)}>Add to cart</button>
                        <div className="btn-confirm-text flex-center-justify">
                            Added to cart!
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacer"></div>
            <SuggestedShopping
                name={item.name}
                category={item.category}
                addItemToCart={props.addItemToCart}
            />
        </div>
    );
};

export default ItemDetail;