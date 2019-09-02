import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default ({ pageContext: { recipe } }) => (
  <Layout title={recipe.recipeName}>
    <div style={{ width: 960, margin: "4rem auto" }}>
      <Link to='/recipes/'>&laquo;All Recipes</Link>
      <h4>Ingredients</h4>
      <ul>
        { recipe.ingredients.map(ingredient => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  </Layout>
)
