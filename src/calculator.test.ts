import { add, multiplication, subtract, divide, mode} from "./calculator";

test("add two to eight is ten", () => {
  // Arrange
  const a: number = 2;
  const b: number = 8;
  const expected: number = 10;

  // Act
  const actual = add(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("subtract four from seven is three", () => {
  // Arrange
  const a: number = 7;
  const b: number = 4;
  const expected: number = 3;

  // Act
  const actual: number = subtract(a, b);

  // Assert
  expect(actual).toBe(expected);
});

test("two times three is six", () => {
  // Arrange
  const a: number = 2;
  const b: number = 3;
  const expected: number = 6;

  // Act
  const actual: number = multiplication(a, b);

  // Assert
  expect(actual).toBe(expected);
});


test("six minus four is 2", () => {
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

test("division by zero throws an error", () => {
  // Arrange
  const a: number = 10;
  const b: number = 0;
  const expectedError = "Division by zero not allowed.";

  // Act
  const act = () => divide(a, b);

  // Assert
  expect(act).toThrow(expectedError);
});


test("mode of [1, 1, 2] is [1] (single mode)", () => {
  expect(mode([1, 1, 2])).toEqual([1]);
});

test("mode of [1, 1, 2, 2] is [1, 2] (multiple modes)", () => {
  expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
});

test("mode of empty array is [] (edge case)", () => {
  expect(mode([])).toEqual([]);
});