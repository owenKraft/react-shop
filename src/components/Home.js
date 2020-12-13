import React from "react";
import {Link} from "react-router-dom";
import { HeroSection, FamilySection, AppSection } from './HomePage/HomeAggregator';


const Home = () => {
    return (
        <div>
            <HeroSection />
            <FamilySection />
            <AppSection />

            <div className="spacer"></div>
        </div>
    );
};

export default Home;