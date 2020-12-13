import React from "react";
import {Link} from "react-router-dom";

const HeroSection = () => {

    return(
        <div className="hero-section">
            <div className="hero-text-area">
                <h1 className="hero-title"><span>Welcome to </span>
                <span style={{"width":"100%"}}>Nook's Cranny</span></h1>
                <p>
                    Nook's Cranny is your one-stop shop for all your island needs. Whether you're looking for a sturdy shovel, stylish furniture, or the latest seasonal item, we've got you covered.
                </p>
                <div className="flex-center-justify">
                    <Link to="/shop">
                        <button className="hero-btn">
                            Start shopping
                        </button>
                    </Link>
                </div>

            </div>
            <div className="hero-image-div">
                <img className="hero-image" src="https://dodo.ac/np/images/3/3c/Nook%27s_Cranny_%28Upgraded%29_NH_Map_Icon.png" alt=""></img>
            </div>
        </div>
    )

}

export { HeroSection };