const express = require("express");
const logingMiddleware = require("./logingMiddleware");

const app = express();

app.use(logingMiddleware);

app.get("/", (req, res) => {
    let name = req.query.name ? req.query.name : "Guest";
    res.send(`Hello, ${name}!`);
});

app.listen(5050, () => {
    console.log("Server running on port 5050");
});
