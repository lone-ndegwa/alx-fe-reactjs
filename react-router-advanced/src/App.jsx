import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Dynamic blog route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
