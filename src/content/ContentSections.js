import {
  worldSVG,
  graduateCapSVG,
  personRunningSVG,
  colorPaletteSVG,
  volunteeringSVG,
} from "./ContentIcons";

import volunteering_cover from "../assets/volunteering/volunteering cover.jpg";
import education_cover from "../assets/education/education cover.jpg";
import extracurriculars_cover from "../assets/extracurriculars/extracurriculars cover.JPG";
import athletics_cover from "../assets/images/athletics cover.jpg";
import designs_cover from "../assets/designs/freelancing/designs cover.jpg";

const sectionDetails = [
  {
    id: "athletics",
    name: "athletics",
    description: "Athletic distinctions & race results",
    link: "athletics",
    svg: personRunningSVG,
    image: athletics_cover,
  },
  {
    id: "education",
    name: "education",
    description: "Academic history & achievements",
    link: "education",
    svg: graduateCapSVG,
    image: education_cover,
  },
  {
    id: "extracurriculars",
    name: "extracurriculars",
    description: "Leisure activities & self-projects",
    link: "extracurriculars",
    svg: worldSVG,
    image: extracurriculars_cover,
  },
  {
    id: "designs",
    name: "designs",
    description: "Graphics, paintings & photography",
    link: "designs",
    svg: colorPaletteSVG,
    image: designs_cover,
  },
  {
    id: "volunteering",
    name: "volunteering",
    description: "Returning love to nature & humans",
    link: "volunteering",
    svg: volunteeringSVG,
    image: volunteering_cover,
  },
];

export default sectionDetails;
