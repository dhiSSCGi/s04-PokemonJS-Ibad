// What are conditional statements?

//Conditional statements allows us to control the flow of our program. It allows us to run a statement/instruction if a condition is met or run another separate instruction if otherwise.

// if, else if and else statement

let numA = 1;

// if statement - executes a statement if a specified condition is true

if (numA < 0) {
  console.log("Hello");
} else {
  console.log("Hello Again");
}
/**
 * Syntax: if(condition){
 *  statement;
 * }
 */

//The result of the expression added in the if's condition must result to true, else, the statement inside the if() will not run

//else if clause
/**
 * -executes a statement if previous conditions are false and if the specified condition is true
 * - the "else-if" clause is optional and can be added to capture additional conditions to change the flow of a program
 */

let city = "New york";

if (city === "New York") {
  console.log("Welcome to NY!");
} else if (city === "New york") {
  console.log("Welcome to New York!");
} else {
  console.log("Again");
}

// we were able to run the else if() statement after we evaluated that the if condition was failed

// if the if() condition was passed and run, we will no longer evaluate to else if() and end the process there

//else
/**
 * - executes a statement if all other conditions are false
 * - the 'else' statement is optional and can be added to capture any result to change the flow of any program
 *
 * - the "return" statement can be utilized with conditional statements in combination with functions to change values to be used for other features of our application.
 */

let message = "No message.";

function determineTyphoonIntensity(windSpeed) {
  if (windSpeed < 30) {
    return "Not a typhoon yet.";
  } else if (windSpeed <= 61) {
    return "Tropical depression detected.";
  } else if (windSpeed >= 62 && windSpeed <= 88) {
    return "Tropical storm detected.";
  } else if (windSpeed >= 89 && windSpeed <= 117) {
    return "Severe Tropical storm detected.";
  } else {
    return "Typhoon detected.";
  }
}
let windSpeed = 85;
windSpeed < 30
  ? (message = "Not a typhoon yet.")
  : windSpeed <= 61
  ? (message = "Tropical depression detected.")
  : windSpeed >= 62 && windSpeed <= 88
  ? (message = "Tropical storm detected.")
  : windSpeed >= 89 && windSpeed <= 117
  ? (message = "Severe Tropical storm detected.")
  : (message = "Typhoon detected.");

// returns the string to the variable "message" that invoked it.
// message = determineTyphoonIntensity(85);
console.log(message);

//console.warn() is a good way to print warnings in our console that could help us developer act on a certain output within our code.
if (message == "Tropical storm detected.") {
  console.warn(message);
}

//[Section] Truthy and Falsy
/**
 * - In JS, a 'truthy' value is a value that is considered true when a encountered in a Boolean context
 * - values are considered true unless defined otherwise
 *
 * - Falsy values/exceptions for truthy
 * 1. false
 * 2. 0
 * 3. -0
 * 4. ""
 * 5. null
 * 6. undefined
 * 7. NaN
 */

if (true) {
  console.log("Truthy");
}
if (1) {
  console.log("Truthy");
}
if (undefined) {
  console.log("Falsy");
}

if (0) {
  console.log("Falsy");
}
if ([]) {
  console.log("Truthy");
}
if ("") {
  console.log("Falsy");
}

//Conditional (Ternary) Operator
/**
 * The conditional (ternary) operator takes is three operands
 * 1. condition
 * 2. expression to execute if the condition is truthy
 * 3. expression to execute if the condition is falsy
 *
 * - can be used as an alternative to an "If-else" statement
 * - Ternary operators have an implicit 'return' statement meaning without 'return' keyword, the resulting expression can be stored in a variable
 *
 * Syntax: (expression)?ifTrue:ifFalse;
 */
// Single Statement Execution
let ternaryResult = 1 < 18 ? true : false;

numA < 0 ? console.log("Hello") : console.log("Hello Again");

// windSpeed < 30
//   ? (message = "Not a typhoon yet.")
//   : windSpeed <= 61
//   ? (message = "Tropical depression detected.")
//   : windSpeed >= 62 && windSpeed <= 88
//   ? (message = "Tropical storm detected.")
//   : windSpeed >= 89 && windSpeed <= 117
//   ? (message = "Severe Tropical storm detected.")
//   : (message = "Typhoon detected.");

//Try-Catch-Finally
/**
 * - "try catch" are commonly used for error handling
 * - there are instances when the applications return an error/warning that is not necessarily an error in the context of our code
 * - these errors are the result of an attemptof the programming language to help developers in creating efficient code
 * - the 'finally' block is used to specify a response/action that is used to handle/resolve errors
 */

function showIntensityAlert(windSpeed) {
  try {
    alertat(determineTyphoonIntensity(windSpeed));
  } catch (error) {
    // typeof operator is used to check the data type of a value/expression and returns a string value/expression and returns a string value of what the data type is
    console.log(typeof error);

    //catch errors within try statement
    //In this care the error is an unknown function 'alertat' which does not exist in the JS

    //error.message is used to access the information relating to an error object
    console.log(error.message);
  } finally {
    //continue execution of code regardless of success and failure of code execution in try block to handle/resolve errors
    alert("Intensity updates will show new alert");
  }
}

showIntensityAlert(56);

/*
 
 */
