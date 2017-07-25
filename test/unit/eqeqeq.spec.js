'use strict';

describe('eqeqeq Validations', () => {

    const errorMessageByEslint = '\'===\' and instead saw \'==\'';

    it('should raise an error when === is not used to compare two values', (done) => {

        const textToTest = `if (1 == '1') {\n
                                \treturn true;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when === is used to compare two values', (done) => {

        const textToTest = `if (1 === '1') {\n
                                \treturn true;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
