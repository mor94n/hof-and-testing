
//GOOGLE
// npm
//lodash

//Introduction to node
//Node is a runtime environment
//Works kind of like a browser-translates the code
//Node understands javascript outside of the browser
//Node is a huge reason for javascript surge
//Node can run js asymchronously
//Node is event driven
//Node was developed by Google,,, Open Source
//Googles V8 engine-c++
//Node allows us to connect to databases and access a comuters file system

//Node has a modular system
//Code can be separated in a modular way->> splitting functionality into individual files
//Start reading technical documentation when learning a new technology->> try to understand

//Module = JS file
//Modules can be required into any file
//Can control which data yo bring into a file-e.g. you can bring a single function into another file
//Good for automation

//There is a persistent reference to a module--Always stored in memory
//modules can be manipulated without changing the code from the module
//Gitignore- a shadow file which tells us which files to ignore

//Local modules-we make
//core modules-built intonode
//third party--build by someone else


const {multiply} = require("C:\Users\morga\OneDrive\Documents\code\CN Master Course\W4\W4.1\myModule.js");  //can list different properties in the object

console.log(multiply(3234,3492));

const myModule = require("myModule.js");

console.log(myModule.add(435,283));      //WHAT YOU IMPORT DEPENDS ON HOW MUCH DATA YOU WANT ACCESS TO

