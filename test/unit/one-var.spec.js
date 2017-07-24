'use strict';

describe('No One var Validations', () => {

    const errorMessageByEslint = 'one-var';

    it('should raise error when Combine this with the previous \'var\' statement', (done) => {

        const textToTest = `function foo() {
                                var bar,
                                    baz;
                            }`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when Combine this with the previous \'var\' statement', (done) => {

        const textToTest = `function foo() {
                                var bar;
                                var baz;
                            }`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
