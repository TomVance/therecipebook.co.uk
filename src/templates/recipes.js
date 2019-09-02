import { Link } from "gatsby"
import React from "react"

export default ({ pageContext: { recipies } }) => (
  <div style={{ width: 960, margin: "4rem auto" }}>
    <ul>
      { recipies.map(recipe => (
        <li>
          <Link to={`/recipe/${recipe.id}`}>{recipe.recipeName}</Link>
        </li>
      ))}
    </ul>
  </div>
)
