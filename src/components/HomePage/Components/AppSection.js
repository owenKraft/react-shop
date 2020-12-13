import React from "react";
import {Link} from "react-router-dom";

const AppSection = () => {

    return(
        <div className="app-section">
            <div className="app-section-header">
                    <h2 className="app-section-header-text">Get the app</h2>
            </div>
            <div className="app-section-body">
                <p>
                    Access our world class inventory from the remotest of islands! With just a few clicks, you can order anything you'd like, and we'll deduct funds from your Bank of Nook account.
                </p>
                <p>
                    <strong>Available now exclusively on nookOS!</strong>
                </p>
            </div>
            <div className="app-section-img-div">
                <img className="app-section-img" src="https://static.wikia.nocookie.net/animalcrossing/images/a/a1/NH-Icon-Nook_Phone-Nook_shopping.png" alt=""></img>
            </div>
        </div>
    )
}

export { AppSection };