import React from "react";
import ReactDOM from "react-dom/client";
// import Online from "./online/Online.jsx";
import OnlineContent from "./online/OnlineContent";
import MockContent from "./online/Mock";
import StudyContent from "./online/Study";
import PreviousContent from "./online/Previous";
import CounselingContent from "./online/counseling";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <OnlineContent /> */}
    {/* <MockContent /> */}
    {/* <StudyContent /> */}
    {/* <PreviousContent /> */}
    <CounselingContent />
  </React.StrictMode>
);
