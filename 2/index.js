// EXPRESS.js (REST API FRAMEWORK)

// API - Application Programming Interface

// REST VS SOAP VS GRAPHQL

// REST API

// get(), post(), put(), patch(), delete()
// const myJSON = {
//     name: "Vivek",
//     lastName: "Anand"
// }

// SOAP API

// XML - Extensible Markup Language
{/* <MyData>
    <Name>Vivek</Name>
    <LastName>Anand</LastName>
</MyData> */}

// GRAPHQL - Query Language
// const myJSON = {
//     name: "vivek",
//     lastName: "Anand"
// }
// console.log(myJSON.name);


// Req, Res

// Req (Request): Data requested by backend 
// Res (Response): Send data to frontend

// Framework vs Library
// - Framework restructive by nature
// - Library freely by nature

// Production vs Development

// Development: Your system or programming locally
// Production: Your deployed system

// Middleware 

// SERVER or API (middleware, middleware) 

// Body-parser (it embbed data into req)


const express = require('express');
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();


app.use(morgan("tiny")); //middleware
app.use(bodyParser.json()) //middleware

let myJSON = {
    name: "Vivek",
    lastName: "Anand"
}

// BROWSER YAH POSTMAN
app.get('/',(req, res) => {
    res.send(myJSON);
});


// POSTMAN
app.post("/",(req, res) => {
    let data = req.body;
    res.send(data);
})

// POSTMAN
app.put("/",(req,res) => {
    myJSON.name = "ABC";
    myJSON.lastName = "XYZ";
    res.send(myJSON);
})

// POSTMAN
app.patch("/", (req,res) => {
    myJSON.name = "123";
    res.send(myJSON);
})

// POSTMAN
app.delete("/", (req,res) => {
    delete myJSON.name;
    res.send(myJSON);
})

app.listen(3000, (err) => {
    if (err) console.log(err);
    else console.log("Server is Running on PORT 3000");
});

