'use strict';

describe('no-sequences Validations', () => {

    const errorMessageByEslint = 'Unexpected use of comma operato';
    it('should raise an error because Comma Operator is used', (done) => {

        const textToTest = 'while (val = foo(), val < 42);';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because Comma Operator is not used', (done) => {

        const textToTest = 'while ((val = foo(), val < 42));';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
