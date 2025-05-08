import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = () => {
  return (
    <div>
      <h1>Welcome to the Index Page</h1>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<h2>Home Page</h2>} />
            <Route path="/about" element={<h2>About Page</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Index;
