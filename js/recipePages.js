const servSize = document.getElementById("serving");
const iniServSize = servSize.value;

function reCalcServSize(event){
  desiredServing = event.target.value;
  ingrListBeforeMods = document.querySelector("input[type="checkbox"]");
  int multiple = desiredServing/iniServSize;
  
  //change the value of the ingredient List item
  ingrList = ingrList*multiple;

  //change the text of the checkboxes
}

servSize.addEventListener("input", reCalcServSize);