import React  from 'react';
import {Link} from "react-router-dom";
import BellsIcon from './Misc/BellsIcon';
import {numberWithCommas} from './AppLogic';

const Item = (props) => {
    const item = props.item

    let unitPrice = numberWithCommas(item.unitPrice)

    return (
        <div className="item">
            <img className="item-pic" src={item.src} alt=""></img>
            <div className="item-name-div">
                <Link to={`/shop/${item.id}`} className="item-name">{item.name}</Link>
            </div>
            <div className="item-price-div">
                <BellsIcon /> {unitPrice} Bells
            </div>
        </div>
    )
}

export default Item;