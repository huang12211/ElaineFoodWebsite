function launchServingSizeCalculations(){
  //This script allows the user ot increase/decrease the serving sizes
  const servingForm = document.getElementById("servingform");
  const prevServSize = document.getElementById("serving");
  let iniServSize = prevServSize.value;
  let minServSize = prevServSize.min;
  console.log("initial serving size is " + iniServSize, "min serving size is " + minServSize);

  //find the greatest common denominator
  function greatComDenom(tempNum, tempDenom) {
    do {
      var gcd = tempNum % tempDenom;
      // console.log("gcd is " + gcd);
      tempNum = tempDenom;
      tempDenom = gcd;
    } while (gcd != 0);
    gcd = tempNum;
    // console.log("final gcd is " + gcd);
    return gcd;
  }

  function SimplifyFrac(num, denom) {
    var gcd = greatComDenom(num, denom);
    //print out the fraction
    var fracNum = num / gcd + "";
    var fracDenom = denom / gcd + "";

    return [fracNum, fracDenom];
  }

  //This method takes in an int and returns the decimal as a fraction as type string 
  function DecimToFrac(decimal) {
    var wholeNum = Math.floor(decimal);
    var remainder = decimal - wholeNum;
    if (remainder != 0) {
      //convert all numbers after the decimal point into a fraction. 
      denominator = Math.pow(10, remainder.toString().length - 2);
      var numerator = remainder * denominator;
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
      var fraction = wholeNum;
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
    let checkboxes = document.getElementsByName("ingr");
    for (const element of checkboxes) {
      element.checked = false;
    }
    

    var desiredServing = document.getElementById("serving").value;
    console.log("the desired serving is " + desiredServing);

    let ingrQuants = document.getElementsByClassName("minQuantity");
    let ingrQuantsOutputs = document.getElementsByClassName("quantity");
    let ingrUnits = document.getElementsByClassName("measurementUnit");
    // console.log("ingrQuants", ingrQuants);
    // console.log("inagrUnits", ingrUnits);

    var multiple = desiredServing / minServSize;
    var multipleFrac = DecimToFrac(multiple);
    console.log("multiple is " + multiple + " multipleFrac is " + multipleFrac);

    // var newIngrQuants = new Array(ingrQuants.length); //new ingredient quantities that should be printed
    for (let i = 0; i < ingrQuants.length; i++) {
      // console.log("ingrQuants[i] for " + i + " is: " + ingrQuants[i].innerText);
      var oldValue = ingrQuants[i].innerText;

      if (ingrUnits[i].innerText.includes("cup") ||
        ingrUnits[i].innerText.includes("tbsp") ||
        ingrUnits[i].innerText.includes("tsp")) {
        // console.log("value before multiplication is " + oldValue);

        //if the oldvalue is a fraction.
        if (oldValue.includes("/")) {
          //identify ingrQuants[i]'s num and denom
          var oldValueWholeNum = 0; //initialize variable
          if (oldValue.includes(" ")) { //if a whole number exists in the oldvalue
            var oldQuantsWholeSplit = oldValue.split(" ");
            oldValueWholeNum = parseInt(oldQuantsWholeSplit[0]);
            // console.log("if whole value is present in oldValue, it is " + oldValueWholeNum);
            oldValue = oldQuantsWholeSplit[1];
          }
          var oldQuantsSplit = oldValue.split("/");
          var oldValueDenom = parseInt(oldQuantsSplit[1]);
          var oldValueNum = oldValueWholeNum * oldValueDenom + parseInt(oldQuantsSplit[0]);
          // console.log("oldValueNum is " + oldValueNum + " and oldValueDenom is " + oldValueDenom);
          
          var newValue = -1; 

          if (multipleFrac != multiple) { //if the multiple is also a fraction.
            //identify multipleFrac's num and denom
            var multipleFracSplit = multipleFrac.split("/");
            var multipleFracNum = parseInt(multipleFracSplit[0]);
            var multipleFracDenom = parseInt(multipleFracSplit[1]);
            // console.log("multipleFracNum is " + multipleFracNum + " and multipleFracDenom is " + multipleFracDenom);
            //multiply numerators
            var newValueNum = oldValueNum * multipleFracNum + "";

            //multiply denominators
            var newValueDenom = oldValueDenom * multipleFracDenom + "";

            if (newValueDenom == 1) {
              newValue = newValueNum;
            }
            else {
              newValue = newValueNum.concat("/", newValueDenom);
            }
          }
          else { //if the multiple is not a fraction
            newValueNum = oldValueNum * multiple;
            newValueDenom = oldValueDenom;
            //reduce fractions
            [newValueNum, newValueDenom] = SimplifyFrac(newValueNum, newValueDenom);
            if (newValueDenom == 1) { // if the denominator is 1, then the fraction is a whole number
              newValue = newValueNum;
            }
            else if (newValueNum > newValueDenom) {
              var remNewValueNum = newValueNum % newValueDenom;
              var newValue1 = Math.floor(newValueNum / newValueDenom);
              var newValue2 = remNewValueNum.toString().concat("/", newValueDenom);
              newValue = newValue1.toString().concat(" ", newValue2);
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
}

export {launchServingSizeCalculations};