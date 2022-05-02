/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atlikas nurodytas užduotis
1. funkcija "filterDogOwers" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintin5.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];


console.log(users.filter(x => x.hasDog == true))

let resultDogOwner = users.filter(x => x.hasDog == true);
document.getElementById("listDogsOwners").innerHTML ="A list of dog owners: " + JSON.stringify(resultDogOwner);


const filterAdults = (users) => users.filter(user => user.age >= 18).map(user => ({ id: user.id, name: user.name, age: user.age, hasDog: user.hasDog }));
console.log(filterAdults(users))

document.getElementById("adults").innerHTML ="A list of adults (users who are 18 years or older): " +  JSON.stringify(filterAdults(users));


