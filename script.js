const price = 2.50;
const campers = 15;
const taxRate = 0.08;
const budget = 40;
const total = price * campers * (1 + taxRate);
const totalExceedsBudget = total > budget;
const taxApplied = total > price * campers; 


console.log(price);
console.log(campers);
console.log(taxRate);
console.log(total);
console.log("Total Exceeds Budget? " + totalExceedsBudget);
console.log("Tax Applied? " + taxApplied);