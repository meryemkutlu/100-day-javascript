//console.log(window);

// console.log(Object.getOwnPropertyNames(window));

window.localStorage.setItem("firstName", "Zino");
localStorage.setItem("lastName", "Akpareva");

const person = {
    fullName: "Akpareva Zino",
    location: "Abuja",
};

localStorage.setItem("user", JSON.stringify(person));

const fruits = ["Pineapple", "Mango", "Pawpaw"];

localStorage.setItem("fruits", JSON.stringify(fruits));
//get item from local storage
console.log(localStorage.getItem("firstName"));
//remove item from local storage
localStorage.removeItem("fruits");
//clear local storage
localStorage.clear();

localStorage.setItem("name", "Zino");
localStorage.setItem("age", "27");

//console.log(localStorage.key());