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
- Files with .js or .tsx suffix in \***\*tests\*\*** folders.

## Code Coverage

A metric that can help us understand how much of our software code is tested.

- **Statement coverage:** How many of the statements in the software code have been executed.
- **Branches coverage:** How many of the branches of the control structures(if statements for instance) have been executed.
- **Function coverage:** How many of the functions defined have been called and finally
- **Line coverage:** How many of lines of source code have been tested.

### Assertions

When writing tests, we often need to check that values meet certain conditions.

Assertions decide if a test passes or fails.

**expect**

expect(value)

The argument should be the value that our code produces.

Typically, we will use expect along with a “matcher” function to assert something about a value.

A matcher can optionally accept an argument which is the correct expected value.

**Summary:**

Jest watch mode

Filtering tests

Grouping tests

Filename conventions

Code coverage

Assertions

## React Testing Library

### What to test?

Test components renders

Test component renders with props

Test components renders in different states

Test components reacts to events

### What not to test?

Implementation details

Third party code

Code that is not from a user point of view

### RTL Queries

Every test we write generally involves the following basic steps.

1. Render the component
2. Find an element rendered by the component
3. Assert against the element found in step 2 which will pass or fail the test

To render the component, we use the render method from RTL.

For assertion, we use expect passing in a value and combine it with a matcher function from jest or jest-dom.

Queries are the methods that Testing Library provides to find elements on the page.

### To find a single element on the page, we have -

- **getBy..(application → application.test.tsx)**
  getBy.. class of queries return the matching node for a query, and throw a descriptive error if no elements match or if more than one match is found.
  ### The suffix can be one of Role, LabelText, PlaceHolderTest, Text, DisplayValue, AltText, Title and finally TestId.
  - **getByRole**
    getByRole queries for elements with the given role.
    Role refers to the ARIA(Accessible Rich Internet Applications) role which provides semantic meaning to content to ensure people using assistive technologies are able to use them.
    By default, many semantic elements in HTML have a role.
    Button element has a button role, anchor element has a line role, h1 to h6 elements have a heading role, checkboxes have a checkbox role, radio buttons have a radio role and so on.
    If we’re working with elements that do no have a default role or if we want to specify a different role, the role attribute can be used to add the desired role.
    To use an anchor element as a button in the navbar, we can add role=’button’.
  - **getByRole Options**
    **name**
    The accessible name is for simple cases equal to
    1. the label of a form element.
    2. the text content of a button or
    3. the value of the aria-label attribute
       **level, hidden, selected, checked, pressed**
  - **getByLabelText**
    getByLabelText will search for the label that matches the given test, then find the element associated with the labe.
  - **getByPlaceholderText**
    getByPlaceholderText will search for all elements with a placeholder attribute and find one that matches the given text.
  - **getByText**
    getByText will search for all elements that have a text node with textContent matching the given text.
    Typically, we would use this to find paragraph, div or span elements.
  - **getByDisplayValue**
    getByDisplayValue returns the input, textarea or select element that has the matching display value.
  - **getByAltText**
    getByAltText will return the element that has the given alt text.
    This method only supports elements which accept an alt attribute like <img>, <input>, <area> or custom HTML elements.
  - **getByTitle**
    getByTitle returns the element that has the matching title attribute.
  - **getByTestId**
    getByTestId returns the element that has the matching data-testid attribute.
  ### Priority Order for Queries
  “Your test should resemble how users interact with your code(component, page etc.) as much as possbile”
  1. getByRole
  2. getByLabelText
  3. getByPlaceholderText
  4. getByText
  5. getByDisplayValue
  6. getByAltText
  7. getByTitle
  8. getByTestId
- **queryBy..**
  Returns the matching node for a query, and return null if no elements match.
  Useful for asserting an element that is not present.
  Throws an error if more than one match is found.
- findBy..
  Returns a Promise which resolves when an element is found which matches the given query.
  The promise is rejected if no element is found or if more than one element is found after a default timeout of 1000ms

### **To find multiple elements on the page, we have -**

- **getAllBy..**
  Find multiple elements in the DOM.
  getAllyBy returns an array of all matching nodes for a query, and throws an error if no elements match.

  ### TextMatch

  - TextMatch represents a type which can be either a

    - **string**
        <div>Hello Word</div>
        
        screen.getByText(’Hello World’) // full string match
        
        screen.getByText(’llo World’, {exact: false}) // substring match
        
        screen.getByText(’hello world’, {exact: false}) // ignore case

    - **regex**
        <div>Hello Word</div>
        
        screen.getByText(/World/) // substring match
        
        screen.getByText(/world/i) // substring match, ignore case
        
        screen.getByText(/^hello world$/i) // fullstring match, ignore case

    - **function → custom function**
      (content ?: string, element?: Element | null) ⇒ boolean
        <div>Hello World</div>
        
        screen.getByText((content) ⇒ content.startsWith(’Hello’))

- queryAllBy..
  Returns an array of all matching nodes for a query, and return an empty array if no elements match.
  **Note: All suffix can be one of Role, LabelText, PlaceHolderTest, Text, DisplayValue, AltText, Title and finally TestId will be included queryAllBy..**
- findAllBy..
  Returns a promise which resolves to an array of elements when any elements are found which match the given query.
  The promise is rejected if no elements are found after a default timeout of 1000ms.

### Manual Queries

**RTL Queries**

1. getBy & getAllBy
2. queryBy & queryAllBy
3. findBy & findAllBy

Manual queries - we can use the regular querySelector DOM API to find elements.

const {container} = render(<MyComponent/>)

const foo = container.querySelector(’[data-foo=”bar”]’)

### Debugging

### Testing Playground Chrome Extension

## User Interactions

A click using a mouse or a keypress using a keyboard.

Software has to respond to such interactions.

Tests should ensure the interactions are handled as expected.

### user-event

A companion library for testing library that simulates user interactions by dispatching the events that would happen if the interaction took place in a browser.

It is the recommended way to test user interactions with RTL.

### fireEvent vs user-event

fireEvent is a method form RTL which is used to dispatch DOM events.

user-event simulates full interactions, which may fire multiple events and do additional checks along the way.

For example, we can dispatch the change event on an input field using fireEvent.

When a user types into a text box, the element has to be focused, and then keyboard and input events are fired and the selection and value on the element are manipulated as they type.

user-event allows us to describe a user interaction instead of a concrete event. It adds visibility and intractability checks along the way and manipulates the DOM just like a user interaction in the browser would. It factors in that the browser e.g. wouldn’t let a user click a hidden element or type in a disabled text box.

### Pointer Interactions(counter.test.tsx)

**Convenience APIs**

click()

dblClick()

tripleClick()

hover()

unhover()

**Pointer APIs**

pointer({keys: ‘[MouseLeft]’})

pointer({keys: ‘[MouseLeft][Mouseright]’})

pointer(‘[MouseLeft][Mouseright]’)

pointer(‘[Mouseleft>]’)

pointer(‘[/Mouseleft]’)

### Keyboard Interactions(counter.test.tsx)

**Utility API**

type()

clear()

selectOptions()

deselectOptions()

upload()

**Convenience API**

tab()

**Clipboard APIs**

copy()

cut()

paste()

**Keyboard API**

keyboard(’foo’) // translate to: f,o,o

keyboard(’{Shift>}A{/Shift}’) // translate to: Shift(down), A, Shift(up)

**Summary:**

user-event library.

CRA installs user-event but needs to upgrade the latest version.

Mouse and Keyboard interactions with Counter component.

Mouse click events.

Keyboard type and tab events.

Convenience APIs, utility APIs, clipboard APIs.

Pointer and keyboard APIs.

## Providers(hooks → useCounter.text.js)

Wrapper option for providers

Custom render function

Test custom react hooks

act utility

## Mocking(counter-two & users)

Mock functions with jest

Mock HTTP requests with MSW

Handle error responses with MSW

## Static analysis testing

Process of verifying that our code meets certain expectations without actually running it.

- Ensure consistent style and formatting.
- Check for common mistakes and possible bugs.
- Limit the complexity of code and
- Verify type consistency.

All types of tests run the code and then compare the outcome against known expected outputs to see if everything works OK.

Static testing analyses aspects such as readability, consistency, error handling, type checking, and alignment with best practices.

Testing checks if your code works or not, whereas static analysis checks if it is written well or not.

### Static analysis testing tools

- TypeScript
- ESlint
- Prettier
- Husky
- lint-staged

### ESlint

ESlint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

### Prettier

Prettier is an opinionated code formatter that ensures that all outputted code conforms to a consistent style.

### Husky

Husky is a tool that helps improve our commits and more.

### lint-staged

Run linters and formatters against staged git files.
