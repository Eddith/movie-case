import React from "react";

// ROUTER
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// PAGES
import Home from "../pages/Home";
import ListMovie from "../pages/ListMovie";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list-movie" element={<ListMovie />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
