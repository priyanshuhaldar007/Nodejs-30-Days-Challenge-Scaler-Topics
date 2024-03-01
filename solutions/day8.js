const express = require("express");
const positiveIntegerHandler = require("./handleNumberMiddleware");
const errorHandler = require("./errorHandlingMiddleware");

const app = express();

app.use("/checkNumber", errorHandler);
app.get("/checkNumber", (req, res) => {
    const number = req.query.number;

    // Validate the parameter
    if (isNaN(number) || parseInt(number, 10) <= 0) {
        throw new Error("Invalid parameter: number must be a positive integer");
    }

    // Valid case - return success message
    res.json({ message: "Success!" });
});

app.listen(5050, () => {
    console.log("Server running on port 5050");
});
