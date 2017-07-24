'use strict';

describe('padded-blocks Validations', () => {

    const errorMessageByEslint = 'Block must be padded by blank lines';
    it('should raise an error by blank lines missing', (done) => {

        const textToTest = `if (a) {
                                b();

                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error by blank lines missing', (done) => {

        const textToTest = `if (a) {

                                b(); 

                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
