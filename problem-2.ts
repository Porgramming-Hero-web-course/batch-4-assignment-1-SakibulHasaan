// Problem 2

function removeDuplicates(array: number[]): number[] {
  const result: number[] = [];

  for (const x of array) {
    if (result.indexOf(x) === -1) {
      result.push(x);
    }
  }

  return result;
}
