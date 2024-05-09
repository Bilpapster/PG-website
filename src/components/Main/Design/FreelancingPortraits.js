import React from "react";
import freelancingPortraits from "../../../content/ContentDesigns";

import { freelancingText } from "../../../content/ContentDesigns";

const FreelancingPortraits = (props) => {
  return (
    <section>
      <p className="pb-1 lg:pb-4">{freelancingText}</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-center w-full">
        {freelancingPortraits
          .filter((portrait) => !portrait.highlight)
          .map((portrait) => {
            return (
              <div className="flex pb-2 pr-2 items-center">
                <div className="max-w-xs w-fit">
                  <img
                    className="rounded-md rounded-r-none shadow-lg"
                    src={portrait.original_image}
                  />
                </div>
                <div className="max-w-xs w-fit">
                  <img
                    className="rounded-md rounded-l-none shadow-lg"
                    src={portrait.portrait_image}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default FreelancingPortraits;
