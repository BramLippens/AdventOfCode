const { readFileSync, promises: fsPromises } = require('fs');

const contents = readFileSync('./DayTwo/input.txt', 'utf-8');
const arr = contents.split(/\r?\n/);

// console.log(arr);

const part1 = () => {
  let horizontal = 0;
  let vertical = 0;
  let movement = '';
  let amount = 0;
  arr.forEach((item, index) => {
    movement = item.split(' ')[0];
    amount = parseInt(item.split(' ')[1], 10);
    if (movement === 'forward') {
      horizontal += amount;
    } else if (movement === 'up') {
      vertical -= amount;
    } else if (movement === 'down') {
      vertical += amount;
    }
  });
  console.log('Total distance travelled:', horizontal * vertical);
};

// part1();

const part2 = () => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  let movement = '';
  let amount = 0;
  arr.forEach((item, index) => {
    movement = item.split(' ')[0];
    amount = parseInt(item.split(' ')[1], 10);
    if (movement === 'forward') {
      horizontal += amount;
      depth += aim * amount;
    } else if (movement === 'up') {
      aim -= amount;
    } else if (movement === 'down') {
      aim += amount;
    }
  });
  console.log('Total distance travelled:', horizontal * depth);
};

part2();
