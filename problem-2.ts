// Problem 2

function removeDuplicates(array: number[]): number[] {
  const set = new Set(array);
  return Array.from(set);
}