const fs = require ("fs");

// Synchronously write data to a file
// fs.writeFileSync("example.txt", "Hello, This is a sample text file.");

// Synchronously read data from the file
// const data = fs.readFileSync("test.txt", "utf8");
// console.log(data);

// Asynchronously write data from the file
// fs.writeFile("example_async.txt", "This is an asynchronously written file.", (err) => {
//     if (err) err;
//     console.log("File written successfully!");  
// });

// Asynchronously read data from the file
// fs.readFile("test.txt", "utf8", (err, data) => {
//     if (err) err;
//     console.log(data);
// });

// append data to a file
// fs.appendFileSync("test.txt", "\n This is append Text");

// copy a file
// fs.copyFileSync("test.txt", "copy.txt");

// delete a file
// fs.unlinkSync("copy.txt");

// calculate number of CPU cores
const os = require("os");
console.log(os.cpus().length);

