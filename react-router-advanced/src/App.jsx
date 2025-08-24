import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

// Temporary placeholder for the blog detail route
function BlogDetail() {
  return <h1>Blog Detail Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} /> {/* Required for check */}
      </Routes>
    </Router>
  );
}

export default App;
