// import { desktopRecipeCard } from "./components/recipeCard.js";
import { getRequestedRecipes, getRecipeInfo } from "./api/apiRecipe.js";

const recipeSearchForm = document.getElementById("recipeSearchForm");

// function getRecipeLink (recipeTitle){
//     // recipeTitle
//     let linkpreffix = './pages/Recipes/'
//     let link = recipeTitle.replaceAll(' ', '');
//     let linksuffix = '.html';
//     let completeLink = linkpreffix.concat(link, linksuffix);
//     console.log('completeLink is:', completeLink)
//     return completeLink;
// }

//takes in the array of recipes to return as part of the results 
function genRecipeCardList (recipeList) {
    console.log('input to genDesktopRecipeCardList function\'s recipe list is:', recipeList);

    let recipeCardListId = document.getElementById('recipeCardList');

    //wipe all the previous results
    recipeCardListId.innerHTML = '';

    // go through the array of returned recipes info
    for (let i = 0; i < recipeList.length; i++){
        // let bookmarked = false; //Todo: update once bookmarks are implemented

        var recipeCardDiv = document.createElement("div");
        recipeCardDiv.className = "recipeCardResult w-full bg-green-100";
        recipeCardDiv.innerHTML =`<img src="${recipeList[i].image_src}" alt="" />
        <div class="flex justify-between items-start space-x-2 py-2 h-20">
            <h3 class="px-1">${recipeList[i].name}</h3>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex-none w-6 h-6 mx-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>
        </div>`;
        
        // console.log("recipeCardDiv: ", recipeCardDiv);
        // console.log("recipeCardListId children:", recipeCardListId.children);
        recipeCardListId.appendChild(recipeCardDiv);
    }
    
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
        var resultsHeader = document.getElementById("Results");
        resultsHeader.className = "mx-4 mt-8"
        genRecipeCardList(searchResultsArray);
    })();

    
}

recipeSearchForm.addEventListener("submit", searchForRecipes);