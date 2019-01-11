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