import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Please list the ingredients.";
    } else {
      // Simple check: at least 2 items separated by commas or line breaks
      const items = ingredients.split(/[\n,]+/).filter((item) => item.trim() !== "");
      if (items.length < 2) {
        newErrors.ingredients = "Please enter at least two ingredients.";
      }
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // You can replace this with your actual data handling logic
    const recipeData = { title, ingredients, steps };
    console.log("Submitting recipe:", recipeData);

    // Reset form after successful submission
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="max-w-lg mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Add New Recipe</h2>

      {/* Recipe Title */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.title ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-green-400"
          }`}
          placeholder="Enter recipe title"
        />
        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
      </div>

      {/* Ingredients */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Ingredients</label>
        <textarea 
          rows="4"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.ingredients ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-green-400"
          }`}
          placeholder="List ingredients (comma or newline separated)"
        />
        {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
      </div>

      {/* Preparation Steps */}
      <div>
        <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
        <textarea 
          rows="5"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
            errors.steps ? "border-red-500 focus:ring-red-400" : "border-gray-300 focus:ring-green-400"
          }`}
          placeholder="Describe the preparation steps"
        />
        {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
      </div>

      {/* Submit Button */}
      <button 
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-lg font-medium hover:bg-green-600 transition duration-200"
      >
        Submit Recipe
      </button>
    </form>
  );
}
