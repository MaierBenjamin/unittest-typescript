import { mean } from "./average";

test("test mean of two numbers", () => {
  // Arrange
  const numbers: number[] = [3, 4];
  const expected: number = 3.5;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});

test("test mean of five numbers", () => {
  // Arrange
  const numbers: number[] = [3, 4, 5, 5];
  const expected: number = 4.25;

  // Act
  const actual: number = mean(numbers);

  // Assert
  expect(actual).toBe(expected);
});


test("test mean of no numbers", () => {
  // Arrange
  const numbers: number[] = [];
  const expectedError = "Cannot calculate mean with no numbers";

  // Act
  const act = () => mean(numbers);

  // Assert
  expect(act).toThrow(expectedError);
});