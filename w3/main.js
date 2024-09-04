function determineHouseHoldPts(numberInHousehold) { 
    console.log("Inside the function");
    if (numberInHousehold === 1) {
        carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) {
        carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) {
        carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log('Based on the number of members of the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.')

}


let carbonFootprintPoints = 0;
// const numberInHousehold = 3;


// global scope 

determineHouseHoldPts(3)
determineHouseHoldPts(4)





function determineHouseSize(sizeHousehold) {
    console.log ("Inside the funtion");
    if (sizeHousehold === 10) {
        carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (sizeHousehold === 8) {
        carbonFootprintPoints = carbonFootprintPoints + 7;
    } else if (sizeHousehold === 5) {
        carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (sizeHousehold === 3) {
        carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log('Based on household size ${sizeHousehold) the points are ${carbonFootprintPoints}.');
}

const HouseSize = 3
determineHouseSize(8)
determineHouseSize(5)
determineHouseSize(3)