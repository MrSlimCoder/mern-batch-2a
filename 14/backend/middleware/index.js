const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

module.exports = {
    morgan: morgan("tiny"),
    bodyParser: bodyParser.json(),
    cors: cors()
}