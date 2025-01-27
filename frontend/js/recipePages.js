////////////////////////////////////////////////////////////
// This script fetches the ingredients and the directions //
// dynamically from the SQlite Database                   //
////////////////////////////////////////////////////////////

import {getRecipeInfo, getRecipeInfoIngredients} from './api/recipe.js';
import { launchServingSizeCalculations } from './servingSizes.js';

function loadRecipe(){
  //-------------------------------------------------//
  // Identify the recipe you want by reading the URL //
  //-------------------------------------------------//
  let url = window.location.pathname;
  // console.log('window.location.pathname', window.location.pathname);
  const regex = url.match('(?<=recipes\/)[a-zA-Z0-9\-]+$');
  const recipeName = regex[0];
  console.log("recipeName is: ", recipeName);

  let videoSource = document.getElementsByClassName("mobileVideo")[0];
  let directionsList = document.getElementById("directionsContent");
  let recipeContent;

  //-----------------------------------------------//
  // Populate the Directions section of the Recipe //
  //-----------------------------------------------//
  (async () => {
    recipeContent = await getRecipeInfo(recipeName.replaceAll("-", " "));
    console.log('recipeContent is: ', recipeContent);
    document.title = recipeContent[0]['name'];
    document.getElementById("recipeName").innerHTML = recipeContent[0]['name'];
    document.getElementById("numbOfViews").innerHTML = recipeContent[0]['numRatings'];
    document.getElementById("serving").value = recipeContent[0]['initialServing'].toString();
    document.getElementById("serving").min = recipeContent[0]['minServing'].toString();
    document.getElementById("serving").max = recipeContent[0]['maxServing'].toString();
    document.getElementById("serving").step = recipeContent[0]['servingIncrements'].toString();

    // videoSource.setAttribute('src', recipeContent[0]['video']);
    // console.log("videoSource node", videoSource);
    // console.log("videoSource src link", recipeContent[0]['video']);
    //Populate video if it exists
    if (recipeContent[0]['video'] == "null"){
      var parent = document.getElementsByClassName("mobileVideoContainer")[0];
      console.log("parent", parent);
      var noVideo = document.createElement('div');
      noVideo.innerText = `Video is Coming Soon...`;
      noVideo.className = "mobileVideo flex items-center justify-center border";
      parent.appendChild(noVideo);
      videoSource.remove();
      
    }
    else{
      videoSource.setAttribute('src', recipeContent[0]['video']);
    }
    

    let directionsArray = recipeContent[0]['directions'].split("\n");
    // console.log('directionsArray', directionsArray);
    directionsList.innerHTML = ''; //clear the directions content before appending
    for (var i = 0; i < directionsArray.length; i++){
      var direction = document.createElement('li');
      direction.innerHTML = directionsArray[i];
      directionsList.appendChild(direction);
    }
  })();


  //---------------------------------------------//
  // Populate the Ingredients List of the Recipe //
  //---------------------------------------------//
  let recipeIngredientsList = document.getElementById("ingredientsList");

  (async () => {
    let listIngrToDisplay = await getRecipeInfoIngredients(recipeName);
    // console.log('listIngrToDisplay is: ', listIngrToDisplay);

    recipeIngredientsList.innerHTML = ''; //clear the ingredients list before appending
    for (var i = 0; i < listIngrToDisplay.length; i++){
      var newDiv = document.createElement('div');
      newDiv.className = "ingredientListItem";
      newDiv.innerHTML = `<input type="checkbox" name="ingr"/>
        <label for="ingr" class="strikethrough"><span class="quantity">${listIngrToDisplay[i]['amount']}</span><span class="measurementUnit"> ${listIngrToDisplay[i]['measUnit_id']}</span> ${listIngrToDisplay[i]['ingredient_id']}<span class="minQuantity hidden">${listIngrToDisplay[i]['min_amount']}</span></label>`
      recipeIngredientsList.appendChild(newDiv);
    }
    launchServingSizeCalculations();
  })();
  // console.log("event to update recipe content was triggered.")
}

export {loadRecipe};





