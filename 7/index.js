require("./config/dotEnv");

// 3rd Party Modules 
const express = require('express');

// User Defined Modules
const middleware = require("./middleware");
require("./config/mongodb");
const route = require("./route");

// Express Container
const app = express();

// Middleware
app.use(middleware.morgan);
app.use(middleware.bodyParser);
app.use(route);

// Server Listening
app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server is Running on PORT ${process.env.PORT}`);
});