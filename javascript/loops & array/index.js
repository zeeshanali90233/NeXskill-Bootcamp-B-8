userName = 23;
console.log(userName);
num1 = true;
num2 = 50;

console.log(num1 + num2);
console.log(typeof num1);

myAge = "26";
console.log(typeof myAge);
myCorrectAge = String(myAge);
console.log(typeof myCorrectAge);

// Datatypes
// String:
// Boolean
// Integers

// TYpe Casting:
// String "43" :
// Integer 1 : "1"
// String "true" : true

//

age = prompt("Enter your age?");
console.log(typeof age);
convertedAge = Number(age);
console.log(typeof convertedAge);

if (convertedAge < 18) {
  console.log("You are under 18");
} else {
  console.log("You are eligible");
}

// -2: -2<0 T
// 5: 5<0 F
while (convertedAge < 0) {
  age = prompt("Enter your age again?");
  convertedAge = Number(age);
}

// ASk user the starting value
// Then run for loop with that starting value

startingValue = prompt("Enter starting value");
startingValue = Number(startingValue);

for (let i = startingValue; i <= 100; i++) {
  console.log(i);
}

j = 5;
while (j < 10) {
  console.log(j);
  j++;
}

// j: 5, 5<10 T
// j:5 , 5<10
// j:5 , 5<10

userOption = prompt("Enter an Option: 1,2,3");
userOption = Number(userOption);

while (userOption > 3) {
  userOption = prompt("Incorrect Option: 1,2,3");
  userOption = Number(userOption);
}

userCity = "Lahore";

console.log(userCity == "Sahiwal");
console.log(userCity != "Sahiwal");

user1 = "Ali";
user2 = "Zeeshan";
user3 = "Zeese";
user4 = "Zeeefg";

// Arrays
users = ["Ali", "Zeeshan", "Zeese", "Zeeefg", "Asad"];
        // 0     1           2          3       4
// Sequentially Memory : Starting Point 

console.log(users[1])
