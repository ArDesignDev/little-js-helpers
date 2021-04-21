'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// 1. SLICE
// 2. SPLICE
// 3. REVERSE
// 4. CONCAT
// 5. JOIN
// 6. FOR OF, FOR EACH
// 7. MAP
// 8. FILTER
// 9. REDUCE
// 10. CHAINING
// 10. FIND

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


/////////////////////////////////////////////////
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2,4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log([...arr]);

// SPLICE
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1,2);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT - to array together
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - '));


for (const movement of movements) {
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

movements.forEach(function(movement) {
  if(movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// 0: function (200)
// 1: function (450)
// 2: function (400)
// ....


for (const [i, movement] of movements.entries()) {
  if(movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('------ FOR EACH -----');
movements.forEach(function(mov, i, arr) {
  if(mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set (['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CHALLENGE

const checkDogs = function(dogsJulia, dogsKate) {
  // removing first and last two numbers in first array
  const dogsJuliaCorrected = dogsJulia;
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // putting both variables together
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function(dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i+1} is still a puppy`);
    }
  });
}

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// MAP METHOD

const eurToUsd = 1.1;

///////
// 1. added to every number from array with map

// normal function
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});
// or with arrow function 
// const movementsUSD = movements.map(mov => mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);

////////
// 2. or added to every number from array with for of loop and push

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurToUsd);
}

console.log(movementsUSDfor);

////////
// Example 2

const movementsDescriptions =  movements.map((mov, i) => {
  return `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`;
});

// or short
//const movementsDescriptions =  movements.map((mov, i) => 
//  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
//);

console.log(movementsDescriptions);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// FILTER

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

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// REDUCE

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


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CHALLENGE 2


/*const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age *4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);
  console.log(humanAges);

  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  return average;
}

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);*/

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


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// CHAINING METHODS

const euroToUsd2 = 1.1;
console.log(movements);

// Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
      //console.log(arr);
      return mov * euroToUsd2
  })
  //.map(mov => mov * euroToUsd2)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositsUSD);

// example
const calcAverageHumanAge = ages => 
ages
.map(age => (age <= 2 ? 2 * age : 16 + age *4))
.filter(age => age >= 18)
.reduce(function(acc, age, i, arr) {
  return acc + age / arr.length;
}, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(avg1);


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// FIND METHOD

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

// find account fpr Jessica from array accounts
const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

// With function
function findAcount(accountsArr) {
  const accountOwner = accountsArr.find(acc => acc.owner === 'Jessica Davis');
  return accountOwner;
}

console.log(findAcount(accounts));
