/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri sukuria objektus 3 savybėm ir 1 metodu:

Savybės:
title, director, budget
Metodas: 
wasExpensive() - jeigu filmo budget bus didesnę nei 100 000 000 mln USD, tada gražins true, kiru atveju false 
------------------------------------------------------------------------------------------------------ */


// Constructor function for Person objects
function movie(title, director, budget) {
    this.title = title;
    this.director = director;
    this.budget = budget;
    this.wasExpensive = function() {
      return Boolean(budget>100000000);
    };
  }
  
  const movieForm = document.getElementById("movieForm");
  const title = document.getElementById("title");
  const director = document.getElementById("director");
  const budget = document.getElementById("budget");
  const movieResult = document.getElementById("MovieResult");

  movieForm.addEventListener("submit", returnResult);

  function returnResult(event) {
    event.preventDefault();
    let budgetValue = parseInt(budget.value);
    if (budgetValue>100000000) {
    document.getElementById("movieResult").innerHTML = "Was this movie expensive? The answer is: True";
    }
    else
    document.getElementById("movieResult").innerHTML = "Was this movie expensive? The answer is: False";
}


//Task can be solved as below as well:
// Create a movie object
const myMovie = new movie("Avatar", "James Cameron", 237000000);
  
// Display result
console.log ("This is the result of constant movie title:Avatar, director:James Cameron, budget:237000000 check. And the result is: " + myMovie.wasExpensive() + " because budget is more than 100 000 000 USD"); 