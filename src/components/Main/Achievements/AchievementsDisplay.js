import React from "react";
import SectionTitle from "../../UI/SectionTitle";

import achievements from "../../../content/ContentAchievements";
import races from "../../../content/ContentRaces";
import AchievementShortItem from "./AchievementShortItem";
import AchievementPostcard from "./AchievementPostcard";
import Button from "../../UI/Button";

import { linkSVG } from "../../../content/ContentIcons";

const AchievementsDisplay = (props) => {
  return (
    <React.Fragment>
      <section id="athletic_highlights" className="container text-center">
        <SectionTitle>Achievements</SectionTitle>

        {achievements.map((achievement) => {
          return (
            <AchievementShortItem
              key={achievement.id}
              number={achievement.number}
              description={achievement.text}
            />
          );
        })}
      </section>

      <section id="athletic_highlights" className="container text-center">
        <SectionTitle>Highlights</SectionTitle>
        <div className="grid grid-cols-12 gap-8 place-items-center pt-6">
          {races
            .filter((race) => race.highlight)
            .map((race) => {
              return (
                <AchievementPostcard
                  key={race.id}
                  title={race.name}
                  date={race.date}
                  location={race.location}
                  imageSrc={race.image}
                  rankGeneral={race.rankGeneral}
                  rankAgeGroup={race.rankAgeGroup}
                  record={race.record}
                  distance={race.distance}
                  link={race.link}
                />
              );
            })}
        </div>
      </section>

      <section id="all_races" className="container text-center">
        <SectionTitle>All races</SectionTitle>
        <div>
          <table className="overflow-scroll">
            <thead>
              {/* <th>Id</th> */}
              <th>Race name</th>
              <th>Location</th>
              <th>Distance</th>
              <th>Finish</th>
              <th>Date</th>
              <th>Rank</th>
              <th>Rank (U18)</th>
              <th>Results</th>
              {/* <th>Certificate</th> */}
            </thead>
            <tbody>
              {races.map((race) => {
                return (
                  <tr>
                    <td>{race.name}</td>
                    <td>{race.location}</td>
                    <td>{race.distance}</td>
                    <td>{race.record}</td>
                    <td>{`${race.date.getDate()}/${
                      race.date.getMonth() + 1
                    }/${race.date.getFullYear()}`}</td>
                    <td className="text-center">{race.rankGeneral}</td>
                    <td className="text-center">{race.rankAgeGroup}</td>
                    <td className="text-center">
                      {race.link ? (
                        <a
                          className="cursor-pointer transition ease-out hover:text-secondary-normal "
                          href={race.link}
                          target="_blank"
                        >
                          {linkSVG}
                        </a>
                      ) : (
                        ""
                      )}
                    </td>
                    {/* <td>{""}</td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AchievementsDisplay;
