let x="hello";
let y=15;
let z=True;

const cars =["saab", "volvo", "bentley"];

for (let i =0; i<cars.length; i++){
    console.log(cars[i]);
}

/*Let’s create a class called Cars for a car parking company. 
This will allow you to store information of: 
car registration number, number of hours parked and total 
amount charged. (Say £1.50 per hour?)

The first car entered the car park, parked for 5 hours and 
ready to pay. Display this information so the driver can 
pay for his/her parking fee.*/

class Cars{
    constructor(regNum, arrivalTime, departureTime){
        this._reg = regNum;
        this._arrival = arrivalTime;
        this._departure = departureTime;
        this._costPerHour = 1.50;
        this._hasPaid = false;
    }
    get reg(){
        return this._reg;
    }
    get charge(){
        return  this._departure - this._arrival * this._costPerHour
    }

}


const AA11AAA = new Cars("AA11AAA", 3,8);


console.log(`You were here for ${this._departure-this._arrival}, please pay ${AA11AAA.charge}`);