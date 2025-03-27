export function median(numbers: number[]): number {
    if (numbers.length === 0) {
      throw new Error("Median cannot be calculated with empty list");
    }
  
    const sorted = [...numbers].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
  
    if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
    } else {
      return sorted[middle];
    }
  }