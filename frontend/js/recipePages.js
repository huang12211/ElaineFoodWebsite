////////////////////////////////////////////////////////////
// This script fetches the ingredients and the directions //
// dynamically from the SQlite Database                   //
////////////////////////////////////////////////////////////

import {getRecipeInfo, getRecipeInfoIngredients} from './api/apiRecipe.js';
import { launchServingSizeCalculations } from './servingSizes.js';

function loadRecipe(){
  //-------------------------------------------------//
  // Identify the recipe you want by reading the URL //
  //-------------------------------------------------//
  let url = window.location.pathname;
  // console.log('window.location.pathname', window.location.pathname);
  var regex = url.match('(?<=recipes\/)[a-zA-Z0-9\-.\']+$');
  console.log("regex[0] is: ", regex[0]);
  var recipeName = regex[0];
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
      // console.log("parent", parent);
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

    //clear the loading list content before appending
    var olToRemove = directionsList.children[1];
    console.log("olToRemove", directionsList.children[1]); 
    olToRemove.remove();
    console.log("directionsContent innerHTML", directionsList.innerHTML);

    //Append the directions content 
    for (var i = 0; i < directionsArray.length; i++){
      console.log("directionsArray[0]", directionsArray[0].toString());
      if (directionsArray[0].toString().includes("title") == false){ //No title sections for this recipe exists
        if (i==0){
          var ol = document.createElement('ol');
          directionsList.appendChild(ol);
        }
        else{
          var li = document.createElement('li');
          li.innerHTML = directionsArray[i];
          ol.appendChild(li);
        }
      }
      else{ //This recipe has sections for individual components of the recipe
        if (directionsArray[i].toString().includes("title")){
          regex = directionsArray[i].match('title:\s*(.+)');
          console.log("regex of title", regex[1]);
  
          var directionsSection = document.createElement('div');
          directionsList.appendChild(directionsSection);
  
          var heading = document.createElement('h3');
          heading.className = "p-2";
          heading.innerHTML = regex[1];
          directionsSection.appendChild(heading);
  
          var ol = document.createElement('ol');
          directionsSection.appendChild(ol);
        }
        else{
          var li = document.createElement('li');
          li.innerHTML = directionsArray[i];
          ol.appendChild(li);
        }
      }
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
    var lastIngrTitleSection = "";
    for (var i = 0; i < listIngrToDisplay.length; i++){
      
      if(listIngrToDisplay[i]['component'] != null && 
         listIngrToDisplay[i]['component'] != lastIngrTitleSection){ //add an ingredients title section if required
        var ingrTitle = document.createElement('h3');
        ingrTitle.innerHTML = listIngrToDisplay[i]['component'];
        recipeIngredientsList.appendChild(ingrTitle);
        lastIngrTitleSection = listIngrToDisplay[i]['component'];
      }
      //add ingredients in the list
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

// //-----------------------------------------------------------------------//
// // Uncomment the following block if you are using dynamicRecipePage.html //
// //-----------------------------------------------------------------------//
// let url = window.location.pathname;
// // console.log('window.location.pathname', window.location.pathname);
// const regex = url.match('(?<=recipes\/)[a-zA-Z0-9\-.]+$');
// var recipeName = regex[0];
// console.log("recipeName is: ", recipeName);
// if (recipeName = "recipeDynamicContent.html"){
//   recipeName = "onion-pancakes";
//   loadRecipe();
// }

export {loadRecipe};





