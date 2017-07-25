'use strict';

describe('curly Validations', () => {

    const errorMessagesByEslint = {
        expected: 'Expected { after ',
        unnecessary: 'Unnecessary { after '
    };

    it('should raise an error when a block statement is not wrapped by curly braces', (done) => {

        const textToTest = `if (myNum === 100)\n
                                \tstrNum = 'one hundred';\n
                            else\n
                                \tstrNum = 'zero';`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.expected);
        return done();

    });

    it('should not raise an error when a block statement is wrapped by curly braces', (done) => {

        const textToTest = `if (myNum === 100) {\n
                                \n
                                \tstrNum = 'one hundred';\n
                                \n
                            } else {\n
                                \n
                                \ttstrNum = 'zero';\n
                                \n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.unnecessary);
        return done();

    });

});
