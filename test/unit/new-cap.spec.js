'use strict';

describe('new-cap Validations', () => {

    const errorMessageByEslint = 'A constructor name should not start with a lowercase letter';
    it('should raise an error because use uppercase-started in functions', (done) => {

        const textToTest = 'var friend = new person();';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

});
