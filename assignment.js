// Kilometer to meter converter calculator.
function kilometerToMeter(kilometer) {
    // checking, whether the input is a string or not.
    if (typeof kilometer === "string") {
        return "Distance value can't be a string. Please insert a number.";
    } else if (kilometer >= 0) {
        var meter = kilometer * 1000; // we know, 1 kilometer = 1000 meter.
        return meter;
    } else {
        return "Distance can't be negative.";
    }
}

var resultOne = kilometerToMeter(5);
console.log(resultOne);

// budget calculator

// Given values are listed below:
// 1 watch price = 50 dollar
// 1 phone price = 100 dollar
// 1 laptop price = 500 dollar

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
