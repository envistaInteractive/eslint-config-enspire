'use strict';

describe('array-bracket-spacing Validations', () => {

    const errorMessageByEslint = 'There should be no space before \']\'';
    it('should raise an error because has spaces between array brackets and other tokens', (done) => {

        const textToTest = 'var arr = [\'foo\', \'bar\' ];';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not has spaces between array brackets and other tokens', (done) => {

        const textToTest = 'var arr = [\'foo\', \'bar\', \'baz\'];';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
