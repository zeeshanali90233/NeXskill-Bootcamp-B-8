// Arrays

const myUsers = ["Zeeshan", "Ali", "Asad", "Muhammad"];
console.log(myUsers);
myUsers.push("Mehdi");

// End: Add
myUsers.push("Xyz");
myUsers.push("AHmad");

console.log(myUsers);
// POp: Removes from the end
myUsers.pop();
myUsers.pop();
console.log(myUsers);

myUsers.unshift("Kashif");
console.log(myUsers);

myUsers.shift();
console.log(myUsers);

// Index of Element, -1 if not exists
console.log(myUsers.indexOf("dsfdf"));

const licensedPeoples = ["Zeeshan", "Ali", "Asad"];
// Tell Whether a element is in array or not
console.log(licensedPeoples.includes("Ali"));
// reverse the array
const newArray = licensedPeoples.reverse();
console.log(licensedPeoples.concat(myUsers));

console.log(licensedPeoples.length);
// Array Elements Traversed
for (let i = 0; i <= licensedPeoples.length - 1; i++) {
  console.log(licensedPeoples[i]);
}

function showName() {
  console.log("My Name is Zeeshan");
}
const getPizza = () => {
  console.log("You pizza is dfg");
};
getPizza();
// Map
console.log("Below is this Map");
licensedPeoples.map((name) => {
  console.log(name);
});

function orderPizza(askFlavour) {
  console.log("I am ordering pizza");
  askFlavour();
}
// We passed function , to a function as parameter: Callback Function
orderPizza(() => {
  console.log("I Asked the flavour");
});

// 2D
const matrix = [
  [2, 5, 3, 4],
  [4, 7, 1, 5],
  [3, 0, 5, 8],
  [3, 2, 7, 8],
];
// 3D
const matrix3d = [
  [
    [2, 3, 5],
    [1, 6, 4],
  ],
  [
    [6, 7, 9],
    [9, 8, 5],
  ],
];
console.log(matrix[1][1]);
console.log(matrix3d[1][0][2]);

let age = 34;
let hasLicense = true;
let city = "sahiwal";

if (age >= 18 && hasLicense == true && city == "lahore") {
  alert("You are eligible");
}

let isYourBirthday = false;
let hasGoodgrades = false;

if (isYourBirthday == true || hasGoodgrades == true) {
  alert("We will go for Icecream");
}

let isRaining = true;

if (!isRaining) {
  alert("YOu can go outside");
}
