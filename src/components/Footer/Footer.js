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
        <div className="flex items-center justify-between">
        <div className="footer-text  w-3/5 align-middle">
          <div className="inline-block align-top pr-2">{copyrightSVG}</div>
          Maria Kavouridou, 2023-2024. Developed by Bilpapster with{" "}
          <div className="inline-block align-top pr-1 group-hover:text-red-600 group-hover:animate-heart-beat">{heartSVG}</div>, pride &
          admiration for his life partner, using HTML5, TailwindCSS & ReactJS.
        </div>
        <Button
          aClass="not-italic"
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
