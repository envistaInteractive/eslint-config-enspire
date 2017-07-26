'use strict';

describe('consistent-this Validations', () => {

    const errorMessagesByEslint = {
        unexpectedAlias: 'Unexpected alias \'that\' for \'this\'',
        designatedAlias: 'Designated alias \'self\' is not assigned to \'this\''
    };

    it('should raise an error when \'this\' is assigned to a variables different to \'self\'', (done) => {

        const textToTest = 'var that = this;';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.unexpectedAlias);
        return done();

    });

    it('should raise an error when \'self\' have a value different to \'this\'', (done) => {

        const textToTest = 'var self = \'different value to this\';';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.designatedAlias);
        return done();

    });

    it('should not raise an error when \'this\' is assigned to the variable \'self\'', (done) => {

        const textToTest = 'var self = this;';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.unexpectedAlias);
        return done();

    });

});
