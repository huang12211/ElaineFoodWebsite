import {getRecipeInfo, getRecipeInfoIngredients} from './api/recipe.js';

// TO DO: figure out a way to store the recipe that was selected/clicked in persistent memory 
// given the name of the recipe stored in persistent memory, 
// this script fetches the ingredients and the directions dynamically from the SQlite Database

const recipeName = 'fluffy-blueberry-muffins'; //TO DO: to be replaced by the page's URL
// let url = window.location.pathname;
// console.log('window.location.pathname', window.location.pathname)

let videoSource = document.getElementsByClassName("mobileVideo")[0];
let directionsList = document.getElementById("directionsContent");
let recipeContent;

//Populate the Directions section of the Recipe
(async () => {
  recipeContent = await getRecipeInfo(recipeName.replaceAll("-", " "));
  console.log('recipeContent is: ', recipeContent);
  document.getElementsByTagName("title").innerHTML = recipeContent[0]['name'];
  document.getElementById("recipeName").innerHTML = recipeContent[0]['name'];
  document.getElementById("numbOfViews").innerHTML = recipeContent[0]['numRatings'];
  videoSource.setAttribute('src', recipeContent[0]['video']);

  let directionsArray = recipeContent[0]['directions'].split("\n");
  // console.log('directionsArray', directionsArray);
  directionsList.innerHTML = ''; //clear the directions content before appending
  for (var i = 0; i < directionsArray.length; i++){
    var direction = document.createElement('li');
    direction.innerHTML = directionsArray[i];
    directionsList.appendChild(direction);
  }
})();

let recipeIngredientsList = document.getElementById("ingredientsList");

(async () => {
  let listIngrToDisplay = await getRecipeInfoIngredients(recipeName);
  // console.log('listIngrToDisplay is: ', listIngrToDisplay);

  recipeIngredientsList.innerHTML = ''; //clear the ingredients list before appending
  for (var i = 0; i < listIngrToDisplay.length; i++){
    var newDiv = document.createElement('div');
    newDiv.innerHTML = `<input type="checkbox" name="ingr"/>
      <label for="ingr3" class="strikethrough"><span class="quantity">${listIngrToDisplay[i]['amount']}</span><span class="measurementUnit"> ${listIngrToDisplay[i]['measUnit_id']}</span> ${listIngrToDisplay[i]['ingredient_id']}<span class="minQuantity hidden">${listIngrToDisplay[i]['min_amount']}</span></label>`
    recipeIngredientsList.appendChild(newDiv);
  }
})();










