require("./config/dotEnv");

// 3rd Party Modules 
const express = require('express');
const passport = require("passport");

// User Defined Modules
const middleware = require("./middleware");
require("./config/mongodb");
const User = require("./route/User");
const Todo = require("./route/Todo");
require("./config/passport")(passport);

// Express Container
const app = express();

// Middleware
app.use(middleware.morgan);
app.use(middleware.bodyParser);
app.use("/user", User);
app.use("/todo", passport.authenticate('jwt', { session: false }), Todo);

// Server Listening
app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server is Running on PORT ${process.env.PORT}`);
});