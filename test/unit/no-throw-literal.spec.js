'use strict';

describe('no-throw-literal Validations', () => {

    const errorMessageByEslint = 'Do not throw undefined';
    it('should raise an error because have throw literal', (done) => {

        const textToTest = 'throw undefined; throw null;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have throw literal', (done) => {

        const textToTest = 'throw new Error("error"); throw new Error();';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
