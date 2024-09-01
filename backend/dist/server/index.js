"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.API_ENDPOINT = void 0;
//this is where the express server code is initiated from
const express_1 = __importDefault(require("express"));
// Import Routers 
const users_1 = __importDefault(require("./routes/users"));
const recipes_1 = __importDefault(require("./routes/recipes"));
const ratings_1 = __importDefault(require("./routes/ratings"));
//create the server
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Hello, TypeScript Express Server Running!');
});
// Add Access Control Allow Origin headers
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//Mount the Routers
app.use(express_1.default.json());
app.use("/users", users_1.default);
app.use("/recipes", recipes_1.default);
app.use("/ratings", ratings_1.default);
//This code sets up a basic Express server that listens on port 3000 
//and responds with a greeting when the root path is accessed.
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
exports.API_ENDPOINT = `http://localhost:${port}`;
