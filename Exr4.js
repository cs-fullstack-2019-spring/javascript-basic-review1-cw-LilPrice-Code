var ftemp = parseInt(prompt("What is the temperature?"));
var ctemp = Math.round((ftemp - 32) * 5/9);
console.log(ftemp  +" Fahrenheit equals " + ctemp + " in Celsius.");


// * Ask the user to input the temperature as a number (store in variable ```FTEMP```), and convert it to celcius (store in variable ```CTEMP```)
// * Log the message ```FTEMP Fahrenheit equals CTEMP in Celcius```
//
// Use the following line of code for the conversion (this uses a Math function which we will discuss more in future lessons):
//
// ```var CTEMP = Math.round((FTEMP - 32) * 5 / 9);```