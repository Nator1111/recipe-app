import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = '778646cc';
  const APP_KEY = '3cf2096587923e80424d45eaa7360585';	

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  useEffect( () => {
    getRecipes();
    //console.log('Effect has been run');
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch = e => {
    e.preventDefault(); 
    setQuery(search);
    setSearch('');
  }

  return(
    <div className ="appBackground">
      <div className = "App"> 
        <h1 style= {{ color: "green", marginTop: "none" }}>Search For A Recipe!</h1>
          <p style= {{ color: "white" }}>Type in a food, like 'pizza' into the search bar below and find some great recipes!</p>
            <form onSubmit = {getSearch} className = "search-form">
              <input className = "search-Bar" type = "text" value = {search} onChange = {updateSearch}></input>
              <button className = "search-button" type = "submit">Search</button>
            </form>
            <div className = "recipes">
            {recipes.map(recipe => (
              <Recipe 
                key = {recipe.recipe.url}
                title = {recipe.recipe.label}
                calories = {recipe.recipe.calories}
                image = {recipe.recipe.image}
                ingredients = {recipe.recipe.ingredients}
                url = {recipe.recipe.url}
                />
            ))}
            </div>
      </div>
    </div>
  )
}

export default App;
