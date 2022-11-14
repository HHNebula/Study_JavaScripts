let fs = require("fs");

let readFileSync = fs.readFileSync("/dev/stdin");
let toString = readFileSync.toString();
let trim = toString.trim();
let split = trim.split();

console.log();