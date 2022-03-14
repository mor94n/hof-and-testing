const testing = require('../testing.js')
const { expect, test } = require("@jest/globals");
const { describe } = require('yargs');


//CREATE FUNCTIONS AND TEST ON THE FOLLOWING:

//To make sure what is returned is not null
test('bingBong should not return null', () => {
    expect(testing.bingBong()).not.toBeNull();
});

//A value that is truthy
//A value that is not falsy
describe('will come back truthy', () => {
    test("should come back truthy", () =>{
        expect(testing.truuth(1,1)).toBeTruthy()
    });
    test("should come back not falsy", () =>{
        expect(testing.truuth(1,1)).not.toBeFalsy()
    }); 
});
//create a function that creates an object with 2 properties, test to make sure that the objects properties are equal to your test function
test("objects should match", () => {
    expect(testing.cat()).toMatchObject({name: 'Chewy',
    age: 'unknown'})
})

//A function that will return items in an array with 6 or more characters
test("only array elements with 6 or more characters will be returned", () => {
    expect(testing.arrFunc()).toReturn('orange','watermelon','banana');
    });


//Convert a number to a string
it('should convert number to string', () => {
	expect(app.convertNumberToString(17)).toBe('17');
});

//Display the correct planet with the number order it is away from the sun
describe('should display correct planet given order away from the Sun', () => {
	it('should return Earth given 3rd planet from Sun', () => {
		expect(app.getPlanet(3)).toBe('Earth');
	});

	it('should return Mercury given 1st planet from Sun', () => {
		expect(app.getPlanet(1)).toBe('Mercury');
	});
});

//Count the amount of students present in the class. With an array or boolean values, count how many students are present 
describe('should count number of present students', () => {
	it('should return 4 given 4 present students and 2 absent', () => {
		expect(
			app.countStudents([false, true, false, true, true, true]),
		).toBe(4);
	});

	it('should return 2 given 2 present students and 0 absent', () => {
		expect(app.countStudents([true, true])).toBe(2);
	});

	it('should return 0 given 2 absent students and 0 present', () => {
		expect(app.countAmountOfPresentStudents([false, false])).toBe(0);
	});
});
