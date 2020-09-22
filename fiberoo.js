function fib() {
  const fibList = [0, 1];
  for (let i = 2; i < 50; i++) {
    fibList.push(fibList[i - 1] + fibList[i - 2]);
  }
  return fibList;
}
console.log(fib());

function numsToStrings(nums) {
  return _.map(nums, (num) => `${num}`);
}

console.log(numsToStrings(fib()));

function numEvenNums(nums) {
  return _.filter(nums, (num) => ((num % 2) === 0)).length;
}

console.log(numEvenNums(fib()));
