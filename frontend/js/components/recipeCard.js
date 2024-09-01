class desktopRecipeCard extends HTMLElement{
    constructor (name, recipe_link, image_src, bookmarked, bg_color){
        // this.name = name;
        // this.recipe_link = recipe_link;
        // this. image_src = image_src;
        // this.bookmarked = bookmarked;
        // this.bg_color = bg_color;

        let bookmark_status = '';

        if (bookmarked == true) {
            bookmark_status += 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
            </svg>`;
        }
        else{
            bookmark_status += 
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>`;
        }

        let innerHTML = 
        `<div class="flex-none inline-block w-64 h-68 p-2 ${bg_color}">
            <div class="flex-col">
                <!-- Recipe Image -->
                <div class="flex-none h-48">
                    <a href=${recipe_link}>
                    <img class="object-cover w-full h-48" src=${image_src} alt="" />
                    </a>
                </div>
                <div class="flex-none flex justify-between items-start space-x-2 py-2 h-20">
                    <!-- Recipe Title -->
                    <div>
                        <a href=${recipe_link}>
                            <h3 class="px-1">${name}</h3>
                        </a>
                    </div>
                    <!-- Book mark icon to add to Grocer List -->
                    <div class="flex-none w-8 h-8 mx-2">
                        ${bookmark_status}
                    </div>
                </div>
            </div>
        </div>`
    }

    //Runs each time the element is appended to or moved in the DOM
	connectedCallback () {
		console.log('desktopRecipeCard Added!', this);
	}
    
    //Runs when the element is removed from the DOM
	disconnectedCallback () {
		console.log('desktopRecipeCard Removed', this);
	}
}

class mobileRecipeCard extends HTMLElement{
    constructor (name, recipe_link, image_src, bookmarked, bg_color){
        this.name = name;
        this.recipe_link = recipe_link;
        this. image_src = image_src;
        this.bookmarked = bookmarked;
        this.bg_color = bg_color;

        let bookmark_status = '';

        if (this.bookmarked == true) {
            bookmark_status += 
            `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path fill-rule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clip-rule="evenodd" />
            </svg>`;
        }
        else{
            bookmark_status += 
            `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
            </svg>`;
        }

        this.innerHTML = 
        `<div>
            <a href="./pages/Recipes/onionPancakes.html">
                <div>
                    <img class="object-cover w-full h-44" src="./media/foodImgs/Onion Pancakes.png" alt="">
                </div>
                <h3 class="center px-1"> Onion Pancakes</h3>
            </a>
        </div>`;
    }

    //Runs each time the element is appended to or moved in the DOM
	connectedCallback () {
		console.log('mobileRecipeCard Added!', this);
	}
    
    //Runs when the element is removed from the DOM
	disconnectedCallback () {
		console.log('mobileRecipeCard Removed', this);
	}
}



export {desktopRecipeCard, mobileRecipeCard};