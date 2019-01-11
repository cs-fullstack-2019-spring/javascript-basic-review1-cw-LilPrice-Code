var loanamt = parseInt(prompt("Please enter the amount you would like to loan."));
while (loanamt <= 0 )
{
    loanamt = parseInt(prompt("Please enter a vaild amount."));
}
var nummonths = parseInt(prompt("Please enter the number of months to pay back the loan."));
while (nummonths <= 0)
{
    nummonths = parseInt(prompt("Please enter a valid length."));

}
console.log("To pay back the loan of " + loanamt + " it will take " + nummonths + " months to pay back.");



//Write a JavaScript program that does the following:
// * Prompts the User to enter their outstanding loan amount as a number (```LOANAMT```)
// * Prompts the User to enter the number of months in which they want to pay off the loan (```NUMMONTHS```)
// * Calculates the monthly payment they need to make and logs it to the console as ```To pay of a loan of LOANAMT it will take NUMMONTHS months```