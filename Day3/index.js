const { readFileSync, promises: fsPromises } = require('fs');

const contents = readFileSync('./Day3/input.txt', 'utf-8');
const arr = contents.split(/\r?\n/);

// console.log(arr);

const part1 = () => {
  let gammaRate = '';
  let epsilonRate = '';
  let powerConsumption = 0;
  let zeros = 0;
  let ones = 0;

  const deep = arr[0].split('').length;

  for (let i = 0; i < deep; i++) {
    arr.forEach((item, index) => {
      if (item.split('')[i] === '0') {
        zeros++;
      } else if (item.split('')[i] === '1') {
        ones++;
      }
    });
    if (zeros > ones) {
      gammaRate += '0';
    } else if (ones > zeros) {
      gammaRate += '1';
    }
    zeros = 0;
    ones = 0;
  }
  gammaRate.split('').forEach((item, index) => {
    if (item === '0') {
      epsilonRate += '1';
    } else if (item === '1') {
      epsilonRate += '0';
    }
  });
  powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
  console.log('Power consumption:', powerConsumption);
};

part1();

const part2 = () => {};

// part2();
