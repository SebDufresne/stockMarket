'use strict';
const getLarger = (a,b) => a > b ? a : b;

const minOfArr = (arr) => arr.reduce((acc,x) => acc <= x ? acc : x, arr[0]);

const maxOfArr = (arr) => arr.reduce((acc,x) => acc <= x ? x : acc, arr[0]);

const maxDiff = (arr, begin, end) => {
  let leftPart = 0, rightPart = 0, deltaMaxOfArr = 0;

  const mid = Math.floor(begin + end / 2);

  if (arr.length > 2) {
    const leftSlice = arr.slice(begin, mid + 1);
    const rightSlice = arr.slice(mid + 1, arr.length);

    // Left part of Array
    if (leftSlice.length === 1) {
      leftSlice.push(leftSlice[0]);
      leftPart = 0;
    } else {
      leftPart = maxDiff(leftSlice, 0, leftSlice.length - 1);
    }

    // Right part of Array
    if (rightSlice.length === 1) {
      rightSlice.push(rightSlice[0]);
      rightPart = 0;
    }  else {
      rightPart = maxDiff(rightSlice, 0, rightSlice.length - 1);
    }

    deltaMaxOfArr = maxOfArr(rightSlice) - minOfArr(leftSlice);
  }
  return getLarger(getLarger(leftPart, rightPart), deltaMaxOfArr);
};

const stockMarket = (arr) => {
  let delta;
  switch (arr.length) {
  case 2:
    delta = arr[0] < arr[1] ? arr[1] - arr[0] : -1;
    break;
  default:
    delta = maxDiff(arr, 0, arr.length - 1);
  }
  return delta > 0 ? delta : -1;
};

module.exports = stockMarket;