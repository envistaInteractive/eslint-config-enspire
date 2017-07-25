'use strict';

describe('array-callback-return Validations', () => {

    const errorMessagesByEslint = {
        valueAtEnd: 'Expected to return a value at the end of',
        valueIn: 'Expected to return a value in',
        expected: 'expected a return value'
    };

    it('should raise an error when the callback of the map method doesn\'t return a value', (done) => {

        const textToTest = `var nums = [1, 2, 3, 4, 5];\n
                            var tri = [];\n
                            var triples = num.map(function(x) {\n
                                \ttri.push(x*3);\n
                            });`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.valueIn);
        return done();

    });

    it('should not raise an error when the callback of the map method returns a value', (done) => {

        const textToTest = `var nums = [1, 2, 3, 4, 5];\n
                            var triples = num.map(function(x) {\n
                                \treturn x*3;\n
                            });`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.valueIn);
        return done();

    });

});
