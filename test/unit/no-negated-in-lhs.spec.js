'use strict';

describe('no-negated-in-lhs Validations', () => {

    const errorMessageByEslint = 'The \'in\' expression\'s left operand is negated.';

    it('should raise an error when negative left operand affects the variable and not the expression', (done) => {

        const textToTest = `if (!id in myObject) {
                                return false
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when negative left operand affects the expression and not the variable', (done) => {

        const textToTest = `if (!(id in myObject)) {
                                return false
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
