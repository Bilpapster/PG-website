import React, { useState } from "react";
import Button from "../../UI/Button";
import {
  linkSVG,
  calendarSVG,
  stopwatchSVG,
  locationSmallSVG,
  medalSVG,
  distanceSVG,
} from "../../../content/ContentIcons";
import InfoDisplay from "./InfoDiplay";
import MedalBadge from "../../UI/MedalBadge";
import PlaceHolder from "../../UI/PlaceHolder";
import PeerHoverElement from "../../UI/PeerHoverElement";

import { getRankLiteral } from "../../../utils/utils";

const GENERAL_RANK_MEDAL = "medal-general";
const AGE_GROUP_RANK_MEDAL = "medal-age-group";
const GENERAL_RANK_TEXT = "1st in general ranking";
const AGE_GROUP_RANK_TEXT = "2nd in u18 ranking";

const AchievementPostcard = (props) => {
  const formattedDate = `${props.date.getDate()}/${
    props.date.getMonth() + 1
  }/${props.date.getFullYear()}`;

  return (
    <div class="flex h-fit col-span-12 md:col-span-6 lg:col-span-4 items-center justify-center font-specialElite">
      <div class="group/skata h-96 w-80 [perspective:1000px]">
        <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-700 [transform-style:preserve-3d] group-hover/skata:[transform:rotateY(180deg)]">
          <div class="absolute inset-0">
            <img
              class="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
              src={props.imageSrc}
              alt=""
            />
          </div>
          <div class="absolute inset-0 h-full w-full rounded-xl bg-white/80 px-12 text-center text-trietary-dark [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div class="flex min-h-full flex-col items-start justify-center">
              <h1 class="text-3xl font-bold pb-6">{props.title}</h1>

              <div className="grid grid-cols-2 items-center">
                <div className="grid grid-cols-1 justify-items-start">
                  <InfoDisplay text={props.location} svg={locationSmallSVG} />
                  <InfoDisplay text={formattedDate} svg={calendarSVG} />
                  <InfoDisplay text={props.distance} svg={distanceSVG} />
                  <InfoDisplay text={props.record} svg={stopwatchSVG} />
                </div>
                <div className="justify-self-center font-kalam">
                  <MedalBadge
                    classes="pr-4 peer/general"
                    divId={GENERAL_RANK_MEDAL}
                    rank={props.rankGeneral}
                  />
                  <MedalBadge
                    classes="peer/ageGroup"
                    divId={AGE_GROUP_RANK_MEDAL}
                    rank={props.rankAgeGroup}
                  />

                  {/* placeholder */}
                  <div
                    className={`block pt-1 text-transparent select-none peer-hover/general:hidden peer-hover/ageGroup:hidden`}
                  >
                    skata ki aposkata malaka
                  </div>

                  {/* general ranking text */}
                  <div className={`hidden peer-hover/general:block pt-1`}>
                    {`${getRankLiteral(props.rankGeneral)} in general ranking`}
                  </div>

                  <div className={`hidden peer-hover/ageGroup:block pt-1`}>
                    {`${getRankLiteral(props.rankAgeGroup)} in u18 ranking`}
                  </div>
                </div>
              </div>

              <Button
                aClass="font-firaSans fixed bottom-2 right-2"
                link={props.link}
                target="_blank"
                buttonText="Results"
                svg={linkSVG}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AchievementPostcard;
