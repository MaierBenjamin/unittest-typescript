import { add, multiplication, subtract, divide } from "./calculator";

test("add three to four is five", () => {
  // Arrange
  const a: number = 4;
  const b: number = 3;
  const expected: number = 7;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from six is two", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("six times four is 24", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 24;

  // Act
  const actual: number = multiplication(a, b);

  // Assert
  expect(actual).toBe(expected);
});


test("six minus four is -2", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 2;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});


test("6 divided by four is 1.5", () => {
  // Arrange
  const a: number = 6;
  const b: number = 4;
  const expected: number = 1.5;

  // Act
  const actual: number = divide(a, b);

  // Assert
  expect(actual).toBe(expected);
});
