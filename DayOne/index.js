const { readFileSync, promises: fsPromises } = require('fs');

const contents = readFileSync('./DayOne/input.txt', 'utf-8');
const arr = contents.split(/\r?\n/).map(function (item) {
  return parseInt(item, 10);
});

const part1 = () => {
  let last;
  let count = 0;

  arr.forEach((item, index) => {
    if (index === 0) {
      last = item;
      //   console.log(item, '(N/A - no previous measurement)');
      return;
    }
    if (item > last) {
      count++;
      //   console.log(item, 'increased');
    } else {
      //   console.log(item, 'decreased');
    }
    last = item;
  });
  console.log('Total number of times the temperature increased:', count);
};

const part2 = () => {
  let sum1 = arr[0] + arr[1] + arr[2];
  let sum2 = 0;
  let count = 0;

  for (let i = 3; i < arr.length; i++) {
    sum2 = sum1;
    sum1 = sum1 = arr[i] + arr[i - 1] + arr[i - 2];
    if (sum1 > sum2) {
      count++;
      console.log(sum1, 'increased');
    } else {
      console.log(sum1, 'decreased');
    }
  }
  console.log('Total number of times the temperature increased:', count);
};
// part1();
part2();
