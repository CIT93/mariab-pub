console.log("top of file")
function determineHouseSizePts(size) {
       console.log("inside block scope");
       let houseSizePoints = 0;
        if (size === "large") {
            houseSizePoints = 10; 
         } else if (size === "medium") {
            houseSizePoints = 7;
        } else if (size === "small") {
            houseSizePoints = 4;
        } else if (size === "apt") {
            houseSizePoints = 2;
        }
        return houseSizePoints
}

let carbonFootPoints = 0;


const cpfData = [];


function determineHouseHoldPts(numberInHousehold) { 
    console.log("inside block scope");
    let houseHoldPoints = 0;
    if (numberInHousehold === 1) {
        houseHoldPoints = 14;
    } else if (numberInHousehold === 2) {
        houseHoldPoints = 12;
    } else if (numberInHousehold === 3) {
        houseHoldPoints = 10;
    } else if (numberInHousehold === 4) {
        houseHoldPoints = 8;
    } else if (numberInHousehold === 5) {
        houseHoldPoints = 6;
    } else if (numberInHousehold === 6) {
        houseHoldPoints = 4;
    } else if (numberInHousehold > 6) {
        houseHoldPoints = 2;
    }
return houseHoldPoints
}

function start(houseHoldMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
    const houseSizePTS = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePTS;
    cpfData.push([houseHoldMembers, houseSize, houseHoldPTS, houseSizePTS, total])
 }

function displayOutput() {
 for (arr of cpfData){
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    const newP2 = document.createElement("p2");
    const newP3 = document.createElement("p3");
    const newP4 = document.createElement("p4");
    const newP5 = document.createElement("p5");
    newP.textContent = 'Carbon Footprint total is ${arr[4]}';
    newP2.textContent = 'Number of household members ${arr[5]}';
    newP3.textContent = 'Score of house ${arr[6]}';
    newP4.textContent = 'Size of house ${arr[2]}';
    newP5.textContent = 'Score for size of house ${arr[8]}';
    output.appendChild(newP);
    output.appendChild(newP2);
    output.appendChild(newP3);
    output.appendChild(newP4);
    output.appendChild(newP5);
 }
}


start (5, "apt");
start (4, "large");
start (3, "medium");
start (2, "apt");
start (6, "large");
start (1, "apt");

displayOutput()







