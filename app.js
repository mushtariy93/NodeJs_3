// //problem1
// const fs = require("fs");
// const path = require("path");
// const createFreshFile = () => {
//   const dir = path.join(__dirname, "files");
//   const filePath = path.join(dir, "fresh.txt");
//   const content = "I am fresh and young";
//   if (!fs.existsSync(dir)) {
//     fs.mkdirSync(dir);
//   }
//   fs.open(filePath, "wx", (err, fd) => {
//     if (err) {
//       if (err.code === "EEXIST") {
//         console.error("FS operation failed");
//       } else {
//         console.error(err);
//       }
//       return;
//     }
//     fs.write(fd, content, (err) => {
//       if (err) {
//         console.error(err);
//         return;
//       }
//       fs.close(fd, (err) => {
//         if (err) {
//           console.error(err);
//         }
//       });
//     });
//   });
// };
// createFreshFile();

// //problem 2
// const fs = require("fs").promises;
// const path = require("path");

// const copyDirectory = async (src, dest) => {
//   try {
//     await fs.access(src);
//   } catch (err) {
//     console.error("FS operation failed");
//     return;
//   }
//   try {
//     await fs.access(dest);
//     console.error("FS operation failed");
//     return;
//   } catch (err) {
//   }
//   try {
//     await fs.mkdir(dest);
//     const entries = await fs.readdir(src, { withFileTypes: true });
//     for (const entry of entries) {
//       const srcPath = path.join(src, entry.name);
//       const destPath = path.join(dest, entry.name);

//       if (entry.isFile()) {
//         await fs.copyFile(srcPath, destPath);
//       } else if (entry.isDirectory()) {
//         console.error(
//           "FS operation failed"
//         );
//         return;
//       }
//     }
//     console.log("Copied successfully!");
//   } catch (err) {
//     console.error("FS operation failed", err);
//   }
// };
// const srcDir = path.join(__dirname, "files");
// const destDir = path.join(__dirname, "files_copy");

// copyDirectory(srcDir, destDir);

//problem 3
// const fs = require("fs").promises;
// const path = require("path");
// const renameFile = async () => {
//   const oldPath = path.join(__dirname, "wrongFilename.txt");
//   const newPath = path.join(__dirname, "properFilename.md");
//   try {
//     await fs.access(oldPath);
//   } catch (err) {
//     console.error("FS operation failed");
//     return;
//   }
//   try {
//     await fs.access(newPath);
//     console.error("FS operation failed");
//     return;
//   } catch (err) {
//   }
//   try {
//     await fs.rename(oldPath, newPath);
//     console.log("File renamed successfully!");
//   } catch (err) {
//     console.error("FS operation failed", err);
//   }
// };
// renameFile();

//problem4

// const fs = require("fs");
// const path = require("path");
// const deleteFile = () => {
//   const filePath = path.join(__dirname, "fileToRemove.txt");
//   fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.error("FS operation failed");
//       return;
//     }
//     fs.unlink(filePath, (err) => {
//       if (err) {
//         console.error("FS operation failed", err);
//         return;
//       }
//       console.log("File deleted successfully!");
//     });
//   });
// };

// deleteFile();

//problem5

// const fs = require("fs");
// const path = require("path");

// const listFiles = () => {
//   const dirPath = path.join(__dirname, "files");
//   fs.access(dirPath, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.error("FS operation failed");
//       return;
//     }
//     fs.readdir(dirPath, (err, files) => {
//       if (err) {
//         console.error("FS operation failed", err);
//         return;
//       }
//       console.log("Files in directory:");
//       files.forEach((file) => {
//         console.log(file);
//       });
//     });
//   });
// };

// listFiles();


//problem6

// const fs = require("fs");
// const path = require("path");

// const readFile = () => {
//   const filePath = path.join(__dirname, "fileToRead.txt");
//   fs.access(filePath, fs.constants.F_OK, (err) => {
//     if (err) {
//       console.error("FS operation failed");
//       return;
//     }
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) {
//         console.error("FS operation failed", err);
//         return;
//       }
//       console.log("File content:");
//       console.log(data);
//     });
//   });
// };
// readFile();


//problem 7
// const fs = require('fs');
// const path = require('path');
// const writeNumbers = () => {
//   const numbers = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100));
//   const data = numbers.join('\n');
//   const filePath = path.join(__dirname, 'sonlar.txt');

// }
 
// writeNumbers();