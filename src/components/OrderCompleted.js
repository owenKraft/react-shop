import React from "react";
import {Link} from "react-router-dom";

const OrderCompleted = () => {
    return (
        <div>
            <div className="flex-center-justify flex-center-align order-complete-area">
                <div className="order-complete-text-area">
                    <div className="order-complete-header">Congrats!</div>
                    <div className="order-complete-body">Your order is on your way. Check your mailbox tomorrow.</div>
                </div>
                <img className="order-complete-pic" src="https://i.pinimg.com/originals/4e/7c/da/4e7cda72d0daa9b605cc735b61eb198d.png"></img>
            </div>
        </div>
    );
};

export default OrderCompleted;