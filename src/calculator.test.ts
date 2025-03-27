import { add, multiplication, subtract, divide, mode, standardDeviation} from "./calculator";

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


test("test mode (single)", () => {
  expect(mode([1, 1, 2])).toEqual([1]);
});

test("test mode (multiple) ", () => {
  expect(mode([1, 1, 2, 2])).toEqual([1, 2]);
});

test("test mode (empty)", () => {
  expect(mode([])).toEqual([]);
});


test("test throws error for empty list", () => {
  expect(() => standardDeviation([])).toThrow("Cannot calculate standard deviation of empty list");
});

test("test returns 0 for single value", () => {
  expect(standardDeviation([5])).toBe(0);
});

test("test correctly calculates for two values", () => {
  expect(standardDeviation([1, 3])).toBe(1);  
});

test("test correctly calculates for multiple values", () => {
  const result = standardDeviation([1, 2, 3, 4, 5]);
  expect(result).toBeCloseTo(1.414, 3);  
});