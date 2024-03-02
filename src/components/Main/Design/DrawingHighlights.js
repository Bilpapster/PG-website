import React from "react";
import parse from 'html-react-parser';
import freelancingPortraits from "../../../content/ContentDesigns";

const DrawingHighlights = (props) => {
  return (
    <React.Fragment>
      {freelancingPortraits
        .filter((portrait) => portrait.highlight)
        .map((portrait) => {
          return (
            <div className="border-b border-b-trietary-light border-dashed lg:border-b-0 text-center">
              <div className="block lg:hidden pt-6 ">
                {parse(portrait.description)}
              </div>
              <div className="portrait-design-row">
                <div className="overflow-hidden col-span-6 lg:col-span-5">
                  <img src={portrait.original_image} />
                </div>
                <div className="overflow-hidden col-span-6 lg:col-span-5">
                  <img src={portrait.portrait_image} />
                </div>
                <div className="hidden lg:block lg:col-span-2 text-start ps-4">
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
