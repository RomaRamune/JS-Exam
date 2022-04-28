/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */


const weightInput = document.getElementById("search");
const form = document.querySelector("form");
const weightDisplay = document.getElementById("output");

form.addEventListener("submit", calculateWeight);

function calculateWeight(event) {
  event.preventDefault()
  const lb = 2.2046;
  const g = 0.0010000;
  const oz = 35.274;
  const kg = Number(weightInput.value);
  const lbResult = kg*lb;
  const gResult = kg/g;
  const ozResult = kg*oz;

  if (kg == "") {
    alert("Please enter kilograms!");
  } else if (kg < 0) {
    alert("Value cannot be negative!");
  } else {
    weightDisplay.textContent = `Weight in pounds (lb): ${lbResult}; Weight in grams (g): ${gResult}; Weight in ounce (oz): ${ozResult}`;
    console.log(`Weight in pounds (lb): ${lbResult}; Weight in grams (g): ${gResult}; Weight in ounce (oz): ${ozResult}` );
  }
}