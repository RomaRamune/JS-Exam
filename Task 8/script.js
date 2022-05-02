/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 3 metodais:
sum() - priima du skaičius ir grąžina jų sumą.
subtraction() - priima du skaičius ir grąžina jų skirtumą.
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */


const calculator = document.getElementById("calculator");
const firstNumber = document.getElementById("firstNumber");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");

calculator.addEventListener("submit", provideResult);

function provideResult(event) {
    event.preventDefault();
    let sum = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    let subtraction = parseInt(firstNumber.value) - parseInt(secondNumber.value);
    let multiplication = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    let division = parseInt(firstNumber.value) / parseInt(secondNumber.value);
    console.log(sum);
    console.log(subtraction);
    console.log(multiplication);
    console.log(division);
    result.textContent = "Sum of numbers: " + sum + "; " + "Subtraction of numbers: " + subtraction + "; " + "Multiplication of numbers: " + multiplication + "; " + "Division of numbers: " + division;
}