//Load up the Database with the recipes and associated media
import { drizzle } from "drizzle-orm/better-sqlite3";
import { users, recipes, ingredients, measurementUnits, recipe_ingredient_measUnit, users_recipe_reviews } from "./schema/schema";
import { db, schema } from "./db"

 
// Seed function
export async function seedDatabase() {
    console.log('Seeding database...')
    //------------------------------------------------//
    //Insert dummy users for now                      //
    //------------------------------------------------//
    await db.insert(users).values([
        {email: 'richard@gamil.com' }, 
        {email: 'eric@gmail.com'},
        {email: 'charlene@gmail.com'}
    ]);


    //------------------------------------------------//
    // Insert recipes
    //------------------------------------------------//
    await db.insert(recipes).values([
        {name: 'Fluffy Blueberry Muffins', 
            image_src: './../../frontend/media/foodImgs/Blueberry Muffins.png', 
            video: 'https://www.youtube.com/embed/gN-orgrgvU8?si=5jMFJ-dtOeb76ETj', 
            avg_rating: 0, 
            numRatings: 0, 
            directions: "Set to 375&deg;F.\n In a mixer, cream the butter and sugar until light.\n Add the eggs, vanilla and milk. Mix until well-combined.\n Add the flour, salt and baking powder. Mix until well-combined.\n Fold-in the blueberries.\n Grease a standard muffin tin and fill with batter.\n Bake at 375&deg;F for 30-35 mins.\n Remove muffins from tin and leave them to cool for at least 30 mins.\n Store the muffins uncovered or else the muffins will be too moist on the second day.", 
            tags: 'American, Dessert, Breakfast'}, 
        {name: 'Onion Pancakes', image_src: './../../frontend/media/foodImgs/Onion Pancakes.png', video: 'https:///onionooons', avg_rating: 0, numRatings: 0, directions:'measure out 100g of flour'},
        {name: 'Chocolate Chip Cookies', image_src: './../../frontend/media/foodImgs/Cocolate Chip Cookies.png', video: 'https://asflls', avg_rating: 0, numRatings: 0, directions: 'chocolate chips'},
        {name: 'Chocolate Chip Muffins', image_src: './../../frontend/media/foodImgs/ChocolateMuffins.png', video: 'https:///asdjfkslfs', avg_rating: 0, numRatings: 0, directions:'Set to 375 degrees farenheit', tags: 'American, Dessert, Breakfast'}
    ]);
    
    //------------------------------------------------//
    // Insert ingredients                             //
    //------------------------------------------------//
    await db.insert(ingredients).values([{ ingr: 'Baking Powder'}, { ingr: 'Blueberries'}, { ingr: 'Brown Sugar'}, 
        {ingr: 'Egg(s)'}, { ingr: 'Flour' }, { ingr: 'Tips of Green Onions' }, { ingr: 'Hot Water' }, { ingr: 'Milk' }, 
        {ingr: 'Salt' }, { ingr: 'Salted Butter' }, {ingr: 'Semisweet Chocolate Chips'}, {ingr: 'Unsalted Butter' }, 
        { ingr: 'Vanilla Extract' }, { ingr: 'Vegetable Oil'}
    ]);

    //------------------------------------------------//
    // Insert measurementsUnits                       //
    //------------------------------------------------//
    await db.insert(measurementUnits).values([
        { meas_unit: 'cup(s)'}, { meas_unit: 'tbsp(s)'}, {meas_unit: 'tsp(s)'}
    ]);
    
    //------------------------------------------------//
    //Insert recipe_ingredient_Amount_measurementUnits//
    //------------------------------------------------//
    //Blueberry Muffins
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Unsalted Butter'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Vegetable Oil'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', ingredient_id: 'Egg(s)'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Milk'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Flour'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Salt'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Powder'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Blueberries'}
    ]);

    //Onion Pancakes
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1 3/4', measUnit_id: 'cup(s)', ingredient_id: 'Flour'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '3', measUnit_id: 'tsp(s)', ingredient_id: 'Salt'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1', ingredient_id: 'Egg(s)'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Hot Water'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '3', ingredient_id: "Tips of Green Onions"},
        {recipe_id: 'Onion Pancakes', component: 'Spread:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Salted Butter'}
    ]);

    //Chocolate Chip Cookies
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Chocolate Chip Cookies', amount: '2', ingredient_id: 'Egg(s)'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Milk'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Salted Butter'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1/8', measUnit_id: 'cup(s)', ingredient_id: 'Vegetable Oil'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Flour'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Powder'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Semisweet Chocolate Chips'}
    ]);

    //Chocolate Chip Muffins
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Chocolate Chip Muffins', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Unsalted Butter'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Vegetable Oil'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', ingredient_id: 'Egg(s)'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Milk'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Flour'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Salt'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Powder'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Semisweet Chocolate Chips'}
    ]);

    //------------------------------------------------//
    //Insert users_recipe_reviews                     //
    //------------------------------------------------//
    await db.insert(users_recipe_reviews).values([
        {user_id: 1, recipe_name: 'Chocolate Chip Cookies', rating: 5},
        {user_id: 1, recipe_name: 'Onion Pancakes', rating: 2},
        {user_id: 1, recipe_name: 'Fluffy Blueberry Muffins', rating: 2},
        {user_id: 2, recipe_name: 'Fluffy Blueberry Muffins', rating: 3},
        {user_id: 2, recipe_name: 'Onion Pancakes', rating: 4},
        {user_id: 2, recipe_name: 'Chocolate Chip Cookies', rating: 4}
    ]);

    console.log('Seed complete!')
  }

  seedDatabase().catch(console.error)