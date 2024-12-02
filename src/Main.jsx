import React, { useState } from "react";
import IngredientsList from "./components/IngredientsList";
import ChefRecipe from "./components/ChefRecipe";
import { getRecipeFromMistral } from "./ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  function submit(event) {
    event.preventDefault();
    const formEle = event.currentTarget;
    const formdata = new FormData(formEle);
    const newIngredient = formdata.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    formEle.reset();
  }

  async function getRecipe() {
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main className="main">
      <form className="add-ingredient-form" onSubmit={submit}>
        <input name="ingredient" type="text" placeholder="eg. Bread" />
        <button>+ Add Ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientsList ingredientsArray={ingredients} clickHandler={getRecipe} />
      )}
      {recipe && <ChefRecipe recipe={recipe} />}
    </main>
  );
}
