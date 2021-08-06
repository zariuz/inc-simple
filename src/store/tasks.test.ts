import { sum, mult, div, sub, calculator } from "./tasks";

// test("sum of numbers", () => {
//   //1.тестовые данные
//   const a: number = 3;
//   const b: number = 7;
//   //2. выполнение тестового кода
//   const result = sum(a, b);
//   //3. проверка результата
//   expect(result).toBe(10);
// });

test("sum of numbers", () => {
  expect(sum(3, 7)).toBe(10);
});

test("mult of numbers", () => {
  expect(mult(3, 7)).toBe(21);
});

test("div of numbers", () => {
  expect(div(30, 10)).toBe(3);
});

test("sub of numbers", () => {
  expect(sub(15, 8)).toBe(7);
});

/// Reducer
test("calculator", () => {
  expect(calculator(3, { type: "sum", number: 7 })).toBe(10);
  expect(calculator(3, { type: "mult", number: 7 })).toBe(21);
  expect(calculator(21, { type: "div", number: 7 })).toBe(3);
  expect(calculator(30, { type: "sub", number: 3 })).toBe(27);
});
