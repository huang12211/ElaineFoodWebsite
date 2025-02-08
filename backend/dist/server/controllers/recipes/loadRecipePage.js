"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const html = `<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Optimize for Google Scrapper Bot-->
  <title>Recipe Title</title> 
  <meta description = "Recipe">
  
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="../../dist/output.css" rel="stylesheet">
  <script type="module" src="../../js/recipePages.js" defer></script>
  <script type="module" src="../../js/servingSizes.js" defer></script>
</head>


<body>
  <header>
    <!-- -------------------------------------------  -->
    <!--                                              -->
    <!-- Top Bar                                      -->
    <!--                                              -->
    <!-- -------------------------------------------  -->
    <nav class="mx-auto p-4">
      <!-- -------------------------------------------  -->
      <!-- Top Bar for Mobile                           -->
      <!-- -------------------------------------------  -->
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
            <!-- placeholder -->
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
            <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">

              <!-- Ingredients Section -->
              <div>
                <div class="my-auto bg-slate-300 p-4">
                  <form action=# method=" GET" id="servingform">
                    <div>
                      <h2>Ingredients:</h2>
                    </div>
                    <!-- serving size section -->
                    <div class="servingSize">
                      <label>for</label>
                      <input type="number" id="serving" name="servingSize" value="12" min="6" max="198" step="6" />
                      <label for="serving">servings</label>
                      <input id="updateButton" type="submit" value="Update" class="hidden" />
                    </div>

                    <!-- Ingredients List -->
                    <div id="ingredientsList" class="px-2">
                      <p>Loading...</p>
                    </div>
                  </form>
                </div>
              </div>


              <!-- Directions Section -->
              <div class="pl-4 py-4 md:col-span-2">
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
  </section>
</body>

</html>`;
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
            <div class="p-4 grid md:grid-cols-3 gap-4">

              <!-- Ingredients Section -->
              <div>
                <div class="my-auto p-4 bg-slate-300">
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
              </div>


              <!-- Directions Section -->
              <div class="pl-4 py-4 md:col-span-2">
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
const loadRecipePageHTML = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log("request body", req);
    var document = req.body;
    console.log("document", document.head.innerHTML);
    // document.head.innerHTML = templateHead;
    // document.body.innerHTML = templateBody;
    return res.status(200).json({ success: true, data: null, message: "successfully loaded recipe page" });
});
exports.default = loadRecipePageHTML;
