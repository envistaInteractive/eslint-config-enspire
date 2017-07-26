'use strict';

describe('dot-location Validations', () => {

    const errorMessagesByEslint = {
        asObject: 'Expected dot to be on same line as object',
        asProperty: 'Expected dot to be on same line as property'
    };

    it('should raise an error when a dot is not in the same line of the property', (done) => {

        const textToTest = `var name = user.
                                name;`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.asProperty);
        return done();

    });

    it('should not raise an error when a dot is in the same line of the property', (done) => {

        const textToTest = `var name = user
                                .name;`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.asProperty);
        return done();

    });

});
