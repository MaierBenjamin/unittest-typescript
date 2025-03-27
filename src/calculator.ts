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