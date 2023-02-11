//1


const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let count = 0;
let sum = 0;

for(let elem of array) {
  if(typeof elem === 'number' && elem > 0) {
    count++;
    sum += elem;
  }
}

console.log(count);
console.log(sum);


//2

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let index = 0;
let elemIndex = 0;
let minNumber = array[0];

for(let elem of array) {
  if(typeof elem === 'number' && elem < minNumber) {
    elemIndex = index;
    minNumber = elem;
  }
  index++;
}

console.log(elemIndex);
console.log(minNumber);


//3


const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let index = 0;
let elemIndex = 0;
let maxNumber = array[0];

for(let elem of array) {
  if(typeof elem === 'number' && elem > maxNumber) {
    elemIndex = index;
    maxNumber = elem;
  }
  index++;
}

console.log(elemIndex);
console.log(maxNumber);


//4

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let count = 0;

for(let elem of array) {
  if(typeof elem === 'number' && elem < 0) {
    count++;
  }
}

console.log(count)


//5


const numberCounts = {};
const array =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
array.forEach(function (elem) { 
  numberCounts[elem] = (numberCounts[elem] || 0) + 1;
});

let count = 0;

for(key in numberCounts) {
  if(+key > 0 && numberCounts[key] === 1) {
    count++;
  }
}

console.log(`Количество непарных позитивных элементов: ${count}`);


//6


const numberCounts = {};
const array =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
array.forEach(function (elem) { 
  numberCounts[elem] = (numberCounts[elem] || 0) + 1;
});

let count = 0;

for(key in numberCounts) {
  if(+key > 0 && numberCounts[key] > 1) {
    count++;
  }
}

console.log(`Количество парных позитивных элементов: ${count}`);



// 7


const numberCounts = {};
const array =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
array.forEach(function (elem) { 
  numberCounts[elem] = (numberCounts[elem] || 0) + 1;
});

let sum = 0;

for(key in numberCounts) {
  if(+key > 0 && numberCounts[key] > 1) {
    sum += +key;
  }
}

console.log(`Сумма парных позитивных элементов: ${sum}`);



// 8


const numberCounts = {};
const array =  [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
array.forEach(function (elem) { 
  numberCounts[elem] = (numberCounts[elem] || 0) + 1;
});

console.log(numberCounts)

let sum = 0;

for(key in numberCounts) {
  if(+key > 0 && numberCounts[key] === 1) {
    sum += +key;
  }
}

console.log(`Сумма непарных позитивных элементов: ${sum}`);


//9


const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 1;

for(let elem of array) {
  if(typeof elem === 'number' && elem > 0) {
    sum *= elem;
  }
}
console.log(sum);



//10


const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let biggestNumber = 0;

array.forEach((elem) => {
  if(typeof elem === 'number' && elem > biggestNumber) {
    biggestNumber = elem;
  }
});

console.log('Biggest number ' + biggestNumber);

const indexOfBiggestNumber = array.indexOf(biggestNumber);

console.log('index of biggest number ' + indexOfBiggestNumber);

array.fill(0, 0, indexOfBiggestNumber);
array.fill(0, indexOfBiggestNumber + 1, array.length);

console.log(array);
