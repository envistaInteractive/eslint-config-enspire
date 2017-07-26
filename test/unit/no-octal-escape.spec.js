'use strict';

describe('no-octal-escape Validations', () => {

    const errorMessageByEslint = 'Don\'t use octal: \'\\\\251\'. Use \'\\\\u....\' instead';

    it('should raise an error when there is an octal escape sequence', (done) => {

        const textToTest = 'var copyr = \'Copyright \\251\'';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there isn\'t an octal escape sequence', (done) => {

        const textToTest = 'var copyr = \'Copyright \\u0049 \'';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});

