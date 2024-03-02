import {
  worldSVG,
  graduateCapSVG,
  personRunningSVG,
  colorPaletteSVG,
  volunteeringSVG,
} from "./ContentIcons";

const sectionDetails = [
  {
    id: "athletics",
    name: "athletics",
    link: "athletics",
    svg: personRunningSVG,
  },
  {
  id: "education",
    name: "education",
    link: "education",
    svg: graduateCapSVG,
  },
  {
    id: "extracurriculars",
    name: "extracurriculars",
    link: "extracurriculars",
    svg: worldSVG,
  },
  {
    id: "designs",
    name: "designs",
    link: "designs",
    svg: colorPaletteSVG,
  },
  {
    id: "volunteering",
    name: "volunteering",
    link: "volunteering",
    svg: volunteeringSVG,
  },
];

export default sectionDetails;
