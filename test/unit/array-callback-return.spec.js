'use strict';

describe('array-callback-return Validations', () => {

    const errorMessagesByEslint = {
        valueAtEnd: 'Expected to return a value at the end of',
        valueIn: 'Expected to return a value in',
        expected: 'expected a return value'
    };

    it('should raise an error when the callback of the map method doesn\'t return a value', (done) => {

        const textToTest = `var nums = [1, 2, 3, 4, 5];
                            var tri = [];
                            var triples = num.map(function(x) {
                                tri.push(x*3);
                            });`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.valueIn);
        return done();

    });

    it('should not raise an error when the callback of the map method returns a value', (done) => {

        const textToTest = `var nums = [1, 2, 3, 4, 5];
                            var triples = num.map(function(x) {
                                return x*3;
                            });`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.valueIn);
        return done();

    });

});
