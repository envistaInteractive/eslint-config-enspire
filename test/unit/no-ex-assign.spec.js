'use strict';

describe('no-ex-assign Validations', () => {

    const errorMessageByEslint = 'Do not assign to the exception parameter';

    it('should raise an error when the error parameter of the catch is reassigned', (done) => {

        const textToTest = `try {
                                sum(1, 2);
                            } catch (error) {
                                error = 'is no a number';
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when the error parameter of the catch is not reassigned', (done) => {

        const textToTest = `try {
                                sum(1, 2);
                            } catch (error) {
                                return;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
