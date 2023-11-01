const fs = require('fs');
const prompt = require('prompt-sync')({ sigint: true });

function asynchronousRead() {
  fs.readFile('file.txt', function (error, data) {
    if (error) {
      return console.error(error);
    }
    console.log("Asynchronous read: " + data.toString());
  });
}

function synchronousRead() {
  try {
    var data = fs.readFileSync('file.txt');
    console.log("Synchronous read: " + data.toString());
  } catch (error) {
    console.error(error);
  }
}

function openFile() {
  console.log("Opening the file");
  fs.open('file.txt', 'r+', function (err, fd) {
    if (err) {
      return console.error(err);
    }
    console.log("File Opened Successfully");
  });
}

function writeFile() {
  fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Write operation complete.');
    }
  });
}

function appendToFile() {
  var data = "\nLearn Node.js with the help of a well-built Node.js Tutorial.";
  fs.appendFile('file.txt', data, 'utf8', function (err) {
    if (err) throw err;
    console.log("Data is appended to the file successfully.");
  });
}

function renameFile() {
  const oldFileName = prompt("Enter the name of the old file: ");
  const newFileName = prompt("Enter the name of the new file: ");
  fs.rename(oldFileName, newFileName, (err) => {
    if (err) {
      console.error("Error renaming the file:", err);
    } else {
      console.log('File Renamed!');
    }
  });
}

function copyFile() {
  const sourceFile = prompt("Enter the name of the source file: ");
  const destinationFile = prompt("Enter the name of the destination file: ");
  fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
      console.error("Error copying the file:", err);
    } else {
      console.log('File is copied!');
    }
  });
}

function deleteFile() {
  const fileName = prompt("Enter the name of the file to delete: ");
  fs.unlink(fileName, (err) => {
    if (err) {
      console.error("Error deleting the file:", err);
    } else {
      console.log('File deleted!');
    }
  });
}

console.log("Choose a file operation:");
console.log("1. Asynchronous Read from 'text.txt'");
console.log("2. Synchronous Read from 'text.txt'");
console.log("3. Open 'text.txt'");
console.log("4. Write to 'file.txt'");
console.log("5. Append to 'file.txt'");
console.log("6. Rename a file");
console.log("7. Copy a file");
console.log("8. Delete a file");
var choice = parseInt(prompt("Enter your choice: "));
switch (choice) {
  case 1:
    asynchronousRead();
    break;
  case 2:
    synchronousRead();
    break;
  case 3:
    openFile();
    break;
  case 4:
    writeFile();
    break;
  case 5:
    appendToFile();
    break;
  case 6:
    renameFile();
    break;
  case 7:
    copyFile();
    break;
  case 8:
    deleteFile();
    break;
  default:
    console.log("Invalid choice. Please select a valid option.");
}

console.log("Program Ended");
