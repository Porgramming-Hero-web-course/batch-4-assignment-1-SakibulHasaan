// Problem 5

function getProperty<T>(info: T, key: keyof T): T[keyof T] {
  return info[key];
}