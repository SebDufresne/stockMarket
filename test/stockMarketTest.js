const assert = require('chai').assert;
const stockMarket = require('../stockMarket');

describe("#stockMarket", () => {
  it("Possible profit: [45, 24, 35, 31, 40, 38, 11] expect 16",() => {
    const input = [45, 24, 35, 31, 40, 38, 11];
    const expect = 16;
    assert.strictEqual(stockMarket(input),expect);
  });
  it("No profit: [45, 35, 31, 28, 11] expect -1",() => {
    const input = [45, 35, 31, 28, 11];
    const expect = -1;
    assert.strictEqual(stockMarket(input),expect);
  });
  it("Profit: [11, 45] expect 34",() => {
    const input = [11, 45];
    const expect = 34;
    assert.strictEqual(stockMarket(input),expect);
  });
  it("No profit: [45, 11] expect -1",() => {
    const input = [45, 11];
    const expect = -1;
    assert.strictEqual(stockMarket(input),expect);
  });
});