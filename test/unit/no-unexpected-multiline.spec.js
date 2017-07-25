'use strict';

describe('no-unexpected-multiline Validations', () => {

    const errorMessagesByEslint = {
        function: 'Unexpected newline between function and ( of function call',
        property: 'Unexpected newline between object and [ of property access',
        taggedTemplate: 'Unexpected newline between template tag and template literal',
        division: 'Unexpected newline between numerator and division operator'
    };

    it('Should raise an error when a statement hasn\'t been closed properly', (done) => {

        const textToTest = `var myVar = anotherVar\n
                            (1).myFunction();`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.function);
        return done();

    });

    it('Should not raise an error when a statement has been closed properly', (done) => {

        const textToTest = `var myVar = anotherVar;\n
                            (1).myFunction();`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.function);
        return done();

    });

});
