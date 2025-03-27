import {median} from "./median";

test("test median for odd number of elements", () => {
    //Arrange
    const sorted: number[] = [1, 2, 6, 7, 8, 9];
    const expected: number = 6.5;

    //Act
    const actual: number = median(sorted);

    //Assert
    expect(actual).toBe(expected);
})


test("test median for even number of elements", () => {
    //Arrange
    const sorted: number[] = [1, 2, 6, 7, 8, 12, 14];
    const expected: number = 7;

    //Act
    const actual: number = median(sorted);

    //Assert
    expect(actual).toBe(expected);
})


test("test median for no elements", () => {
    // Arrange
    const numbers: number[] = [];
    const expectedError = "Median cannot be calculated with empty list";
  
    // Act
    const act = () => median(numbers);
  
    // Assert
    expect(act).toThrow(expectedError);
  });


