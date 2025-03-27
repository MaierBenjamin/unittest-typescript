import {median} from "./median";

test("test median for odd number of elements", () => {
    //Arrange
    const sorted: number[] = [12, 14, 16, 27, 38, 39];
    const expected: number = 21.5;

    //Act
    const actual: number = median(sorted);

    //Assert
    expect(actual).toBe(expected);
})


test("test median for even number of elements", () => {
    //Arrange
    const sorted: number[] = [2, 3, 4, 5, 12, 14, 16];
    const expected: number = 5;

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


