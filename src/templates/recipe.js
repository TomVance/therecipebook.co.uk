import React from "react"

export default ({ pageContext: { recipe } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <h1>{recipe.recipeName}</h1>
  </div>
)
