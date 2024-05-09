import React from "react";
import { graphicDesignsContent } from "../../../content/ContentDesigns";

function GraphicDesigns() {
  return (
    <section>
      <div className="flex flex-row flex-wrap justify-evenly items-center">
        {graphicDesignsContent.map((graphicDesign) => {
          return (
            <div className="graphic-design-container self-center">
              <img className="rounded-lg shadow-lg" src={graphicDesign.image} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GraphicDesigns;
