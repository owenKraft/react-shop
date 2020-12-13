// import React, { useEffect, useState }  from 'react';
import React from 'react';
import Item from './Item'
import Inventory from './Inventory';
import BellsIcon from './Misc/BellsIcon';
import {Link} from "react-router-dom";

const SuggestedShopping = (props) => {

    const suggestedInv = Inventory.filter(item => item.category === props.category && item.name !== props.name);

    return (
        <div>
            <h2>You might also be interested in</h2>
                <div className="item-area">
                    {suggestedInv.map((x, i) =>
                        <Item 
                            key={i}
                            item={suggestedInv[i]}
                            addItemToCart={props.addItemToCart}
                        />
                    )}
            </div>
        </div>
    );
};

export default SuggestedShopping;