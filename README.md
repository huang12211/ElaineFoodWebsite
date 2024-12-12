# ElaineFoodWebsite

Front-end uses 
- "tailwind css": A utility-first CSS framework
- icons from heroicons.com
- Vanilla Javascript for some front-end features

BACKEND:
Database is controlled using:
- Drizzle built on top of better-sqlite3 which is written in Typescript
- https://dev.to/aaronksaunders/drizzle-orm-sqlite-and-nuxt-js-getting-started-374m Guide on how to run Drizzle & Drizzle Studio:
- in Summary:
    - ** npm run db:create ** //this generates, pushes and seeds the database (see below for more details on each of these individual steps)
    - npm run db:generate //this generates the script in SQL that once run, will create the Database
    - npm run db:push //this runs the script to create the Database that should appear as "sqlite.db"
    - npm run db:seed //this runs the script using tsx ( TypeScript Execute) which converts TypeScript to JS.
    - npm run db:studio //this generates a link to open in the browser that you can use to make sure you're seeding your database correctly/setup your database correctly without having to setup the server that will host the database
    
    - sqlite3 sqlite.db // this can be used to test sql queries before going through a server. 

    - ** npm run db:destroy ** //this removes the file to kill the database adn kills the database
    - rm sqlite.db //remove this file to kill the database
    - npm run db:drop // this kills the database


The server running the Drizzle Database will be written to such that it becomes an Express API in Typescript
reference: https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln 
https://everythingcs.dev/blog/nodejs-drizzle-orm-setup-crud-operation-typescript/#step-1-setting-up-express-app 

The server commands are as follows:
- npm run svr:start //run this when in dev mode
- npm run svr:build //run this to build the Typescript files
- npm run svr:serve //run this to serve the compiled JavaScript files
- 


Current Step:
- Establish Backend to interact with the database using express framework first to see if it will work. 
- Implement the Search page to be able to search through the recipes in the database to:
    - find all recipes with a certain ingredient
    - find all recipes tagged as desserts, main, side, drink, appetizer, etc. 
    - 

Next steps:
- populate recipe pages' content dynamically using content stored in the database (create your own Make() function) see example: https://github.com/glyphr-studio/Glyphr-Studio-2/blob/main/src%2Fcommon%2Fdom.js#L12 
- Create routes to different recipes and navigation automatically 
- Install validation and error handling of our API to ensure that the data we receive from clients is valid and that we provide meaningful error messages: (refer to source: https://dev.to/wizdomtek/typescript-express-building-robust-apis-with-nodejs-1fln)

Bugs requiring further investigations:
- Able to delete all users by ID except for #1 and #2; why? 



