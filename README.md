# ElaineFoodWebsite

Front-end uses 
- "tailwind css": A utility-first CSS framework
- icons from heroicons.com
- Vanilla Javascript for some front-end features

Database is controlled using:
- Drizzle built on top of better-sqlite3 which is written in Typescript
- https://dev.to/aaronksaunders/drizzle-orm-sqlite-and-nuxt-js-getting-started-374m Guide on how to run Drizzle & Drizzle Studio:
    - in summary:
        - npm run db:generate //this generates the script in SQL that once run, will create the Database
        - npm run db:push //this runs the script to create the Database that should appear as "sqlite.db"
        - npm run db:seed //this runs the script using tsx ( TypeScript Execute) which converts TypeScript to JS.
        - npm run db:stdio //this generates a link to open in the browser that you can use to test run your database
        - rm sqlite.db //remove this file to kill the database
        - npm run db:drop // this kills the database
To Do:
- investigate using some other framework. 
- investigate if Vite is needed to use Drizzle

Next steps:
- Establish Backend to interact with the database



