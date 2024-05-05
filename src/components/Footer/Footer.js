import React from "react";

import content from "../../content/ContentFooter";
import {
  githubSVG,
  copyrightSVG,
  heartSVG,
  angleDownSVG,
} from "../../content/ContentIcons";
import Button from "../UI/Button";

const Footer = (props) => {
  return (
    <footer className="bg-secondary bg-opacity-20 group py-6 mt-4 text-trietary-dark italic text-sm font-firaSans">
      {/* <footer className="shadow-inner group py-3 text-trietary-dark italic text-sm font-firaSans"> */}
      <div className="container">
        <div className="grid grid-cols-12 gap-0">
          <div className="col-span-12 md:col-span-8 my-auto p-0">
            <div className="inline-block pr-2 align-middle">{copyrightSVG}</div>
            Maria Kavouridou, 2023-2024. Developed by Bilpapster with{" "}
            <div className="inline-block align-middle pr-1 group-hover:text-red-600 group-hover:animate-heart-beat">
              {heartSVG}
            </div>
            , using HTML5, TailwindCSS & ReactJS.
          </div>
          <Button
            aClass="not-italic col-span-12 md:col-span-4 mt-4 md:mt-0 w-fit justify-self-center md:justify-self-end"
            link="https://www.github.com/bilpapster"
            target="_blank"
            buttonText={content.buttonText}
            svg={githubSVG}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
