//Load up the Database with the recipes and associated media
import { drizzle } from "drizzle-orm/better-sqlite3";
import { users, recipes, ingredients, measurementUnits, recipe_ingredient_measUnit, users_recipe_reviews } from "./schema/schema";
import { db, schema } from "./db";

 
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
    // Insert ingredients in Alphabetical Order       //
    //------------------------------------------------//
    await db.insert(ingredients).values([
        { ingr: 'Baking Powder'}, { ingr: 'Baking Soda'}, { ingr: 'Blueberries'}, { ingr: 'Brown Sugar'}, {ingr: 'Cornstarch'},
        {ingr: 'Egg(s)'}, {ingr: 'Egg White(s)'}, { ingr: 'Flour' }, {ingr: 'Fresh Fruit'}, {ingr: 'Granulated Sugar'}, 
        { ingr: 'Ground Cinnamon'},
        { ingr: 'Tips of Green Onions' }, {ingr: 'Heavy Cream'}, { ingr: 'Hot Water' }, { ingr: 'Margarine' }, { ingr: 'Milk' }, 
        {ingr: 'Salt' }, { ingr: 'Salted Butter' }, {ingr: 'Semisweet Chocolate Chips'}, {ingr: 'Unsalted Butter' }, 
        { ingr: 'Vanilla Extract' }, { ingr: 'Vegetable Oil'}, {ingr: 'White Wine Vinegar / Apple Cider Vinegar / Lemon Juice'},
    ]);

    //------------------------------------------------//
    // Insert measurementsUnits                       //
    //------------------------------------------------//
    await db.insert(measurementUnits).values([
        { meas_unit: 'cup(s)'}, { meas_unit: 'tbsp(s)'}, {meas_unit: 'tsp(s)'}, {meas_unit: ' '}
    ]);

    //------------------------------------------------//
    // Insert recipes titles in Alphabetical Order
    //------------------------------------------------//
    await db.insert(recipes).values([{
        name: 'Fluffy Blueberry Muffins', 
        image_src: './../../frontend/media/foodImgs/Blueberry Muffins.png', 
        video: 'https://www.youtube.com/embed/gN-orgrgvU8?si=5jMFJ-dtOeb76ETj', 
        avg_rating: 0, 
        numRatings: 0, 
        directions: `Set to 375&deg;F.
            In a mixer, cream the butter and sugar until light.
            Add the eggs, vanilla and milk. Mix until well-combined.
            Add the flour, salt and baking powder. Mix until well-combined.
            Fold-in the blueberries.
            Grease a standard muffin tin and fill with batter.
            Bake at 375&deg;F for 30-35 mins.
            Remove muffins from tin and leave them to cool for at least 30 mins.
            Store the muffins uncovered or else the muffins will be too moist on the second day.`, 
        tags: 'American, Dessert, Breakfast',
        initialServing: 12,
        minServing: 6,
        maxServing: 198,
        servingIncrements: 6,
    }]);
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Unsalted Butter', min_amount: '1/6'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Vegetable Oil', min_amount: '1'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar', min_amount: '1/2'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: ' ', ingredient_id: 'Egg(s)', min_amount: '1'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1/2'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Milk', min_amount: '1/4'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '1'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1/4'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Powder', min_amount: '1'},
        {recipe_id: 'Fluffy Blueberry Muffins', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Blueberries', min_amount: '1'}
    ]);

    //TO DO: Populate directions property
    await db.insert(recipes).values([{
        name: 'Onion Pancakes', 
        image_src: './../../frontend/media/foodImgs/Onion Pancakes.png', 
        video: 'null', 
        avg_rating: 0, 
        numRatings: 0, 
        directions:`Combine flour and salt together in a large bowl or mixer.
            Slowly add boiling water to the bowl while mixing using a fork until it forms a shaggy dough. It is normal at this point for the dough to not come together yet.
            Add your chopped-up green onion tips and your egg(s) to the mixture and continue to mix with your fork until the egg is well-combined.
            Knead your dough either by hand, or using a mixer with a dough-hook attachment until it forms a smooth dough.
            Roll the dough out into a sausage form and divide it into 6 equal pieces. Form each piece into a ball and brush with a bit of oil. Cover the dough balls and set aside to rest for 40 mins in a warm place.
            Flatten each ball into a round, trying to get it as thin as possible. Brush the spread onto the round, avoiding the edges. Make a slit in the round from its center to its border. Wrap the round in on itself into a cone as illustrated in the video to create the layers in the pastry. Roll the cone out back into a round. <br><span class="font-bold italic">Tip:</span> <span class="italic">You can freeze your uncooked pancakes for up to a month at this point. Just place some parchment paper or some wax paper in between your pancakes and store in a ziplock bag.</span>
            When you are ready to eat, fry-up the pancakes (no need to defrost if cooking from frozen) in a skillet with a little oil. Serve whilst hot.`,
        tags: 'Chinese, Breakfast',
        initialServing: 6,
        minServing: 6,
        maxServing: 120,
        servingIncrements: 6,
    }]);
    //TO DO: populate all the following lines with missing property: "min_amount"
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1 3/4', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '1 3/4'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '3', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '3'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1', measUnit_id: ' ', ingredient_id: 'Egg(s)', min_amount: '1'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Hot Water', min_amount: '1/2'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '3', measUnit_id: ' ', ingredient_id: "Tips of Green Onions", min_amount: '3'},
        {recipe_id: 'Onion Pancakes', component: 'Spread:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Salted Butter', min_amount: '1/4'}
    ]);

    await db.insert(recipes).values([{
        name: 'Chocolate Chip Cookies', 
        image_src: './../../frontend/media/foodImgs/Cocolate Chip Cookies.png', 
        video: 'null', 
        avg_rating: 0, 
        numRatings: 0, 
        directions: `Preheat the oven to 350&deg;F.
            <span class="font-extrabold">Melt</span> the butter.
            To a large bowl, add the melted butter, margarine, granulated sugar and brown sugar.
            When the mixture is cool enough to touch, add in the eggs, vanilla and cinnamon. Mix until well-combined.
            Add the flour, salt and baking sodda. Mix until well-combined.
            Add the Chocoalte Chips and mix until they are evenly distributed throughout the batter.
            Prepare a baking sheet with some parchment paper.
            Bake at 350&deg;F for 10-12 mins until just golden. <br><span class="font-bold italic">Tip:</span> <span class="italic">I prefer to underbake these cookies so that you can toss them into the airfryer later and give them a quick heat up before scarfing it down with a tall glass of milk</span>
            Leave the cookies to cool for at least 20 mins.
            Store the cookies in an airtight container or ziplock bag.`,
        tags: 'American, Dessert',
        initialServing: 24,
        minServing: 12,
        maxServing: 198,
        servingIncrements: 12,
    }]);
    //Chocolate Chip Cookies
    //TO DO: populate all the following lines with missing property: "min_amount"
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Chocolate Chip Cookies', amount: '3/4', measUnit_id: 'cup(s)', ingredient_id: 'Unsalted Butter', min_amount: '3/8'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Margarine', min_amount: '1/8'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Granulated Sugar', min_amount: '1/4'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar', min_amount: '1/2'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '2', measUnit_id: ' ', ingredient_id: 'Egg(s)', min_amount: '1'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1/2'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1/8', measUnit_id: 'tsp(s)', ingredient_id: 'Ground Cinnamon', min_amount: '1/16'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '2 1/4', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '1 1/8'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1/2'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Soda', min_amount: '1/2'},
        {recipe_id: 'Chocolate Chip Cookies', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Semisweet Chocolate Chips', min_amount: '1'}
    ]);

    await db.insert(recipes).values([
        {name: 'Chocolate Chip Muffins', image_src: './../../frontend/media/foodImgs/ChocolateMuffins.png', video: 'https:///asdjfkslfs', avg_rating: 0, numRatings: 0, directions:'Set to 375 degrees farenheit', tags: 'American, Dessert, Breakfast'}
    ]);
    
    //Chocolate Chip Muffins
    //TO DO: populate all the following lines with missing property: "min_amount"
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

    await db.insert(recipes).values([{
        name: 'Pavlova', 
        image_src: './../../frontend/media/foodImgs/Blueberry Muffins.png', 
        video: 'NA', 
        avg_rating: 0, 
        numRatings: 0, 
        directions: `Set to 275&deg;F.
            In a standing mixer or with a hand-held beater, beat the egg whites until foamy.
            Add the stabilizing vinegar/lemon juice and constarch mixture.
            Beat the egg whites until soft peaks.
            Add in the vanilla extract and salt.
            Continue beating the egg whites whilte adding the sugar 1 tablespoon at a time until stiff peaks form. 
            Prepare a baking sheet with parchement paper 
            Spread the meringe mixture onto the parchement paper to make a 9" round. 
            Bake at 275&deg;F for 1 hour, then shut off the oven, and leave the Pavlova in the oven with the door firmly closed until fully cooled.
            Beat the heavy cream until it forms soft peaks.
            Add a the granulated sugar and vanilla extract to the heavy cream and beat until it forms stiff peaks.
            Assemble the fully cooled pavlova by topping it with the whipped cream and fruits.
            Note: If you don't think that the Pavlova will be finished, it is recommended to assemble individual portions.`, 
        tags: 'Australian, Dessert',
        initialServing: 8,
        minServing: 8,
        maxServing: 160,
        servingIncrements: 8,
    }]);
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '3', measUnit_id: ' ', ingredient_id: 'Egg Whites', min_amount: '3'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'White Wine Vinegar / Apple Cider Vinegar / Lemon Juice', min_amount: '2'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Cornstarch', min_amount: '1'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '1/8', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1/8'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1/4'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Granulated Sugar', min_amount: '1/2'},
        {recipe_id: 'Pavlova', component: 'Toppings', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Heavy Cream', min_amount: '1'},
        {recipe_id: 'Pavlova', component: 'Toppings', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'Granulated Sugar', min_amount: '2'},
        {recipe_id: 'Pavlova', component: 'Toppings', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1'},
        {recipe_id: 'Pablova', component: 'Toppings', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Fresh Fruit', min_amount: '2'},
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