import React from "react";

import ReactMarkdown from "react-markdown";

export default function ChefRecipe({recipe}) {
  return (
    <section className="suggested-recipe-container">
      <ReactMarkdown >
      {recipe}
      </ReactMarkdown>
    </section>
  );
}
