const path = require('path');

function checkFileExtension(file_path, ext) {
    const file_ext = path.extname(file_path);

    if(file_ext === ext){
        console.log(`File has the expected extension: ${ext}`);
    }
    else{
        console.log(`File does not have the expected extension. Expected: ${ext}, Actual: ${file_ext}`);
    }

}

checkFileExtension('test-files/file1.txt', '.txt');
// Expected Output: File has the expected extension: .txt

checkFileExtension('test-files/image.png', '.jpg');
// Expected Output: File does not have the expected extension. Expected: .jpg, Actual: .png