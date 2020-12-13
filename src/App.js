import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';


const App = () => {
  const APP_ID = "03356213";
  const APP_KEY = "b69448df65a184e9c86aae2fe6e2952b";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");
  

  useEffect(() => {
    getRecipes();
  
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
    <div className="container">
      
    </div>
    <form onSubmit = {getSearch} className="search-form">
      <input 
        className="search-bar" 
        type="text" 
        value = {search} 
        onChange={handleChange}/>
      <button
      type="submit"
      className="search-button"
      >Search</button>
    </form>
    <div className="recipes">
    {recipes.map((recipe,index) => (
      <Recipe
        key = {index}
        title= {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        image = {recipe.recipe.image}
        ingredient = {recipe.recipe.ingredients}
      />
    ))}
    </div>
</div>
  );
}

export default App;
