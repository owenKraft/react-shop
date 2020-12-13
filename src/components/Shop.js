import React, { useEffect, useState }  from 'react';
import Item from './Item';
import Inventory from './Inventory';

const Shop = (props) => {

    const furnitureInv = Inventory.filter(item => item.category === "furniture");
    const toolsInv = Inventory.filter(item => item.category === "tools");
    const seasonalInv = Inventory.filter(item => item.category === "seasonal");


    return (
        <div>
            <h2>Seasonal</h2>
            <div className="item-area">
                {seasonalInv.map((x, i) =>
                    <Item 
                        key={i}
                        item={seasonalInv[i]}
                        addItemToCart={props.addItemToCart}
                    />
                )}
            </div>
            <h2>Furniture</h2>
            <div className="item-area">
                {furnitureInv.map((x, i) =>
                    <Item 
                        key={i}
                        item={furnitureInv[i]}
                        addItemToCart={props.addItemToCart}
                    />
                )}
            </div>
            <h2>Tools</h2>
            <div className="item-area">
                {toolsInv.map((x, i) =>
                    <Item 
                        key={i}
                        item={toolsInv[i]}
                        addItemToCart={props.addItemToCart}
                    />
                )}
            </div>
        </div>
    );
};

export default Shop;