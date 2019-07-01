const getLarger = (a,b) => a > b ? a : b;

const minOfArr = (arr) => arr.reduce((acc,x) => acc <= x ? acc : x, arr[0]);

const maxOfArr = (arr) => arr.reduce((acc,x) => acc <= x ? x : acc, arr[0]);

const maxDiff = (arr, begin, end) => {
  let leftPart, rightPart, leftMax, rightMax;

  const mid = Math.floor(begin + end / 2);

  if (arr.length > 2) {
    const leftSlice = arr.slice(begin, mid + 1);
    const rightSlice = arr.slice(mid + 1, arr.length);

    if (leftSlice.length === 1) {
      leftSlice.push(leftSlice[0]);
      leftPart = 0;
    } else {
      leftPart = maxDiff(leftSlice, 0, leftSlice.length - 1);
    }

    if (rightSlice.length === 1) {
      rightSlice.push(rightSlice[0]);
      rightPart = 0;
    }  else {
      rightPart = maxDiff(rightSlice, 0, rightSlice.length - 1);
    }

    leftMax = minOfArr(leftSlice);
    rightMax = maxOfArr(rightSlice);

  }
  return getLarger(getLarger(leftPart, rightPart), (rightMax - leftMax));
};

const stockMarket = (arr) => {
  const diff = maxDiff(arr, 0, arr.length - 1);
  return diff > 0 ? diff : -1;
};

console.log(stockMarket([45, 24, 35, 31, 40, 38, 11]));
console.log(stockMarket([7, 6, 5, 4, 3, 2, 1]));