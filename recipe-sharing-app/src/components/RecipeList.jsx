import React, { useEffect } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const { recipes, filteredRecipes, filterRecipes, searchTerm } = useRecipeStore(state => ({
    recipes: state.recipes,
    filteredRecipes: state.filteredRecipes,
    filterRecipes: state.filterRecipes,
    searchTerm: state.searchTerm,
  }));

  useEffect(() => {
    filterRecipes();
  }, [recipes, searchTerm, filterRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      <ul>
        {filteredRecipes.map(recipe => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
