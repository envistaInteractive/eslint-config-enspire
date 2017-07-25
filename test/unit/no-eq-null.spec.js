'use strict';

describe('no-eq-null Validations', () => {

    const errorMessageByEslint = 'Use ‘===’ to compare with ‘null’';

    it('should raise an error when \'null\' is comparated usinf \'===\'', (done) => {

        const textToTest = `if (myVar == null) {\n
                                \n
                                \tvar newVar = '';\n
                                \n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should raise an error when \'null\' is comparated using \'===\'', (done) => {

        const textToTest = `if (myVar === null) {\n
                                \n
                                \tvar newVar = '';\n
                                \n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});

