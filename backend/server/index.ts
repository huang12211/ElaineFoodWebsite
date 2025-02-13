//this is where the express server code is initiated from
import express, { Request, Response } from 'express';
import axios from 'axios'; // for server self-pinging

// Import Routers 
import userRouter from "./routes/users";
import recipesRouter from "./routes/recipes";
import ratingRouter from "./routes/ratings";

//create the server
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express Server Running!');
});

// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//Mount the Routers
app.use(express.json())
app.use("/users", userRouter);
app.use("/recipes", recipesRouter)
app.use("/ratings", ratingRouter)


//This code sets up a basic Express server that listens on port 3000 
//and responds with a greeting when the root path is accessed.
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

//The following code makes sure that when using the free version of Render,
//The server does not time out after 15 mins.
const SERVER_URL = "https://elainefoodwebsite.onrender.com";
const INTERVAL = 15 * 60 * 1000; // Ping every 15 minutes

function keepAlive() {
    axios.get(SERVER_URL)
        .then(() => console.log(`Self-ping at ${new Date().toLocaleTimeString()}`))
        .catch((err:Error) => console.error(`Ping failed: ${err.message}`));
}

setInterval(keepAlive, INTERVAL);

export const API_ENDPOINT = `http://localhost:${port}`;