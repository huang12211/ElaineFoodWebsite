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
    console.log('Included users...')

    //------------------------------------------------//
    // Insert ingredients in Alphabetical Order       //
    //------------------------------------------------//
    await db.insert(ingredients).values([
        {ingr: 'Almond Flour'}, {ingr: 'Apples'},
        {ingr: 'Baking Powder'}, { ingr: 'Baking Soda'}, {ingr: 'Basil'}, {ingr: 'Black Beans'}, {ingr: 'Black Pepper'}, {ingr: 'Black Sesame Paste'}, {ingr: 'Black Sesame Seeds'}, { ingr: 'Blueberries'}, { ingr: 'Brown Sugar'}, 
        {ingr: 'Canola Oil'}, {ingr: 'Chickpeas'}, {ingr: 'Cocoa Powder'}, {ingr: 'Cornstarch'}, {ingr: 'Corn Kernels'},
        {ingr: 'Dark Chocolate, chopped'}, {ingr: 'Dijon Mustard'},
        {ingr: 'Egg(s)'}, {ingr: 'Egg White(s)'}, {ingr: 'Egg Yolk(s)'},
        {ingr: 'Flour' }, {ingr: 'Fresh Fruit'}, {ingr: 'Fresh Parsley'},
        {ingr: 'Garlic'}, {ingr: 'Gelatin Powder'}, {ingr: 'Granulated Sugar'}, { ingr: 'Tips of Green Onions' }, { ingr: 'Ground Cinnamon'},
        {ingr: 'Heavy Cream'}, {ingr: 'Honey / Maple Syrup'}, { ingr: 'Hot Water' }, {ingr: 'Hot Sauce'},
        {ingr: 'Kidney Beans'},
        {ingr: 'Lemon Juice'},
        {ingr: 'Margarine' }, { ingr: 'Milk' }, 
        {ingr: 'Olive Oil'},
        {ingr: 'Peaches'}, {ingr: 'Premade 9 inch Pie Crust'},
        {ingr: 'Quick Oats'},
        {ingr: 'Raspberries'}, {ingr: 'Red Onion, diced'}, {ingr: 'Red Wine Vinegar / Apple Cider Vinegar'}, {ingr: 'Rhubarb, chopped'},
        {ingr: 'Salt' }, { ingr: 'Salted Butter' }, {ingr: 'Semisweet Chocolate Chips'}, {ingr: 'Sweet Red Pepper, diced'},
        {ingr: 'Unsalted Butter' }, 
        {ingr: 'Vanilla Extract' }, { ingr: 'Vegetable Oil'}, 
        {ingr: 'Walnuts (optional)'}, {ingr: 'Water'}, {ingr: 'White Vinegar'}, {ingr: 'White Wine Vinegar / Apple Cider Vinegar / Lemon Juice'},
        {ingr: 'Yeast'}
    ]);
    console.log('Seeded ingredients...')

    //------------------------------------------------//
    // Insert measurementsUnits                       //
    //------------------------------------------------//
    await db.insert(measurementUnits).values([
        {meas_unit: ' '}, {meas_unit: '12 oz can'}, {meas_unit: '15 oz can'}, {meas_unit: '19 oz can'}, 
        {meas_unit: 'clove(s) of'}, { meas_unit: 'cup(s)'}, {meas_unit: 'g'}, { meas_unit: 'tbsp(s)'}, {meas_unit: 'tsp(s)'}
    ]);
    console.log('Seeded measurement units...')

    //------------------------------------------------//
    // Insert recipes titles in Alphabetical Order    //
    //------------------------------------------------//
    //-- Apple Frangipane Tart --//
    await db.insert(recipes).values([{
        name: 'Apple Frangipane Tart',
        image_src: './../../frontend/media/foodImgs/Apple Frangipane Tart.jpg',
        video: 'null',
        avg_rating: 0, 
        numRatings: 0, 
        directions: `title: Filling:
            Cream the butter and sugar together until fluffy.
            Add in all other ingredients for the filling until well-combined.
            title: Assemble:
            Preheat the oven to 375&deg;F.
            Pour the filling mixture into the premade pie crust and use a spatula to spread the filling evenly. 
            Slice the apples thinly and layer them in any pattern you wish on top of the filling. 
            Bake the tart for 30-35 mins.`,
        tags: 'American, Dessert',
        initialServing: 12,
        minServing: 12,
        maxServing: 120,
        servingIncrements: 12,
    }]);
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Apple Frangipane Tart', component: 'Dough:', amount: '1', measUnit_id: ' ', ingredient_id: 'Premade 9 inch Pie Crust', min_amount: '1'},
        {recipe_id: 'Apple Frangipane Tart', component: 'Filling:', amount: '4', measUnit_id: 'tbsp(s)', ingredient_id: 'Unsalted Butter', min_amount: '4'},
        {recipe_id: 'Apple Frangipane Tart', component: 'Filling:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Granulated Sugar', min_amount: '1/4'},
        {recipe_id: 'Apple Frangipane Tart', component: 'Filling:', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Almond Flour', min_amount: '1/2'},
        {recipe_id: 'Apple Frangipane Tart', component: 'Filling:', amount: '1/4', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1/4'},
        {recipe_id: 'Apple Frangipane Tart', component: 'Filling:', amount: '1', measUnit_id: 'tbsp(s)', ingredient_id: 'Flour', min_amount: '1'},
        {recipe_id: 'Apple Frangipane Tart', component: 'Filling:', amount: '1', measUnit_id: ' ', ingredient_id: 'Egg(s)', min_amount: '1'},
        {recipe_id: 'Apple Frangipane Tart', component: 'Filling:', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1'},
        {recipe_id: 'Apple Frangipane Tart', component: 'Toppings:', amount: '2', measUnit_id: ' ', ingredient_id: 'Apples', min_amount: '2'},
    ]);

    //-- Black Sesame Swirl Buns --//
    await db.insert(recipes).values([{
        name: 'Black Sesame Swirl Buns', 
        image_src: './../../frontend/media/foodImgs/BlackSesameSwirl.jpg', 
        video: 'null', 
        avg_rating: 0, 
        numRatings: 0, 
        directions: `title: Dough:
            Bloom the yeast in the warmed milk and set aside.
            In a mixer, cream the butter with the sugar
            Add the eggs and the bloomed yeast mixture. Mix until well-combined.
            Add the flour and salt. Mix until well-combined.
            Mix for 10 minutes.
            Cover and set the dough aside in a well-oiled bowl until it has doubled in size. 
            title: Black Sesame Paste:
            While the dough is resting, make your black sesame paste by blending toasted black sesame seeds with 2 tbsps of water. 
            Once blended, add honey. Add more to taste if required. 
            title: Assemble:
            Once the dough has doubled in size, roll out the dough into a 9x11 inch rectangle.
            Spread room-temperature button onto the dough, leaving a 1/4 inch lip on the far side. Then spread the black sesame paste on top of the buttered surface.
            Roll the dough into a log shape, starting from the close side. Cut your rolled log of dough into 12 portions. <br><span class="font-bold italic">Tip: Use unflavoured floss to cut the dough so that it stays round.</span>
            Grease a 9x11 inch pan and place the rolls in the pan. Cover and place in a warm spot to let rise for 30-45 mins.
            Preheat the oven to 350&deg;F. Bake the rolls for 20-25 mins.`,
        tags: 'American, Dessert, Breakfast',
        initialServing: 12,
        minServing: 12,
        maxServing: 120,
        servingIncrements: 12,
    }]);
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Dough:', amount: '3/4', measUnit_id: 'cup(s)', ingredient_id: 'Milk', min_amount: '3/4'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Dough:', amount: '2 1/4', measUnit_id: 'tsp(s)', ingredient_id: 'Yeast', min_amount: '2 1/4'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Dough:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Granulated Sugar', min_amount: '1/4'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Dough:', amount: '1', measUnit_id: ' ', ingredient_id: 'Egg(s)', min_amount: '1'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Dough:', amount: '1', measUnit_id: ' ', ingredient_id: 'Egg Yolk(s)', min_amount: '1'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Dough:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Unsalted Butter', min_amount: '1/4'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Dough:', amount: '2 3/4', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '2 3/4'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Dough:', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1/2'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Black Sesame Paste:', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Black Sesame Seeds', min_amount: '1/2'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Black Sesame Paste:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Honey / Maple Syrup', min_amount: '1/4'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Filling:', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Unsalted Butter', min_amount: '2'},
        {recipe_id: 'Black Sesame Swirl Buns', component: 'Filling:', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Black Sesame Paste', min_amount: '1/2'}
    ])
    //-- Chocolate Chip Cookies --//
    await db.insert(recipes).values([{
        name: 'Chocolate Chip Cookies', 
        image_src: './../../frontend/media/foodImgs/Chocolate Chip Cookies.png', 
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

    //-- Chocolate Chip Muffins --//
    await db.insert(recipes).values([{
        name: 'Chocolate Chip Muffins', 
        image_src: './../../frontend/media/foodImgs/ChocolateMuffins.png', 
        video: 'null', 
        avg_rating: 0, 
        numRatings: 0, 
        directions:`Set to 375&deg;F.
            In a mixer, cream the butter and sugar until light.
            Add the eggs, vanilla and milk. Mix until well-combined.
            Add the flour, salt and baking powder. Mix until well-combined.
            Fold-in the chocolate chips.
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
        {recipe_id: 'Chocolate Chip Muffins', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Unsalted Butter', min_amount: '1/6'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Vegetable Oil', min_amount: '1'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar', min_amount: '1/2'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: ' ', ingredient_id: 'Egg(s)', min_amount: '1'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1/2'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Milk', min_amount: '1/4'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '1'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1/4'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Powder', min_amount: '1'},
        {recipe_id: 'Chocolate Chip Muffins', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Semisweet Chocolate Chips', min_amount: '1'}
    ]);

    //-- Chocolate Raspberry Mousse Cake --//
    await db.insert(recipes).values([{
        name: 'Chocolate Raspberry Mousse Cake',
        image_src: './../../frontend/media/foodImgs/Chocolate Raspberry Mousse Cake.jpg',
        video: 'null',
        avg_rating: 0,
        numRatings: 0, 
        directions: `title: Cake Layer:
            Preheat the over to 350&deg;F.
            Grease a 9-inch springform pan.
            In a large bowl, mix the water, oil and vinegar until well combined.
            Add the flour, sugar, sifted cocoa powder, and baking soda. Mix until well combined.
            Bake at 350&deg;F for 10 to 12 minutes until a toothpick inserted into the center comes out clean.
            Leave to cool completely making sure that you <span class="font-bold">DO NOT remove it from its pan.</span>
            title: Raspberry Mousse Layer:
            In a small bowl, sprinkle the gelatin over the 1 tbsp of water and let bloom for 5 minutes.
            Meanwhile, in a small saucepan, add the raspberries, lemon juice, vanilla extract, granulated sugar and water. Whisk constantly over medium-heat until the sauce coats the back of a spoon and ressembles thick jam-consistency.
            Remove the saucepan from the head and stir in the bloomed gelatin mixture until well combined. Set the mixture aside to cool.
            In another bowl, whip the cream with an electric mixer until stiff peaks form. Mix in one quarter of the whipped cream to the cooled raspberry mixture. Then <span class="font-bold">gently</span> fold in the remaining cream.
            Spoon the raspberry mixture onto the cake layer.
            Place the cake into the fridge for at least 4 hours, or freeze for 2 hours.
            title: Chocolate Mousse Layer:
            In a small bowl, sprinkle the gelatin over the 1 tbsp of water and let bloom for 5 minutes.
            Melt your chocolate using either a bowl placed on top of a pot of simmering water, or using the microwave.
            In a separate bowl placed on top of a pot of simmering water, or using the microwave, and in a 1/3 cup of the cream with the sugar. Heat until the sugar has dissolved. Remove from the heat and add the gelatin mixture until well combined.
            Add the cream mixture to the warmed chocolate and mix until well combined.
            In another bowl, whip the cream with an electric mixer until stiff peaks form. Mix in one quarter of the whipped cream to the cooled chocolate mixture. Then <span class="font-bold">gently</span> fold in the remaining whipped cream.
            Spoon the chocolate mousse onto the raspberry layer.
            Place the cake into the fridge for at least 4 hours, or freeze for 2 hours.
            title: Chocolate Ganache Glaze:
            Prepare a tray with wax paper and place a wire rack over it. Take the cake out of the springform pan and place the cake on top of the wire rack. This setup should allow you to catch any ganache that is poured over. If frozen, leave the cake out for 1 hour to let it come up to room temperature.
            Place the chocolate into a bowl.
            In a small saucepan, or using the microwave, bring the cream to a boil. Add the cream to the bowl of chocolate in small increments while stirring until the mixture is smooth. Then pour in the remaining cream. With a spatula, stir the ganache until smooth.
            Pour the chocolate ganache over the cake so that the entire cake is glazed.`,
        tags: 'American, Dessert',
        initialServing: 12,
        minServing: 12,
        maxServing: 180,
        servingIncrements: 12,
    }]);
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Cake Layer:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Water', min_amount: '1/4'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Cake Layer:', amount: '4', measUnit_id: 'tsp(s)', ingredient_id: 'Canola Oil', min_amount: '4'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Cake Layer:', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'White Vinegar', min_amount: '2'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Cake Layer:', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '1/3'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Cake Layer:', amount: '3', measUnit_id: 'tbsp(s)', ingredient_id: 'Granulated Sugar', min_amount: '3'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Cake Layer:', amount: '1 1/2', measUnit_id: 'tbsp(s)', ingredient_id: 'Cocoa Powder', min_amount: '1 1/2'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Cake Layer:', amount: '1/8', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Soda', min_amount: '1/8'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Raspberry Mousse:', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Gelatin Powder', min_amount: '1'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Raspberry Mousse:', amount: '1', measUnit_id: 'tbsp(s)', ingredient_id: 'Water', min_amount: '1'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Raspberry Mousse:', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Raspberries', min_amount: '2'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Raspberry Mousse:', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Lemon Juice', min_amount: '1'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Raspberry Mousse:', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Raspberry Mousse:', amount: '1', measUnit_id: 'tbsp(s)', ingredient_id: 'Granulated Sugar', min_amount: '1'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Raspberry Mousse:', amount: '1/8', measUnit_id: 'cup(s)', ingredient_id: 'Water', min_amount: '1/8'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Raspberry Mousse:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Heavy Cream', min_amount: '1/4'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Chocolate Mousse:', amount: '140', measUnit_id: 'g', ingredient_id: 'Dark Chocolate, chopped', min_amount: '140'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Chocolate Mousse:', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Gelatin Powder', min_amount: '1'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Chocolate Mousse:', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Water', min_amount: '2'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Chocolate Mousse:', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Granulated Sugar', min_amount: '1/2'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Chocolate Mousse:', amount: '1 1/3', measUnit_id: 'cup(s)', ingredient_id: 'Heavy Cream', min_amount: '1 1/3'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Chocolate Ganache Glaze:', amount: '85', measUnit_id: 'g', ingredient_id: 'Dark Chocolate, chopped', min_amount: '85'},
        {recipe_id: 'Chocolate Raspberry Mousse Cake', component: 'Chocolate Ganache Glaze:', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Heavy Cream', min_amount: '1/3'}
    ]);

    //-- Fluffy BlueBerry Muffins --//
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

    //-- Grammy Vint's Good Bean Salad --//
    await db.insert(recipes).values([{
        name: 'Grammy Vint\'s Good Bean Salad', 
        image_src: './../../frontend/media/foodImgs/bean salad.png', 
        video: 'null', 
        avg_rating: 0, 
        numRatings: 0, 
        directions: `In a large bowl, combine chickpeas, kidney beans, black beans, corn ,onion, and red pepper.
            In a small bowl, whisk together vinegar, basil, olive oil, Dijon mustard, garlic, salt, hot pepper sauce and pepper.
            Pour contents of small bowl over contents of big bowl and toss together.
            Taste and adjust seasoning as necessary.
            Garnish with chopped parsley.
            Serve at room temperature. You can throw this together up to one day ahead of time.`,
        tags: 'American, Appetizer, Vegetarian',
        initialServing: 24,
        minServing: 24,
        maxServing: 120,
        servingIncrements: 24,
    }]);
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1', measUnit_id: '19 oz can', ingredient_id: 'Chickpeas', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1', measUnit_id: '19 oz can', ingredient_id: 'Kidney Beans', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1', measUnit_id: '15 oz can', ingredient_id: 'Black Beans', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1', measUnit_id: '12 oz can', ingredient_id: 'Corn Kernels', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Red Onion, diced', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1', measUnit_id: ' ', ingredient_id: 'Sweet Red Pepper, diced', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Red Wine Vinegar / Apple Cider Vinegar', min_amount: '1/2'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Basil', min_amount: '2'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Olive Oil', min_amount: '1/3'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1', measUnit_id: 'tbsp(s)', ingredient_id: 'Dijon Mustard', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1', measUnit_id: 'clove(s) of', ingredient_id: 'Garlic', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Hot Sauce', min_amount: '1/2'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Black Pepper', min_amount: '1/2'},
        {recipe_id: 'Grammy Vint\'s Good Bean Salad', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Fresh Parsley', min_amount: '1/2'}
    ]);

     //-- Grammy Vint's Rhubarb Cream Crumble --//
     await db.insert(recipes).values([{
        //TO DO: Replace the following content. 
        name: 'Grammy Vint\'s Rhubarb Cream Crumble', 
        image_src: './../../frontend/media/foodImgs/rhubarbCreamCrumble.jpg', 
        video: 'null', 
        avg_rating: 0, 
        numRatings: 0, 
        directions: `Preheat over to 400&deg;F. Grease a 9" deep baking dish and set it aside.
            Melt the butter. 
            In a large bowl, mix the ingredients for the filling together until well-combined. Pour the mixture into the baking dish.
            Cut the cold butter up into cubes using a knife and add it to the same large bowl. 
            In the same large bowl, mix the ingredients for the crumble topping together until all ingredients are well-distributed.
            Scatter the crumble mixture all over the top of the filling, and place the baking dish into the over for 40 to 45 minutes or until beautifully golden brown.`,
        tags: 'American, Dessert',
        initialServing: 12,
        minServing: 12,
        maxServing: 120,
        servingIncrements: 12,
    }]);
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Filling:', amount: '3', measUnit_id: 'cup(s)', ingredient_id: 'Rhubarb, chopped', min_amount: '3'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Filling:', amount: '2', measUnit_id: ' ', ingredient_id: 'Egg(s)', min_amount: '2'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Filling:', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Unsalted Butter', min_amount: '2'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Filling:', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Granulated Sugar', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Filling:', amount: '3', measUnit_id: 'tbsp(s)', ingredient_id: 'Flour', min_amount: '3'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Crumble Topping:', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '1/2'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Crumble Topping:', amount: '3/4', measUnit_id: 'cup(s)', ingredient_id: 'Quick Oats', min_amount: '3/4'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Crumble Topping:', amount: '3/4', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar', min_amount: '3/4'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Crumble Topping:', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Powder', min_amount: '1'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Crumble Topping:', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Unsalted Butter', min_amount: '1/3'},
        {recipe_id: 'Grammy Vint\'s Rhubarb Cream Crumble', component: 'Crumble Topping:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Walnuts (optional)', min_amount: '1/4'}
    ]);

    //-- Onion Pancakes --//
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
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1 3/4', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '1 3/4'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '3', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '3'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1', measUnit_id: ' ', ingredient_id: 'Egg(s)', min_amount: '1'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Hot Water', min_amount: '1/2'},
        {recipe_id: 'Onion Pancakes', component: 'Dough:', amount: '3', measUnit_id: ' ', ingredient_id: "Tips of Green Onions", min_amount: '3'},
        {recipe_id: 'Onion Pancakes', component: 'Spread:', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Salted Butter', min_amount: '1/4'}
    ]);

    //-- Pavlova --//
    await db.insert(recipes).values([{
        name: 'Pavlova', 
        image_src: './../../frontend/media/foodImgs/pavlova.jpg', 
        video: 'null', 
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
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '3', measUnit_id: ' ', ingredient_id: 'Egg White(s)', min_amount: '3'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'White Wine Vinegar / Apple Cider Vinegar / Lemon Juice', min_amount: '2'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Cornstarch', min_amount: '1'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '1/8', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1/8'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1/4'},
        {recipe_id: 'Pavlova', component: 'Meringe Base', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Granulated Sugar', min_amount: '1/2'},
        {recipe_id: 'Pavlova', component: 'Toppings', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Heavy Cream', min_amount: '1'},
        {recipe_id: 'Pavlova', component: 'Toppings', amount: '2', measUnit_id: 'tsp(s)', ingredient_id: 'Granulated Sugar', min_amount: '2'},
        {recipe_id: 'Pavlova', component: 'Toppings', amount: '1', measUnit_id: 'tsp(s)', ingredient_id: 'Vanilla Extract', min_amount: '1'},
        {recipe_id: 'Pavlova', component: 'Toppings', amount: '2', measUnit_id: 'cup(s)', ingredient_id: 'Fresh Fruit', min_amount: '2'},
    ]);

    //-- Peach Crisp --//
    await db.insert(recipes).values([{
        name: 'Peach Crisp', 
        image_src: './../../frontend/media/foodImgs/peachCrisp.jpg', 
        video: 'null', 
        avg_rating: 0, 
        numRatings: 0, 
        directions: `Preheat oven to 375&deg;F.
            In a bowl, mix together the sliced peaches, brown sugar and flour until combined.
            In a separate bowl, mix together the ingredients for the topping until well-combined.
            Grease a 9" pie plate and pour in the filling.
            Spoon the topping over the filling.
            Bake at 375&deg;F for 30-35mins. 
            Remove from oven and leave to cool for at least 30 mins.`, 
        tags: 'American, Dessert',
        initialServing: 8,
        minServing: 8,
        maxServing: 160,
        servingIncrements: 8,
    }]);
    await db.insert(recipe_ingredient_measUnit).values([
        {recipe_id: 'Peach Crisp', component: 'Filling', amount: '10', measUnit_id: ' ', ingredient_id: 'Peaches', min_amount: '10'},
        {recipe_id: 'Peach Crisp', component: 'Filling', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar', min_amount: '1/4'},
        {recipe_id: 'Peach Crisp', component: 'Filling', amount: '2', measUnit_id: 'tbsp(s)', ingredient_id: 'Flour', min_amount: '2'},
        {recipe_id: 'Peach Crisp', component: 'Topping', amount: '1', measUnit_id: 'cup(s)', ingredient_id: 'Quick Oats', min_amount: '1'},
        {recipe_id: 'Peach Crisp', component: 'Topping', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Flour', min_amount: '1/2'},
        {recipe_id: 'Peach Crisp', component: 'Topping', amount: '1/3', measUnit_id: 'cup(s)', ingredient_id: 'Brown Sugar', min_amount: '1/3'},
        {recipe_id: 'Peach Crisp', component: 'Topping', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Ground Cinnamon', min_amount: '1/2'},
        {recipe_id: 'Peach Crisp', component: 'Topping', amount: '1/4', measUnit_id: 'tsp(s)', ingredient_id: 'Salt', min_amount: '1/4'},
        {recipe_id: 'Peach Crisp', component: 'Topping', amount: '1/2', measUnit_id: 'tsp(s)', ingredient_id: 'Baking Powder', min_amount: '1/2'},
        {recipe_id: 'Peach Crisp', component: 'Topping', amount: '1/2', measUnit_id: 'cup(s)', ingredient_id: 'Unsalted Butter', min_amount: '1/2'},
        {recipe_id: 'Peach Crisp', component: 'Topping', amount: '1/4', measUnit_id: 'cup(s)', ingredient_id: 'Walnuts (optional)', min_amount: '1/4'},
    ]);
    console.log('Seeded recipes...')

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