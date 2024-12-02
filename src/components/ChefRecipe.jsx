import React from "react";

import ReactMarkdown from "react-markdown";

export default function ChefRecipe({recipe}) {
  return (
    <section>
      <ReactMarkdown >
      {recipe}
      </ReactMarkdown>
    </section>
  );
}
