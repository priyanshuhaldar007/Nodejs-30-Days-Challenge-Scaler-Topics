const express = require("express");
const path = require("path");

const app = express();

// Apply the middleware globally
app.get("/", (req, res) => {
    // Set the root directory for static files
    const staticPath = path.join(__dirname, "public");

    // Serve static files from the "public" directory
    express.static(staticPath)(req, res, (err) => {
        if (err) {
            // Handle potential errors during static file serving
            console.error("Error serving static file:", err);
            res.status(500).send("Internal Server Error");
        }
    });
});

app.get("/styles/style.css", (req, res) => {
    // Set the root directory for static files
    const staticPath = path.join(__dirname, "public/styles/");

    // Serve static files from the "public" directory
    express.static(staticPath)(req, res, (err) => {
        if (err) {
            // Handle potential errors during static file serving
            console.error("Error serving static file:", err);
            res.status(500).send("Internal Server Error");
        }

        res.sendFile(path.join(staticPath,'/style.css'));
    });
});

// Additional routes or logic here

app.listen(5050, () => {
    console.log("Server listening on port 5050");
});
