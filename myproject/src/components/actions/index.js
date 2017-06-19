export const selectRecipe = (recipe) => {
  console.log("You clicked on user: ", recipe.title);
  return {
    type: "RECIPE_SELECTED",
    loadr: recipe,
  }
};
