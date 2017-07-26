'use strict';

describe('no-dupe-args Validations', () => {

    const errorMessageByEslint = 'Duplicate param';

    it('should raise an error when a variable is duplicated in a function definition', (done) => {

        const textToTest = `var sum = function (a, a) {
                                return a + a;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there aren\'t variables duplicated in a function definition', (done) => {

        const textToTest = `var sum = function (a, b) {
                                return a + b;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
