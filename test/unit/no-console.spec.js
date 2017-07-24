'use strict';

describe('no-console Validations', () => {

    const errorMessageByEslint = 'Unexpected console statement';

    it('should raise an error when a method of console is used', (done) => {

        const textToTest = 'console.log(\'a\');';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a method of console is not used', (done) => {

        const textToTest = 'methodOfExample(\'a\');';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
