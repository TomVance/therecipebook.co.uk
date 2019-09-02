/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const recipies = require('./recipies.json')
exports.createPages = async ({ actions: { createPage } }) => {
  createPage({
    path: `/recipes/`,
    component: require.resolve("./src/templates/recipes.js"),
    context: { recipies },
  })


  recipies.forEach(recipe => {
    createPage({
      path: `/recipe/${recipe.id}/`,
      component: require.resolve("./src/templates/recipe.js"),
      context: { recipe },
    })
  })
}
