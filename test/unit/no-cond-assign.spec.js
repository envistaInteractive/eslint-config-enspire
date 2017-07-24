'use strict';

describe('no-cond-assign Validations (option: always)', () => {

    const errorMessageByEslint = 'Unexpected assignment within';

    it('should raise an error when there is a mistake in comparision operator ', (done) => {

        const textToTest = `if (count = 10) {\n
                                return true;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there isn\'t a mistake in comparision operator ', (done) => {

        const textToTest = `if (count == 10) {\n
                                return true;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
