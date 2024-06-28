// Task 1
let city = prompt("Enter your city name: ");
if (city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
} else {
    alert("Welcome to " + city);
}

// Task 2
let gender = prompt("Enter your gender (male/female): ");
if (gender.toLowerCase() === "male") {
    alert("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    alert("Good Morning Ma'am");
} else {
    alert("Invalid input");
}

// Task 3
let fuel = prompt("Enter the remaining fuel in litres: ");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
} else {
    alert("You have enough fuel");
}

// Task 4a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// Task 4b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// Task 4c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// Task 4d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// Task 4e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// Task 4f
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// Task 6
var num = prompt("Enter a number");
if (num % 3 === 0) {
    alert("The number is divisible by 3");
}

// Task 7
num = prompt("Enter a number");
if (num % 2 === 0) {
    alert("The number is even");
} else {
    alert("The number is odd");
}

// Task 8
var T = prompt("Enter temperature");
if (T > 40) {
    alert("It is too hot outside.");
} else if (T > 30) {
    alert("The Weather today is Normal.");
} else if (T > 20) {
    alert("Today's Weather is cool.");
} else if (T > 10) {
    alert("OMG! Today's weather is so Cool.");
} else {
    alert("Temperature is too low");
}

// Task 9
var num1 = parseFloat(prompt("Enter first number"));
var num2 = parseFloat(prompt("Enter second number"));
var operation = prompt("Enter operation (+, -, *, /, %)");
if (operation === "+") {
    var result = num1 + num2;
    alert("The result is " + result);
} else if (operation === "-") {
    var result = num1 - num2;
    alert("The result is " + result);
} else if (operation === "*") {
    var result = num1 * num2;
    alert("The result is " + result);
} else if (operation === "/") {
    if (num2 != 0) {
        var result = num1 / num2;
        alert("The result is " + result);
    } else {
        alert("Error! Division by zero is not allowed.");
    }
} else if (operation === "%") {
    if (num2 != 0) {
        var result = num1 % num2;
        alert("The result is " + result);
    } else {
        alert("Error! Division by zero is not allowed.");
    }
} else {
    alert("Invalid operation. Please enter +, -, *, / or %.");
}
