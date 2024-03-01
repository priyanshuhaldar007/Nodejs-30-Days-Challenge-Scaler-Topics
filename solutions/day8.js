const express = require("express");
const positiveIntegerHandler = require("./handleNumberMiddleware");
const errorHandler = require("./errorHandlingMiddleware");

const app = express();

app.use("/checkNumber",errorHandler);
app.get("/checkNumber",positiveIntegerHandler);

app.listen(5050, () => {
    console.log("Server running on port 5050");
});
