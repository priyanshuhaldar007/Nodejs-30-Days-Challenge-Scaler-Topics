const child_process = require('child_process');

function executeCommand(command) {
    child_process.exec(command,(error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);      
    })
}

executeCommand('ls -la');

executeCommand('echo "Hello, Node.js!"');