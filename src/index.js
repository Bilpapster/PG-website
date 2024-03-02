import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import "./index.css";
import AthleticsPage from "./pages/AthleticsPage";
import EducationPage from "./pages/EducationPage";
import DesignsPage from "./pages/DesignsPage";
import VolunteeringPage from "./pages/VolunteeringPage";
import ExtracurricularsPage from "./pages/ExtracurricularsPage";
// import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "athletics",
    element: <AthleticsPage />
  },
  {
    path: "education",
    element: <EducationPage />
  },
  {
    path: "extracurriculars",
    element: <ExtracurricularsPage />
  },
  {
    path: "designs",
    element: <DesignsPage />
  },
  {
    path: "volunteering",
    element: <VolunteeringPage />
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Router> */}
      <RouterProvider router={router} />
      {/* <App /> */}
    {/* </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
