import { desktopRecipeCard } from "./components/recipeCard.js";
import { getRequestedRecipes, getRecipeInfo } from "./api/recipe.js";

const recipeSearchForm = document.getElementById("recipeSearchForm");

function getRecipeLink (recipeTitle){
    // recipeTitle
    let linkpreffix = './pages/Recipes/'
    let link = recipeTitle.replaceAll(' ', '');
    let linksuffix = '.html';
    let completeLink = linkpreffix.concat(link, linksuffix);
    console.log('completeLink is:', completeLink)
    return completeLink;
}

//takes in the array of recipes to return as part of the results 
function genDesktopRecipeCardList (recipeList) {
    console.log('input to genDesktopRecipeCardList function\'s recipe list is:', recipeList);

    let recipeCardListId = document.querySelector('#recipeCardList');

    //create a placeholder to hold all the new HTML content to add to the DOM 
    let recipeCardListLit = '';

    for (let i = 0; i < recipeList.length; i++){
        let recipe_link = getRecipeLink(recipeList[i].name);

        //Todo: update once bookmarks are implemented
        let bookmarked = false;

        let bg_color = 'white';
        newRecipeHTMLObject = new desktopRecipeCard(recipeList[i].name, recipe_link, recipeList[i].image_src, bookmarked, bg_color)
        recipeCardListLit = recipeCardListLit.concat(newRecipeHTMLObject.innerHTML);
    }
    
    console.log('newHTML code with RecipeCards', recipeCardListLit);
    recipeCardListId.innerHTML = recipeCardListLit; //update the innerHTML to the new HTML code
}

function searchForRecipes(event){
    //debugger
    event.preventDefault();

    let keywordsToFind= document.getElementById("keywords").value;
    let tagsToFind= document.getElementById("categories").value;
    let ingrToFind= document.getElementById("ingredients").value;


    (async () => {
        //When the fields of the search form are submitted, we send a call to the API with all of the search terms from the searchPage
        //the API returns a single array with list of recipes containing recipe name
        let searchResultsRecipes = await getRequestedRecipes(keywordsToFind, tagsToFind, ingrToFind);

        //look up the recipe names and collect the JSON object containing: recipe name, page link, recipe image, and bookmarked status;
        let searchResultsArray = await getRecipeInfo(searchResultsRecipes);

        //take in JSON objects and generate HTML recipe cards
        genDesktopRecipeCardList(searchResultsArray);
    })();

    
}

recipeSearchForm.addEventListener("submit", searchForRecipes);