import {getRecipeInfo} from './api/recipe.js';

// TO DO: figure out a way to store the recipe that was selected/clicked in persistent memory 
// given the name of the recipe stored in persistent memory, 
// this script fetches the ingredients and the directions dynamically from the SQlite Database

const recipeName = 'Fluffy Blueberry Muffins'; //TO DO: to be replaced by recipe saved in persistent memory

let recipeIngredientsList = document.getElementById("ingredientsList");
let videoSource = document.getElementsByClassName("mobileVideo")[0];
let directionsList = document.getElementById("directionsContent");
let recipeContent;
// let unparsedDirections; 

(async () => {
  recipeContent = await getRecipeInfo(recipeName);
  console.log('recipeContent is: ', recipeContent);
  document.getElementsByTagName("title").innerHTML = recipeContent[0]['name'];
  document.getElementById("recipeName").innerHTML = recipeContent[0]['name'];
  document.getElementById("numbOfViews").innerHTML = recipeContent[0]['numRatings'];
  videoSource.setAttribute('src', recipeContent[0]['video']);
  let directionsArray = recipeContent[0]['directions'].split("\n");
  console.log('directionsArray', directionsArray);

  directionsList.innerHTML = ''; //clear the directions content before appending
  for (var i = 0; i < directionsArray.length; i++){
    var direction = document.createElement('li');
    direction.innerHTML = directionsArray[i];
    directionsList.appendChild(direction);
  }
})();










