import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients, time }) => {
  return (
    <div className={style.recipe}>
      <img src={image} alt="Image" className={style.recipeImage} />
      <h1 className={style.recipeHeader}>{title}</h1>
      <ul className={style.recipeIngredient}>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text} </li>
        ))}
      </ul>
      <p>{calories} calories</p>
    </div>
  );
};

export default Recipe;
