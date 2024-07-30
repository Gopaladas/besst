import React from "react";
import Navbar from "./Navbar";
import Footer from "./components/Footer";
import Cuet_UG from "./Courses/Cuet_UG";
import Cuet_PG from "./Courses/Cuet_PG";
import Cuet_ncert from "./Courses/Cuet_ncert";
import Cuet_seba from "./Courses/Cuet_seba";
import { Routes, Route } from "react-router-dom";
import Service_online from "./online/OnlineContent";
import Service_mock from "./online/Mock";
import Service_download from "./online/Study";
import Service_previous from "./online/Previous";
import Service_councselling from "./online/counseling";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/cuet_ug" element={<Cuet_UG />} />
        <Route path="/cuet_pg" element={<Cuet_PG />} />
        <Route path="/cuet_ncert" element={<Cuet_ncert />} />
        <Route path="/cuet_seba" element={<Cuet_seba />} />
        <Route path="/Service_online" element={<Service_online />} />
        <Route path="/Service_mock" element={<Service_mock />} />
        <Route path="/Service_download" element={<Service_download />} />
        <Route path="/Service_previous" element={<Service_previous />} />
        <Route path="/Service_counselling" element={<Service_councselling />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
