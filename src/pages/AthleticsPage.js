import React from "react";
import AchievementsDisplay from "../components/Main/Achievements/AchievementsDisplay";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const AthleticsPage = (props) => {
    return (
        <div>
            <Header />
            <AchievementsDisplay />
            <Footer />
        </div>

    );
};

export default AthleticsPage;