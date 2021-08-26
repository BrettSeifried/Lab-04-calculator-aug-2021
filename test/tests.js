// IMPORT MODULES under test here:
import { divide } from '../calculator.js';

const test = QUnit.test;

// name your test by what it is testing
test('divide two numbers', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 10;
    const y = 5;
    const expected = 2;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y); // use your function here

    //Expect = Actual & Expected
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
