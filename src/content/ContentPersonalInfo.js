import {
  facebookSVG,
  linkedinSVG,
  instagramSVG,
  emailSVG,
  locationSVG,
} from "./ContentIcons";

const personalInfo = {
  name: "Maria",
  surname: "Kavouridou",
  role: "Long Distance Runner | Student | Artist ",
};

export const contactDetails = [
  // {
  //   id: "location",
  //   name: "Kozani, Greece",
  //   link: "https://maps.app.goo.gl/DNVEsqiZGCYwXnwS6",
  //   svg: locationSVG,
  // },
  {
    id: "email",
    name: "mariakavour4@gmail.com",
    link: "mailto:mariakavour4@gmail.com",
    svg: emailSVG,
  },
  {
    id: "linkedIn",
    name: "Maria Kavour",
    link: "https://www.linkedin.com/in/maria-kavouridou/",
    svg: linkedinSVG,
  },
  {
    id: "facebook",
    name: "Maria Kavour",
    link: "https://www.facebook.com/profile.php?id=100043781689841",
    svg: facebookSVG,
  },
  {
    id: "instagram",
    name: "its.pg_official",
    link: "https://www.instagram.com/its.pg_official/",
    svg: instagramSVG,
  },
];

export default personalInfo;
