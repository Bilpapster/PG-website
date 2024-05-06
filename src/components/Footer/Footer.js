import React from "react";

import content from "../../content/ContentFooter";
import {
  githubSVG,
  copyrightSVG,
  heartSVG,
  facebookSVG,
  linkedinSVG,
  emailSVG,
  instagramSVG,
} from "../../content/ContentIcons";
import Button from "../UI/Button";
import { contactDetails } from "../../content/ContentPersonalInfo";

const contactIcons = [emailSVG, linkedinSVG, facebookSVG, instagramSVG];

const emailLink = contactDetails
  .filter((contactEntry) => contactEntry.id == "email")
  .map((contactEntry) => contactEntry.link);
const linkedInLink = contactDetails
  .filter((contactEntry) => contactEntry.id == "linkedIn")
  .map((contactEntry) => contactEntry.link);
const facebookLink = contactDetails
  .filter((contactEntry) => contactEntry.id == "facebook")
  .map((contactEntry) => contactEntry.link);
const instagramLink = contactDetails
  .filter((contactEntry) => contactEntry.id == "instagram")
  .map((contactEntry) => contactEntry.link);

const Footer = (props) => {
  const additionalClassesForFooterIcons =
    "fa-2xl hover:text-secondary hover:cursor-pointer transition ease-out duration-500 motion-safe:hover:animate-wiggle";
  const contactIcons = [
    {
      icon: (
        <i class={`fa-brands fa-at ${additionalClassesForFooterIcons}`}></i>
      ),
      link: emailLink,
    },
    {
      icon: (
        <i
          class={`fa-brands fa-linkedin ${additionalClassesForFooterIcons}`}
        ></i>
      ),
      link: linkedInLink,
    },
    {
      icon: (
        <i
          class={`fa-brands fa-square-facebook ${additionalClassesForFooterIcons}`}
        ></i>
      ),
      link: facebookLink,
    },
    {
      icon: (
        <i
          class={`fa-brands fa-square-instagram ${additionalClassesForFooterIcons}`}
        ></i>
      ),
      link: instagramLink,
    },
  ];

  return (
    <footer className="bg-secondary bg-opacity-20 group py-6 mt-4 text-trietary-dark italic text-sm font-firaSans">
      <div className="container">
        <div className="grid grid-cols-12 gap-0">
          <div className="separator col-span-12">Stay in touch with Maria</div>
          <div className="col-span-12 pt-4 pb-8 justify-self-center">
            {contactIcons.map((contactIcon) => {
              return (
                <a
                  className="transition-none px-3 x-24 h-24 "
                  href={contactIcon.link}
                  target="_blank"
                >
                  {contactIcon.icon}
                </a>
              );
            })}
            {/* </div> */}
          </div>
          {/* <div className="col-span-12 h-0.5 bg-trietary-light my-8"></div> */}
          <div className="col-span-12 md:col-span-9 my-auto p-0">
            <div className="inline-block pr-2 align-middle">{copyrightSVG}</div>
            Maria Kavouridou, 2023-2024. Developed by Bilpapster with{" "}
            <div className="inline-block align-middle pr-1 group-hover:text-red-600 group-hover:animate-heart-beat">
              {heartSVG}
            </div>
            , using HTML5, TailwindCSS & ReactJS.
          </div>
          <Button
            aClass="not-italic col-span-12 md:col-span-3 mt-4 md:mt-0 w-fit justify-self-center md:justify-self-end"
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
