import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import Navbar from "../layouts/Navbar";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
