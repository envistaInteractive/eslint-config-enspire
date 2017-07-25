'use strict';

describe('no-sparse-arrays Validations', () => {

    const errorMessageByEslint = 'Unexpected comma in middle of array.';

    it('should raise an error when there is a comma which isnt preceded by an elem and is not the last one', (done) => {

        const textToTest = 'var fruits = [ "orange",, "mango" ];';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there isn\'t a comma which isn\'t preceded by an element', (done) => {

        const textToTest = 'var fruits = [ "orange", "mango", ];';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
