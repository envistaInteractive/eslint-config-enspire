'use strict';

describe('use-isnan Validations', () => {

    const errorMessageByEslint = 'Use the isNaN function to compare with NaN';

    it('should raise an error when NaN is used to checking if a value is a number', (done) => {

        const textToTest = `if (NaN == 'text') {\n
                                \treturn true;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when isNaN function is used to checking if a value is a number', (done) => {

        const textToTest = `if (isNaN('text')) {\n
                                \treturn true;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
