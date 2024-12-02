import React from "react";

export default function IngredientsList({ingredientsArray, clickHandler}) {

  const ingredientsList = ingredientsArray.map((ingredient) => {
    return (
      <li key={ingredient}>
        {ingredient[0].toUpperCase() + ingredient.slice(1)}
      </li>
    );
  });

  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list">{ingredientsList}</ul>
      {ingredientsArray.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={clickHandler}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
