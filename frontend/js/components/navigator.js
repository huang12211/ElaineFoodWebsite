class desktopNavMenu extends HTMLElement{
    constructor (path){
        let pathToIndex = path;

        this.innerHTML = 
        `<div class="hidden md:flex md:justify-between">
            <div class="flex items-end space-x-6 h-14">
                <!--       Logo -->
                <div class="place-self-start px-2">
                    <a href="${pathToIndex}index.html">
                        <img class="object-cover h-14" src="${pathToIndex}media/GenericImages/Logo.png" alt="">
                    </a>
                </div>

                <!--       TopNav Menu Items -->
                <div class="place-self-start self-end flex items-end space-x-6 px-6">
                    <div>
                        <a href="${pathToIndex}pages/searchRecipes.html" class="hover:text-orange-600">Search Recipes</a>
                    </div>
                    <div>
                        <div class="dropdownButton">
                            <a href="#!" class="hover:text-orange-600">Recipes Categories</a>
                            <!--  Dropdown Categories Menu on Hover -->
                            <div class="dropdownMenu z-50">
                                <ul>
                                    <li><a href="${pathToIndex}pages/RecipeCategories/appetizers.html"> Appetizers </a></li>
                                    <li><a href="${pathToIndex}pages/RecipeCategories/recipeCategories.html"> Mains </a></li>
                                    <li><a href="${pathToIndex}pages/RecipeCategories/recipeCategories.html"> Sides </a></li>
                                    <li><a href="${pathToIndex}pages/RecipeCategories/recipeCategories.html"> Desserts </a></li>
                                    <li><a href="${pathToIndex}pages/RecipeCategories/recipeCategories.html"> Drinks </a></li>
                                    <li><a href="${pathToIndex}pages/RecipeCategories/recipeCategories.html"> Breakfast </a></li>
                                    <li><a href="${pathToIndex}pages/RecipeCategories/recipeCategories.html"> Celebrations </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <a href="${pathToIndex}pages/contact.html" class="hover:text-orange-600">Contact</a>
                    </div>
                </div>
            </div>
            <!-- Checkout Icon -->
            <div class="place-self-end self-end flex-none px-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
        </div>`;
    }

    //Runs each time the element is appended to or moved in the DOM
	connectedCallback () {
		console.log('desktopNav Added!', this);
	}
    
    //Runs when the element is removed from the DOM
	disconnectedCallback () {
		console.log('desktopNav Removed', this);
	}
}

class mobileNavMenu extends HTMLElement{
    constructor (path){
        let pathToIndex = path;

        this.innerHTML = 
        `<div class="grid grid-cols-3 justify-items-center items-end h-12 md:hidden">
            <!--Hamburger Menu to replace TopNav Menu Items -->
            <div class="flex justify-self-start justify-items-center items-end space-x-4 px-2">
                <div id="myNav" class="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-10 h-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <div class="flex-none w-10 h-10">
                    <!-- placeholder -->
                </div>
            </div>
            <!--       Logo -->
            <div>
                <a href="${pathToIndex}index.html">
                    <img class="object-cover h-12" src="${pathToIndex}media/GenericImages/Logo.png" alt="">
                </a>
            </div>

            <!-- Permanently Accessible Tools in the Toolbar -->
            <div class="flex justify-self-end justify-items-center items-end space-x-6 px-2">
                <!-- Search Icon -->
                <div class="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <!-- Checkout Icon -->
                <div class="flex-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </div>
            </div>
        </div>`;
    }

    //Runs each time the element is appended to or moved in the DOM
	connectedCallback () {
		console.log('mobileNav Added!', this);
	}
    
    //Runs when the element is removed from the DOM
	disconnectedCallback () {
		console.log('mobileNav Removed', this);
	}
}

export {desktopNavMenu, mobileNavMenu};