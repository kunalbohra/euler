const largestPrimeFactor = require('./largestPrimeFactor');

describe('largestPrimeFactor tests', () => {
  test('largest prime factor of 600851475143 is ', () => {
    expect(largestPrimeFactor(600851475143)).toBe(6857);
  });
});
