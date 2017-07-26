'use strict';

describe('radix Validations', () => {

    const errorMessageByEslint = 'Invalid radix parameter';
    it('should raise an error because have a invalid radix parameter', (done) => {

        const textToTest = `var num = parseInt("071");
                            var num = parseInt("071", "abc");
                            `;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have invalid radix parameter', (done) => {

        const textToTest = 'var num = parseInt(\'071\', 8);';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
