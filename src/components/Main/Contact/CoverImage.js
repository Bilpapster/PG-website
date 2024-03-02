import React from "react";

import coverImage from "../../../assets/images/Cover photo.jpg";

const CoverImage = (props) => {
  return (
    <div className="py-6 620px:col-span-1 flex justify-center 620px:justify-items-end">
      <img
        className="rounded-full 620px:rounded-e-none w-72 620px:inline-block"
        src={coverImage}
        alt="Maria Kavouridou running during a race"
      />
    </div>
  );
};

export default CoverImage;
