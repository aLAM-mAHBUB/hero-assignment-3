// First Problem: Kilometer to meter conversion calculator.

// we know, 1 kilometer = 1000 meter.

function kilometerToMeter(kilometer) {
    if (typeof kilometer === "string") {
        return "Distance value can't be a string. Please insert a number.";
    } else if (kilometer >= 0) {
        var meter = kilometer * 1000;
        return meter;
    } else {
        return "Distance can't be negative.";
    }
}

var resultOne = kilometerToMeter(5);
console.log(resultOne);

// Second Problem: creating a budget calculator.

// Given values are listed below:

// per watch price is = 50 dollar
// per phone price is = 100 dollar
// per laptop price is = 500 dollar

function budgetCalculator(watch, phone, laptop) {
    if (
        typeof watch === "string" ||
        typeof phone === "string" ||
        typeof laptop === "string"
    ) {
        return "Product's amount can't be a string. Please insert a number.";
    } else if (watch >= 0 && phone >= 0 && laptop >= 0) {
        var watchPrice = 50;
        watchPrice = watchPrice * watch;
        var phonePrice = 100;
        phonePrice = phonePrice * phone;
        var laptopPrice = 500;
        laptopPrice = laptopPrice * laptop;
        var totalBudget = watchPrice + phonePrice + laptopPrice;
        return totalBudget;
    } else {
        return "Product's amount can't be negative.";
    }
}
var resultTwo = budgetCalculator(100, 120, 150);
console.log(resultTwo);

// Third Problem: hotelCost calculation.

// Given values are listed below:

//  for first 10 days (1 to 10), per day staying cost is = 100 taka
//  for second 10 days (11 to 20), per day staying cost is = 80 taka
//  for rest of the days (21 to unlimited), per day staying cost is = 50 taka

function hotelCost(days) {
    var totalCost = 0;

    if (typeof days === "string") {
        return "Days value can't be a string. Please insert zero (0) or any positive number.";
    } else if (days < 0) {
        return "Days can't be negative. Please insert zero (0) or any positive number.";
    } else if (days <= 10) {
        totalCost = days * 100;
    } else if (days <= 20) {
        var firstTenDaysRent = 10 * 100;
        var remaining = days - 10;
        var secondTenDaysRent = remaining * 80;
        totalCost = firstTenDaysRent + secondTenDaysRent;
    } else {
        var firstTenDaysRent = 10 * 100;
        var secondTenDaysRent = 10 * 80;
        var remaining = days - 20;
        var restOfTheDaysRent = remaining * 50;
        totalCost = firstTenDaysRent + secondTenDaysRent + restOfTheDaysRent;
    }
    return totalCost;
}

var resultThree = hotelCost(25);
console.log(resultThree);
