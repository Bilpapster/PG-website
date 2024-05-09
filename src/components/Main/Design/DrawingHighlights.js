import React from "react";
import parse from "html-react-parser";
import freelancingPortraits from "../../../content/ContentDesigns";

const DrawingHighlights = (props) => {
  return (
    <React.Fragment>
      {freelancingPortraits
        .filter((portrait) => portrait.highlight)
        .map((portrait) => {
          return (
            <div className="text-center w-fit pb-6">
              <div className="block lg:hidden">
                {parse(portrait.description)}
              </div>
              <div className="portrait-design-row">
                <div className="portrait-design-container">
                  <img src={portrait.original_image} />
                </div>
                <div className="portrait-design-container">
                  <img src={portrait.portrait_image} />
                </div>
                <div className="hidden lg:max-w-xs lg:block lg:col-span-2 text-start ps-4">
                  {parse(portrait.description)}
                </div>
              </div>
            </div>
          );
        })}
    </React.Fragment>
  );
};

export default DrawingHighlights;
