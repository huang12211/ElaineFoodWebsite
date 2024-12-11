import {getRecipeInfo} from './api/recipe.js';

// TO DO: figure out a way to store the recipe that was selected/clicked in persistent memory 
// given the name of the recipe stored in persistent memory, 
// this script fetches the ingredients and the directions dynamically from the SQlite Database

const recipeName = "Fluffy Blueberry Muffins" //TO DO: to be replaced by recipe saved in persistent memory

const recipeIngredientsList = document.getElementById("ingredientsList")

(async () => {
  let recipeContent = await getRecipeInfo(recipeName);
})();

for (var i = 0; i < recipeContent.length; i++){
  var divIngredient = document.createElement('div');
  recipeIngredientsList.appendChild(divIngredient);
}

console.log(recipeContent)




