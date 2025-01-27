/////////////////////////////////////////////////////////////////////////////
// This script makes the recipes cards selectable                          //
// And navigates the user to the selected recipe page                      //
// And navigates the user back to the page that contained the recipe cards //
/////////////////////////////////////////////////////////////////////////////

import { loadRecipe } from "./recipePages.js";

const templateHead = `<title>Recipe Title</title> 
  <meta description = "Recipe">
  
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../../dist/output.css" rel="stylesheet">`;

const templateBody = `<header>
    <nav class="mx-auto p-4">
      <div class="grid grid-cols-3 justify-items-center items-end h-12 md:hidden">
        <!--Hamburger Menu to replace TopNav Menu Items -->
        <div class="flex justify-self-start justify-items-center items-end space-x-4 px-2">
          <div id="myNav" class="flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black"
              class="w-10 h-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </div>
          <div class="flex-none w-10 h-10">
          </div>
        </div>
        <!--       Logo -->
        <div>
          <a href="./../../../index.html">
            <img class="object-cover h-12" src="./../../media/GenericImages/Logo.png" alt="">
          </a>
        </div>

        <!-- Permanently Accessible Tools in the Toolbar -->
        <div class="flex justify-self-end justify-items-center items-end space-x-6 px-2">
          <!-- Search Icon -->
          <div class="flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <!-- Checkout Icon -->
          <div class="flex-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
        </div>
      </div>

      <!-- --------------------------------------------   -->
      <!-- the following Top Bar is for desktop-only views   -->
      <!-- --------------------------------------------   -->
      <div class="hidden md:flex md:justify-between">
        <div class="flex items-end space-x-6 lg:space-x-10 h-14">
          <!--       Logo -->
          <div class="navButton place-self-start px-2">
            <a href="./../../../index.html">
              <img class="object-cover h-14" src="./../../media/GenericImages/Logo.png" alt="">
            </a>
          </div>

          <!--       TopNav Menu Items -->
          <div class="place-self-start self-end flex items-end space-x-6 lg:space-x-10">
            <div class="navButton">
              <a href="./../searchRecipes.html">Search Recipes</a>
            </div>
            <div class="dropdownButton navButton">
              <a href="#!">Recipes Categories</a>
              <!--  Dropdown Categories Menu on Hover -->
              <div class="dropdownMenu">
                <ul>
                  <li><a href="./../RecipeCategories/appetizers.html"> Appetizers </a></li>
                  <li><a href="./../RecipeCategories/recipeCategories.html"> Mains </a></li>
                  <li><a href="./../RecipeCategories/recipeCategories.html"> Sides </a></li>
                  <li><a href="./../RecipeCategories/recipeCategories.html"> Desserts </a></li>
                  <li><a href="./../RecipeCategories/recipeCategories.html"> Drinks </a></li>
                  <li><a href="./../RecipeCategories/recipeCategories.html"> Breakfast </a></li>
                  <li><a href="./../RecipeCategories/recipeCategories.html"> Celebrations </a></li>
                </ul>
              </div>
            </div>
            <div class="navButton">
              <a href="./../contact.html">Contact</a>
            </div>
          </div>
        </div>

        <!-- Checkout Icon -->
        <div class="navButton place-self-end self-end flex-none px-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
        </div>
      </div>
    </nav>
  </header>

  <!-- ------------------------- -->
  <!--                           -->
  <!-- Individual Recipe Pages   -->
  <!--                           -->
  <!-- ------------------------- -->
  <main>
    <section id="Recipe">
      <div class=" mx-auto px-6">
        <div class="p-1"></div>

        <!-- -------------------------------------------  -->
        <!-- Recipes Details Section Desktop              -->
        <!-- -------------------------------------------  -->
        <section id="Recipe">
          <div class="relative">
            <div class="flex justify-start items-center space-x-2">
              <div class="flex-none pb-2">
                <h1 id="recipeName">Recipe Title</h1>
              </div>
              <!-- Bookmark icon to add to Grocer List -->
              <div class="flex-none w-8 h-8 mx-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                </svg>
              </div>
            </div>

            <!-- Ratings & Plays Header -->
            <div>
              <div class="flex justify-start items-center space-x-4">
                <div class="flex">
                  <div class="place-self-start">
                    <svg xmlns=" http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <div class="place-self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <div class="place-self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <div class="place-self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                  <div class="place-self-start">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                      stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <p><span id="numbOfViews">XXXXXX</span> plays</p>
                </div>

              </div>
            </div>

            <!-- Video -->
            <div class="mobileVideoContainer p-4">
              <iframe 
                class="mobileVideo"
                src= ''
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen>
              </iframe>
            </div>

            <!-- ------------------ -->
            <!-- Body of the Recipe -->
            <!-- ------------------ -->
            <div class="p-4 md:grid md:grid-cols-3 md:gap-4 md:items-start">

              <!-- Ingredients Section -->
              <div class=" my-auto p-4 bg-slate-300 md:col-start-1 md:col-span-1 md:place-self-start">
                <form action=# method=" GET" id="servingform">
                  <div>
                    <h2>Ingredients:</h2>
                  </div>
                  <!-- serving size section -->
                  <div class="servingSize">
                    <label>for</label>
                    <input type="number" id="serving" name="servingSize" value="-1" min="-100" max="0" step="1" />
                    <label for="serving">servings</label>
                    <input id="updateButton" type="submit" value="Update" class="hidden" />
                  </div>

                  <!-- Ingredients List -->
                  <div id="ingredientsList" class="px-2">
                    <p>Loading...</p>
                  </div>
                </form>
              </div>


              <!-- Directions Section -->
              <div class="pl-4 pt-4 pb-4 md:row-start-1 md:row-span-1 md:col-start-2 md:col-span-2 md:place-self-start">
                <div class="pb-2">
                  <h2>Directions:</h2>
                </div>
                <ol id="directionsContent">
                  <li>Loading...</li>
                </ol>
              </div>
            </div>

          </div>
          <div class="h-2"></div>
        </section>
      </div>
      </div>
  </main>
  </div>
  </section>`;

var historyIndx = 0; //updated only after the content for the new page is updated. 
const headHistory = [];
const bodyHistory = [];

//-------------------------------------------------------------------------------------//
//Save the current page into the history & history arrays before any navigation occurs //
//-------------------------------------------------------------------------------------//
console.log("History before replace state: ", history);
const initialState = {
  page: 0,
  pageName: "home"
}
history.replaceState(initialState, "", document.location.href);
console.log("initial document.location.href: ", document.location.href);
console.log("History after replace state: ", history);
//Before updating the HTML, save the current HTML in memmory
headHistory.push(document.head.innerHTML);
bodyHistory.push(document.body.innerHTML);


function refreshRecipePageScripts(){
  var head= document.getElementsByTagName('head')[0];
  //Reload script to control servingSizes of the Ingredients List. 
  if (document.getElementById('servingSizesScript') != null){
    var scriptToRemove = document.getElementById('servingSizesScript');
    scriptToRemove.remove();
    console.log("removed servingSizesScript")
  }
  var script= document.createElement('script');
  script.id = "servingSizesScript";
  script.type = "text/javascript";
  script.src= '../../js/servingSizes.js';
  script.defer = true;
  head.appendChild(script);
}

function loadRecipePage(event){
  //Update the recipe page url based on the recipe name displayed in the card
  const recipeClicked = event.target.closest('.recipeCard').querySelector('h3').innerHTML;
  // console.log("event triggered and the recipe card clicked is: ", recipeClicked);
  const recipeHyphName = recipeClicked.trim().toLowerCase().replaceAll(" ", "-");

  //Push to the history record 
  history.pushState({page: historyIndx +1, newPage: recipeHyphName}, "", `/frontend/pages/recipes/${recipeHyphName}`);
  console.log("History after push state: ", history);

  //Update the HTML to the new URL's content 
  document.head.innerHTML = templateHead;
  document.body.innerHTML = templateBody;
  globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  loadRecipe();
  // refreshRecipePageScripts();


  //Save the current HTML in memmory & update current history index. 
  headHistory.push(document.head.innerHTML);
  bodyHistory.push(document.body.innerHTML);
  historyIndx = historyIndx +1;
}

//-----------------------------------------------//
// Make all divs whose className is "recipeCard" //
//-----------------------------------------------//
const allRecipeCards = document.getElementsByClassName("recipeCard");
for (const card of allRecipeCards){
  card.addEventListener("click", loadRecipePage);
}

//--------------------------------------------------------------//
// Clicking on the back button allows the previous page to load //
//--------------------------------------------------------------//
window.addEventListener('popstate', function(event) {
  console.log("current event.state.page number: ", event.state.page);
  //If the new page navigated to is the home page (a page that has a dedicated html file)
  if (event.state.pageName == "home"){
    const previousBodyContent = bodyHistory[event.state.page];
    if (previousBodyContent) {
      document.body.innerHTML = previousBodyContent;
    }
  
    const previousHeadContent = headHistory[event.state.page];
    if (previousHeadContent){
      // console.log("this.window.location is:", this.window.location.href);
      document.head.innerHTML = previousHeadContent;

      // make the recipe cards clickable again
      for (const card of allRecipeCards){
        card.addEventListener("click", loadRecipePage);
      }
      console.log("History after back button pressed state: ", history);
    }

    //Update History Index
    if (event.state.page < historyIndx){
      historyIndx = historyIndx -1; 
    }
    else{
      historyIndx = historyIndx +1; 
    }
    
  }

  //If the page that is loaded is a recipe page
  else{
    const nextBodyContent = bodyHistory[event.state.page];
    if (nextBodyContent){
      this.document.body.innerHTML = nextBodyContent;
    }

    const nextHeadContent = headHistory[event.state.page];
    if(nextHeadContent){
        this.document.head.innerHTML = nextHeadContent;
    }
    loadRecipe();
    // refreshRecipePageScripts();

    console.log("History after forward button pressed state: ", history);

    //Update History Index
    if (event.state.page < historyIndx){
      historyIndx = historyIndx -1; 
    }
    else{
      historyIndx = historyIndx +1; 
    }
  }

});

