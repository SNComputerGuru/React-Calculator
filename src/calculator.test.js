// src/calculator.test.js

const { add, subtract , multiply, divide} = require('./calculator');

test('adds two numbers', () => {
  expect(add(3, 4)).toBe(7);
  expect(add(-1, 5)).toBe(4);
  expect(add(0, 0)).toBe(0);
});

test('subtracts two numbers', () => {
  expect(subtract(10, 4)).toBe(6);
  expect(subtract(3, 7)).toBe(-4);
  expect(subtract(0, 0)).toBe(0);
});

test('multiplies two numbers', () => {
  expect(multiply(10, 4)).toBe(40);
  expect(multiply(3, 7)).toBe(21);
  expect(multiply(0, 0)).toBe(0);
});

test('divides two numbers', () => {
  expect(divide(10, 5)).toBe(2);
  expect(divide(15, 3)).toBe(5);
  expect(divide(10, 10)).toBe(1);
});