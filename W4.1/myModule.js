//create basic functions
// const add = (num1, num2) => {
//     return num1 + num2;
// }

// const subtract = (num1, num2) => {
//     return num1 - num2;
// }

// const multiply = (num1, num2) => {
//     return num1 * num2;
// }

// module.exports = {         //this is an object
//     add,
//     subtract,
//     description: "Some cool stuff",
//     author: "me",
// }


//QUESTIONS

//using square brackets to access ovjects/properies//property ideas:  hp, class, stats  i.e, strength, intelligence, abilities
//items are possibilities


//CLASS IDEAS

//weapon class
//player class
//enemy class


//TO RESEARCH
//objects vs classes?
//automated adding and removing from classes
//which data sets should i work with externally?
//is game in browser or in console?
//os. , fs. 
//automated testing
//npm install
//json
//lodash
//.floor
//gitignore
//node modules-gitignore



//classList[player.class].[ability]*(player.stats.str)  //example

//controller
const os = require("os");
const fs = require("fs");

let userDetails = os.userInfo().username;

FileSystem.appendFile('oh-hi.txt', `hello ${userDetails}`, (err)=>{
    if (err){
        console.log('oops');
    }
})

