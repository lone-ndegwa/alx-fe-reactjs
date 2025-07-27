import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar'; // ⬅️ Import SearchBar

function App() {
  return (
    <div className="App">
      <h1>Recipe Sharing App</h1>

      <nav style={{ marginBottom: '20px' }}>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/add">Add Recipe</Link>
      </nav>

      {/* Show SearchBar only on the home page */}
      {window.location.pathname === '/' && <SearchBar />}

      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
      </Routes>
    </div>
  );
}

export default App;
