// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold.
// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// Finally, check the amount against your bank account balance to see if you can afford it or not.
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance.""
// You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places.
// Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!
const TAX_RATE = 0.08;
const PHONE_PRICE = 94.00;
const SPENDING_THRESHOLD = 150.00;
const ACCESSORY_PRICE = 14.99;
var bankAccountBalance = 350.00;

function priceFormat(price){
  //declare & initialize variable for price string
  var formattedPrice = "";
  //convert price to string with two decimal places and assign to variable
  formattedPrice = "$" + price.toFixed(2);
  return formattedPrice;
}

function calculateTax(price){
  //declare and initialize variable for tax amount
  var taxAmount = 0;
  //multiply price value by tax rate and assign result to variable
  taxAmount = price * TAX_RATE;
  return taxAmount;
}

function buyPhone(phonePrice, accessory){
  var singlePhoneTotal = phonePrice;

  while (singlePhoneTotal < SPENDING_THRESHOLD){
    singlePhoneTotal += accessory;
  }

  return singlePhoneTotal;
}


function totalPriceOfPhonePurchase(){
  var total = 0;
  var priceInDollars = "";
  var costAfterTax = 0;
  bankAccountBalance = prompt("How much money do you have in the bank?");

  while (total < bankAccountBalance){
    total += buyPhone(PHONE_PRICE, ACCESSORY_PRICE);
   console.log(total);
  }

  costAfterTax = calculateTax(total) + total;
  priceInDollars = priceFormat(costAfterTax);
  console.log("Your purchase total comes to: " + priceInDollars + ".");
  if (costAfterTax > bankAccountBalance){
    console.log("You cannot afford this purchase!");
  } else {
    console.log("Enjoy your purchase!");
  }

}

totalPriceOfPhonePurchase();
