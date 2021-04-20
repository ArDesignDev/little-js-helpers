//////////////////////////////////
// EXAMPLE OF ALL THREE METHODES//
//////////////////////////////////

const calcAverageHumanAge = function (ages) {
    // calc dogs array age
    const humanAges = ages.map(function(age) {
        if(age <= 2) {
            return age * 2;
        } else {
            return 16 + age * 4;
        }
    });
    console.log(humanAges);

    // only dogs older then  18
    const adults = humanAges.filter(function(age) {
        return age >= 18;
    });
    console.log(adults);

    // average of adult dogs
    const average = adults.reduce(function(acc, cur) {
        return acc + cur / adults.length;
    }, 0);

    console.log(average);
}
  
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// short version
/*const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age *4);
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);
  console.log(humanAges);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);*/



//////////////////////////////////
// MAP METHOD
//////////////////////////////////

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
// 1. added to every number from array with map

// normal function
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});
// or with arrow function 
//const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);


// 2. or added to every number from array with for of loop and push

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}

console.log(movementsUSDfor);


// Example 2

const movementsDescriptions =  movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});

// or short
//const movementsDescriptions =  movements.map((mov, i) => 
//  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
//);

console.log(movementsDescriptions);



//////////////////////////////
// FILTER
//////////////////////////////

// The filter() method creates a new array with all elements that pass the test implemented by the provided function.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// With filter we filter values from array movements
const deposites = movements.filter(function(mov) {
  return mov > 0;
});

console.log(movements);
console.log(deposites);

const withdrawal = movements.filter(function(draw) {
  return draw < 0;
});

// with arrow function: const withdrawal = movements.filter(draw => draw < 0);

console.log(withdrawal);

// with for of loop
const depositsFor = [];
for (const mov of movements) {
  if(mov > 0) {
    depositsFor.push(mov);
  }
}

console.log(depositsFor);


//////////////////////////////
// REDUCE
/////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// accumulator -> SNOWBALL - adding values every loop
const balance = movements.reduce(function(acc, cur, i ,arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + cur;
}, 0);

// arrow function: const balance = movements.reduce((acc, cur) => acc + cur, 0);

console.log(balance);

// with for of loop
let balance2 = 0;
for (const mov of movements) {
  balance2 += mov;
}

console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]); //movement[0] -> we start with the first value from array

console.log(max);
