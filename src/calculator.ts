export function add(summandA: number, summandB: number): number {
  return summandA + summandB;
}

export function subtract(minuend: number, subtrahend: number): number {
  return minuend - subtrahend;
}

export function multiplication(factorA: number, factorB: number): number {
  return factorA * factorB;
}

export function divide(numA: number, numB: number): number {
  if (numB === 0) {
    throw new Error("Division by zero not allowed.");
  }
  return numA / numB;
}

export function mode(numbers: number[]): number[] {
  if (numbers.length === 0) return [];

  const frequencyMap = new Map<number, number>();
  
  numbers.forEach(num => {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  });

  const maxFrequency = Math.max(...frequencyMap.values());

  const modes = Array.from(frequencyMap.entries())
    .filter(([_, freq]) => freq === maxFrequency)
    .map(([num]) => num);

  return modes.sort((a, b) => a - b);
}