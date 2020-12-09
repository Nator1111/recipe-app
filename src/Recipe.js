import React from "react";
import style from "./recipes.module.css";
import capsicum from "./images/capsicum.png";

const Recipe = ({title, calories, image, ingredients, url}) => {
    
    return (
        <div className = {style.recipes}>
            <h1>{title}</h1>
                <img src = {image} alt = ' '/>
                <h2> Ingredients </h2>
                    <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                <h2> Calories </h2>
                    <p>The total calories in this meal are: <b>{calories.toFixed(2)}</b></p>
                <h2> Ratings/How To Prepare</h2>
                    <p>Want to know how to prepare this meal? Click the pepper below!</p>    
                    <a href= {url}><img src={capsicum} alt = "Click me"/></a>   
        </div>
    )
}

export default Recipe;