const servingForm = document.getElementById("servingform");
const prevServSize = document.getElementById("serving");
let iniServSize = prevServSize.value;
let minServSize = prevServSize.min;
console.log("initial serving size is " + iniServSize, "min serving size is " + minServSize);

function SimplifyFrac(num, denom) {
  tempNum = num;
  tempDenom = denom;

  //find the greatest common denominator
  do {
    gcd = tempNum % tempDenom;
    // console.log("gcd is " + gcd);
    // console.log("fraction is " + fracNum + "/" + fracDenom);
    tempNum = tempDenom;
    tempDenom = gcd;
  } while (gcd != 0);
  gcd = tempNum;
  // console.log("final gcd is " + gcd);

  //print out the fraction
  var fracNum = num / gcd + "";
  var fracDenom = denom / gcd + "";

  return [fracNum, fracDenom];
}

//This method takes in an int and returns the decimal as a fraction as type string 
function DecimToFrac(decimal) {
  wholeNum = Math.floor(decimal);
  remainder = decimal - wholeNum;
  if (remainder != 0) {
    //convert all numbers after the decimal point into a fraction. 
    denominator = Math.pow(10, remainder.toString().length - 2);
    numerator = remainder * denominator;
    // console.log("numerator is " + numerator + " and denominator is " + denominator);

    [fracNum, fracDenom] = SimplifyFrac(numerator, denominator);

    if (wholeNum == 0) {
      fraction = fracNum.concat("/", fracDenom);
    }
    else {
      wholeNum = wholeNum + "";
      fraction = wholeNum.concat(" ", fracNum, "/", fracDenom);
    }
  }
  else {
    fraction = wholeNum;
  }
  return fraction;
}

//This method takes in a string and converts it to decimal of type integer
function FracToDecim(fraction) {
  let wholeNum = 0;
  if (!fraction.includes(" ") && !fraction.includes("/")) {
    result = fraction;
  }
  else {
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
  }
  return result;
}


function reCalcServSize(event) {
  //debugger
  event.preventDefault();

  //clear the checkboxes
  let checkboxes = document.getElementById("ingr");
  checkboxes.checked = false;

  desiredServing = document.getElementById("serving").value;
  console.log("the desired serving is " + desiredServing);

  ingrQuants = document.getElementsByClassName("minQuantity");
  ingrQuantsOutputs = document.getElementsByClassName("quantity");
  ingrUnits = document.getElementsByClassName("measurementUnit");
  // console.log("ingrQuants" + ingrQuants);
  // console.log("inagrUnits" + ingrUnits);

  multiple = desiredServing / minServSize;
  multipleFrac = DecimToFrac(multiple);
  console.log("multiple is " + multiple + " mulipleFrac is " + multipleFrac);

  // var newIngrQuants = new Array(ingrQuants.length); //new ingredient quantities that should be printed
  for (let i = 0; i < ingrQuants.length; i++) {
    ingrQuants[i] = parseInt(ingrQuants[i]);
    console.log("ingrQuants[i] for " + i + " is: " + ingrQuants[i].innerText);
    var oldValue = ingrQuants[i].innerText;

    if (ingrUnits[i].innerText.includes("cup") ||
      ingrUnits[i].innerText.includes("tbsp") ||
      ingrUnits[i].innerText.includes("tsp")) {
      console.log("value before multiplication is " + oldValue);

      //if the oldvalue is a fraction.
      if (oldValue.includes("/")) {
        //identify ingrQuants[i]'s num and denom
        oldValueNum = 0;
        if (oldValue.includes(" ")) {
          var oldQuantsWholeSplit = oldValue.split(" ");
          oldValueNum = parseInt(oldQuantsWholeSplit[0]);
          console.log("if whole value is present in oldValueNum, it is " + oldValueNum);
          oldValue = oldQuantsWholeSplit[1];
        }
        oldQuantsSplit = oldValue.split("/");
        oldValueDenom = parseInt(oldQuantsSplit[1]);
        oldValueNum = oldValueNum * oldValueDenom + parseInt(oldQuantsSplit[0]);
        console.log("oldValueNum is " + oldValueNum +
          " and oldValueDenom is " + oldValueDenom);

        if (multipleFrac != multiple) { //if the multiple is also a fraction.
          //identify multipleFrac's num and denom
          multipleFracSplit = multipleFrac.split("/");
          multipleFracNum = parseInt(multipleFracSplit[0]);
          multipleFracDenom = parseInt(multipleFracSplit[1]);
          console.log("multipleFracNum is " + multipleFracNum +
            " and multipleFracDenom is " + multipleFracDenom);
          //multiply numerators
          newValueNum = oldValueNum * multipleFracNum + "";

          //multiply denominators
          newValueDenom = oldValueDenom * multipleFracDenom + "";

          if (newValueDenom == 1) {
            newValue = newValueNum;
          }
          else {
            newValue = newValueNum.concat("/", newValueDenom);
          }
        }
        else {
          newValueNum = oldValueNum * multiple;
          newValueDenom = oldValueDenom;
          //reduce fractions
          [newValueNum, newValueDenom] = SimplifyFrac(newValueNum, newValueDenom);
          if (newValueDenom == 1) {
            newValue = newValueNum;
          }
          else {
            newValue = newValueNum.concat("/", newValueDenom);
          }
        }
      }
      //if the oldvalue is not a fraction.
      else {
        newValue = DecimToFrac(oldValue * multiple);
      }

      console.log("value after multiplication is " + newValue);
      ingrQuantsOutputs[i].innerHTML = newValue;
    }
    else if (ingrUnits[i] === "") {
      console.log("ingrUnits[i] is " + "nothing")

    }
    else {
      console.log("ingrUnits[i] for" + i + " is " + ingrUnits[i].innerText);
      console.log("Error: no measurementUnit class was declared for this ingredient");
      newValue = DecimToFrac(oldValue * multiple);
      ingrQuantsOutputs[i].innerHTML = newValue;
    }
  }
}


servingForm.addEventListener("submit", reCalcServSize);