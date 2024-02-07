## Testing

As a developer, our primary goal is to build software that works.

To ensure our software works, we test the application.

We check if our software works as expected.

### Manual Testing

An individual will open the website, interact the website and ensure everything works as intended.

If a new feature is released, we repeat the same steps.

W may have to test not only the new feature but also the existing features.

**Drawbacks**

1. Time consuming
2. Complex repetitive tasks has a risk of human error
3. We may not get a chance to test all the features we should

### Automated Testing

Automated tests are programs that automate the task of testing our software.

Write code to test the software code.

Additional effort required when we develop a feature.

**Advantages**

1. Not time consuming
2. Reliable, consistent and not error prone
3. Easy to identify and fix features that break tests
4. Gives confidence when shipping software

### Checklist

Jest and React Testing Library

Fundamentals of writing a test

Test components with user interactions

Test components wrapped in a provider

Test components with mocking

Static analysis testing

## Jest vs React Testing Library(RTL)

### Jest

Jest is a JavaScript testing framework.

Jest is a test runner that finds tests, runs the tests, determines whether the tests passed or failed and reports it back in a human readable manner.

### RTL

JavaScript testing utility that provides virtual DOM for testing React components.

React Testing Library provides a virtual DOM which we can use to interact with and verify the behavior of a react component.

Testing Library is in fact a family of packages which helps test UI components.

The core library is called DOM Testing library and RTL is simply a wrapper around this core library to test React applications in an easier way.

## Types of Tests

### 1. Unit tests

Focus in on testing the individual building blocks of an application such as a class or a function or a component.

Each unit or building block is tested in isolation, independent of other units.

Dependencies are mocked.

Run in a short amount of time and make it very easy to pinpoint failures.

Relatively easier to write and maintain.

### 2. Integration tests

Focus is on testing a combination of units and ensuring they work together.

Take longer than unit tests.

### 3. E2E tests

Focus is on testing the entire application flow and ensuring it works as designed from start to finish.

Involves in a real UI, a real backend database, real services etc.

Take the longest as they cover the most amount of code.

Have a cost implication as we interact with real APIs that may charge based on the number of requests.

### Testing pyramid → Unit tests → Integration tests → E2E tests

### RTL philosophy

> The more your tests resemble the way your software is used, the more confidence they can give you.

Tests we are going to learn to write in this checklist strike a balance between unit tests in the sense they are at a component level and easy to write and maintain and E2E tests in the sense they resemble the way a user would interact with the component.

With React Testing Library, we are not concerned about the implementation details of a component.

Instead we are testing how the component behaves when a user interacts with it.

RTL will not care if we add 4+4 or 5+3 to display the number 8.

Refactoring will not affect our test as long as the end result is the same.

**RTL strikes a balance between unit and E2E tests.**

## Anatomy of a Test

**test(name, fn, timeout)**

The first argument is the test name used to identify the test.

The second argument is a function that contains the expectations to test.

The third argument is timeout which is an optional argument for specifying how long to wait before aborting the test. The default timeout value is 5 seconds.

## Test Driven Development(TDD)

Test driven development is a software development process where we write tests before writing the software code.

Once the tests have been written, we then write the code to ensure the tests pass.

1. Create tests that verify the functionality of a specific feature.
2. Write software code that will run the tests successfully when re-executed.
3. Refactor the code for optimization while ensuring the tests continue to pass.

Also called red-green testing as all tests go from a red failed state to a green passed state.

**Summary**

Automated test

Types of automated tests

Jest vs RTL

React project setup using CRA

Anatomy of a test

Write our first test(greet.tsx and greet.test.tsx)

TDD

## Jest Watch Mode

Watch mode is an option that we can pass to Jest asking to watch files that have changed since the last commit and execute tests related only to those changed files.

An optimization designed to make our tests run fast regardless of how many tests we have.

### Grouping Test

**describe(name, fn)**

The first argument is the group name

The second argument is a function that contains the expectations to test

### Filename Conventions

- Files with .test.js or .test.tsx suffix.
- Files with .spec.js or .spec.tsx suffix.
- Files with .js or .tsx suffix in ****tests**** folders.
