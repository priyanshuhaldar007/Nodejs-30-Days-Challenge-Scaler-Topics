const path = require('path')

function resolvePath(file_path){
    console.log(path.resolve(file_path));
}

resolvePath('../solutions/test-files/file1.txt');
// Expected Output: Resolved Path: /Users/username/project/folder/file.txt

resolvePath('nonexistent-folder/file.txt');
// Expected Output: Resolved Path: /Users/username/nonexistent-folder/file.txt