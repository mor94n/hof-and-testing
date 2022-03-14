//W4, THURSDAY
//TESTING CHALLENGES

//CREATE FUNCTIONS AND TEST ON THE FOLLOWING:

//To make sure what is returned is not null
function bingBong() {
    return 5};

//A value that is truthy
//A value that is not falsy
const truuth = (num1, num2) => {
    if (num1 === num2) {
        return true;
    } else{
        return false;}}

//create a function that creates an object with 2 properties, test to make sure that the objects properties are equal to your test function
const cat = () => {
    return {name: 'Chewy',
            age: 'unknown'};
};

//A function that will return items in an array with 6 or more characters
let arrInput = ['apple','orange','grape','watermelon','guava','banana']; 
const arrFunc = (array) => {
	return array.filter((arrInput) => arrInput.length >= 6);
};

//convert a number to a string
const convertNumberToString = (num) => {
	return num.toString();
};

//Display the correct planet with the number order it is away from the sun
const getPlanet = (order) => {
	const planets = [
		'Mercury',
		'Venus',
		'Earth',
		'Mars',
		'Jupiter',
		'Saturn',
		'Uranus',
		'Neptune',
	];
	return planets[order - 1];
};

//Count the amount of students present in the class. With an array or boolean values, count how many students are present 
const countStudents = (attendanceArray) => {
	return attendanceArray.filter((attendance) => attendance === true).length;
}

    module.exports = {bingBong, truuth, cat, arrFunc, convertNumberToString, getPlanet, countStudents}

