// Write your solution in this file!

var customerName= 'bob';
const leastFavoriteCustomer= 'initial value';

function customer(){
return customerName;
}

function upperCaseCustomerName() {
    customerName=customerName.toUpperCase();
}
function setBestCustomer() {
    bestCustomer='not bob';
    return bestCustomer;
}


function overwriteBestCustomer() {
   bestCustomer= 'maybe bob';
   return bestCustomer;
}
function changeLeastFavoriteCustomer() {
leastFavoriteCustomer='not initial value';
}
