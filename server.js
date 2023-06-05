//1. npm init -y
//2. npm i json-server
//3. create server.js
//4. Copy the template of json-server from npm json-server and paste into server.js
//5. node server.js =>  create db.json file
//

const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 4000; // you can use any port number here; i chose to use 3001

server.use(middlewares);
server.use(router);

server.listen(port, console.log(`${port} is running`));

//1. base url 'http://localhost:4000/'
//2. Endpoint "/api/products"
//3. Query param
