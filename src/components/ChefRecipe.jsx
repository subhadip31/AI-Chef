import React from "react";

import ReactMarkdown from "react-markdown";

export default function ChefRecipe({ recipe }) {
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Bite Buddy Recommends:</h2>
      <ReactMarkdown>{recipe}</ReactMarkdown>
    </section>
  );
}
