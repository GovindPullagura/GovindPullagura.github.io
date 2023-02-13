import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  );
};

export default AllRoutes;
