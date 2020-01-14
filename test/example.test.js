// IMPORT MODULES under test here:
import isYes from '../isYes.js';

const test = QUnit.test;

test('Yes is True', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'Yes';
    const expectation = true;

    const results = isYes(input);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, expectation);
});

test('Y is True', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'Y';
    const expectation = true;

    const results = isYes(input);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, expectation);
});

test('yes is True', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'yes';
    const expectation = true;

    const results = isYes(input);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, expectation);
});

test('y is True', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'y';
    const expectation = true;

    const results = isYes(input);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, expectation);
});

test('No is False', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const input = 'No';
    const expectation = false;

    const results = isYes(input);

    //Act 
    // Call the function you're testing and set the result to a const

    //Assert
    // Make assertions about what is expected valid result
    assert.equal(results, expectation);
});