'use strict';

describe('No Tabs space Validations', () => {

    const errorMessageByEslint = 'Unexpected tab character.';

    it('should raise error when Unexpected tab character.', (done) => {

        const textToTest = 'var \tx = 30;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when Unexpected tab character.', (done) => {

        const textToTest = 'var x = 30;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
