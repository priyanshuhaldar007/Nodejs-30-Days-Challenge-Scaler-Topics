const fs = require("fs");

function writeToFile(filePath, data) {
    // Implementation
    fs.writeFile(filePath, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return;
        }
        console.log("Data has been written to file successfully.");
    });
}

writeToFile('test-files/output1.txt', 'Sample content.');
// Expected Output: Data written to output1.txt

writeToFile('test-files/nonexistent-folder/output.txt', 'Content in a non-existent folder.');
// Expected Output: Error writing to file: ENOENT: no such file or directory...
