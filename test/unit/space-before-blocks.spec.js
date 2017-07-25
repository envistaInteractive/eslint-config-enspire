'use strict';

describe('space-before-blocks Validations', () => {

    const errorMessageByEslint = 'Missing space before opening brace';

    it('should raise error because not have space before block', (done) => {

        const textToTest = 'function a(){}';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error because have space before block', (done) => {

        const textToTest = 'function a() {}';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
