# Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

In this blog we will try to understand what type guard is, about different types of type guard and why it is necessary. So let's begin..

## What is Type Guard?
Type guards in TypeScript help you check the type of a variable in runtime. So that you can make sure your code works correctly, especially when you're working with different kinds of data. They help you write safer and more reliable code.

## Types of Type Guard
If you know JavaScript you already know the types of Type Guard.
They are `typeof`, `instanceof`, `in` and `custom` type guards.

### Lets see example for each one.

#### `typeof` Type Guard
``` 
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // Safe to access length because we know it's a string
  } else {
    console.log("Not a string"); // It's a number
  }
}
```
here is a function that takes one parameter, and based on the the type of the parameter we need to write the business logic, in this case we use `typeof` type guard.

#### `instanceof` Type Guard
```
class Dog {
  bark() {
    console.log("Woof!");
  }
}

class Cat {
  meow() {
    console.log("Meow!");
  }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark(); // Safe to call bark because we know it's a Dog
  } else {
    animal.meow(); // It's a Cat
  }
}
```
To determine which object the instance belongs to we can use the `instanceof` type guard and use our logic based on the instance type of object.

#### `in` Type Guard
```
interface Bird {
  fly(): void;
}

interface Fish {
  swim(): void;
}

function move(animal: Bird | Fish) {
  if ("fly" in animal) {
    animal.fly(); // Safe to call fly because we know it's a Bird
  } else {
    animal.swim(); // It's a Fish
  }
}
```
The `in` operator checks if a specific property exists in an object. This is useful for distinguishing between different object shapes and properties.

#### `custom` Type Guard
We can use custom type guard when we create custom type or interface and want to enforce them on logic. Let's say we have two interfaces, Circle and Rectangle, and we want to create a custom type guard to differentiate between them.
```
// Custom type guard function
function isString(value: any): value is string {
    return typeof value === "string"; // Check if the type is 'string'
}

// Function to greet based on the type of input
function greet(input: string | number) {
    if (isString(input)) {
        console.log("Hello, " + input); // Safe to treat 'input' as a string
    } else {
        console.log("Hello, number: " + input); // It's a number
    }
}
```
Well, you don't need to specifically check if a value is string or not but if you want to check on if a value is a super special custom type you created then you can create a custom function to ensure you the the right type and that'a `custom` type guard.

## Why Type Guards Are Necessary?
You should use Type Guard throughout your code here is some important reasons why you should use them: 
1. <strong>Prevent Errors:</strong> Type guards help catch errors before they happen. For example, if you try to call a method on a variable that isn't the right type, it could lead to runtime errors. Type guards let you check the type first.

2. <strong>Improve and Understand Code:</strong> By using type guards, your code becomes easier to understand. When you check types explicitly, other developers (or you in the future) can quickly see what types of values are being handled.

3. <strong>Handling User Centric Logics and Complex Application:</strong> When working with user input, like data from forms, type guards make sure the data is valid before you process it. For large apps with lots of data types, type guards keep your code organized and reduce bugs.

In summary, type guards are essential in TypeScript for checking types at runtime, preventing errors, improving code clarity, and enhancing development experience through better autocompletion and error checking. They make your code safer and easier to maintain!