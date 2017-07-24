'use strict';

describe('No multiple empty lines Validations', () => {

    const errorMessageByEslint = 'Too many blank lines at the beginning of file. Max of 1 allowed.';

    it('should raise error when the code has 1 blank lines not allowed', (done) => {

        const textToTest = `\n
                            var foo = 5;
                            \n\n\n
                            var bar = 3;`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when the code has 1 blank lines not allowed', (done) => {

        const textToTest = `var foo = 5;
                            var bar = 3;`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
