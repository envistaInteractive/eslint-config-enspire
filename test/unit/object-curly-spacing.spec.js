'use strict';

describe('No object curly spacing Validations', () => {

    const errorMessageByEslint = 'object-curly-spacing';

    it('should raise error when There is a space \'}\'.', (done) => {

        const textToTest = 'var obj = {\'foo\' : \'bar\'};';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when There is a space before \'}\'.', (done) => {

        const textToTest = 'var obj = { \'foo\' : \'bar\' };';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
