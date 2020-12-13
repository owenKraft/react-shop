import React from "react";
import {Link} from "react-router-dom";

const FamilySection = () => {

    return(
        <div className="family-section">
            <div className="family-section-img-div">
                <img className="family-section-img" src="https://japanesenintendo.files.wordpress.com/2020/03/1583497747dcfeee85469938d34dbc690990ccfaeb52dbcf82.png" alt=""></img>
            </div>
            <div className="family-section-body">
                <div className="family-section-header">
                    <h2 className="family-section-header-text">A family business</h2>
                </div>
                <p>
                    Nook's Cranny, a subsidiary of Nook Inc., is your local family owned-and-operated business. Many moons ago, I, Tom Nook, founded this vital enterprise. Nowadays, you're more likely to encounter my sons, Timmy and Tommy, who serve as my trustworthy day-to-day shopkeepers, while I work to expand Nook Inc. to new horizons!
                </p>
            </div>
        </div>
    )
}

export { FamilySection };