'use strict';

describe('no-debugger Validations', () => {

    const errorMessageByEslint = 'Unexpected \'debugger\' statement.';

    it('should raise an error when the stament \'debugger\' appears', (done) => {

        const textToTest = `if (count == 10) {\n
                                \tdebugger;\n
                                \treturn true;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when the stament \'debugger\' doesn\'t appear', (done) => {

        const textToTest = `if (count == 10) {\n
                                \treturn true;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
