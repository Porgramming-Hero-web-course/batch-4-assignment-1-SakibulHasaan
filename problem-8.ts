// Problem 8

function validateKeys<T extends object>(obj: T, keys: (keyof T)[]): boolean {
  console.log(keys.every((key) => Object.keys(obj).includes(key as string)));

  return true;
}
