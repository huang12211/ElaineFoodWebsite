const servingForm = document.getElementById("servingform");
const prevServSize = document.getElementById("serving");
let iniServSize = prevServSize.value;
console.log("initial servince size is " + iniServSize);

//This method takes in an int and returns the decimal as a fraction as type string 
function DecimToFrac(decimal) {
  wholeNum = Math.floor(decimal);
  remainder = decimal - wholeNum;
  if (remainder != 0) {
    //convert all numbers after the decimal point into a fraction. 
    denominator = Math.pow(10, remainder.toString().length - 2);
    numerator = remainder * denominator;
    //find the greatest common denominator
    gcd = numerator % denominator;
    var fracNum = numerator/gcd + "";
    var fracDenom = denominator/gcd +"";
    // console.log("fraction is " + fracNum + "/" + fracDenom);
  }
  let fraction = fracNum.concat("/", fracDenom);
  return fraction;
}

//This method takes in a string and converts it to decimal of type integer
function FracToDecim(fraction) {
  let wholeNum = 0;
  if (fraction.includes(" ")) {
    firstSplit = fraction.split(" ");
    wholeNum = parseInt(firstSplit[0], 10);
    fraction = firstSplit[1];
    result = wholeNum;
  }
  secondSplit = fraction.split("/");
  console.log(secondSplit);
  decimal = parseInt(secondSplit[0], 10) / parseInt(secondSplit[1], 10);
  result = wholeNum + decimal;
  return result;
}

//Testing above functions
//to Delete once working. 
console.log(FracToDecim("5 1/4"));
console.log(FracToDecim("1/3"));
console.log(DecimToFrac(5.25));
console.log(DecimToFrac(3));
//********************************************

function reCalcServSize(event) {
  //debugger
  event.preventDefault();
  desiredServing = document.getElementById("serving").value;
  console.log("the desired serving is " + desiredServing);

  ingrQuants = document.getElementsByClassName("quantity");
  ingrUnits = document.getElementsByClassName("measurementUnit");
  // console.log(ingrQuants);
  // console.log(ingrUnits);

  multiple = desiredServing / iniServSize;
  console.log("multiple is " + multiple);

  var newIngrQuants = new Array(ingrQuants.length);
  for (let i = 0; i < ingrQuants.length; i++) {
    ingrQuants[i] = parseInt(ingrQuants[i]);
    console.log(ingrQuants[i]);
    //update the HTML text of ingrQuants to the new values
    // newIngrQuants[i] = ingrQuants[i] * multiple;
    // console.log("the new IngrQuants[i] is " + newIngrQuants[i]);
    if (ingrUnits[i] === "cup" || ingrUnits[i] === "tbsp" || ingrUnits[i] === "tsp") {
      let newWholeNum = Math.floor(ingrQuants[i].value * multiple);
      let newRemainder = (ingrQuants[i].value * multiple) % 1;
      console.log("newWholeNum is " + newWholeNum);
      console.log("newRemainder is " + newRemainder);
      ingrQuants[i].innerHTML = concat(newWholeNum, " ", newRemainder);
    }
    else if (ingrUnits[i] === "") {

    }
    else {
      console.log("Error: no measurementUnit class was declared for this ingredient");
    }
  }

  //change the text of the checkboxes
  iniServSize = desiredServing;


}

servingForm.addEventListener("submit", reCalcServSize);