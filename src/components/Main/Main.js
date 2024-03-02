import React from "react";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Education from "./Education/Education";
import AchievementsDisplay from "./Achievements/AchievementsDisplay";
import Sections from "./Sections/Sections";

const Main = (props) => {
  return (
    <main className="bg-whiteSmoke pb-6">
      <Contact />
      <About />
      <Sections />
      {/* <Education /> */}
      {/* <AchievementsDisplay /> */}
    </main>
  );
};

export default Main;
