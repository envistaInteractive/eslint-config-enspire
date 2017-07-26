'use strict';

describe('no-multi-spaces Validations', () => {

    const errorMessagesByEslint = 'Multiple spaces found before';

    it('should raise an error when there are several spaces in an assignment', (done) => {

        const textToTest = 'var myVar =      \'value\'';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint);
        return done();

    });

    it('should not raise an error when there aren\'t several spaces in an assignment', (done) => {

        const textToTest = 'var myVar = \'value\'';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint);
        return done();

    });

    it('should raise an error when there are several spaces among the end of a statement and a comment', (done) => {

        const textToTest = 'var myVar = \'value\'         //My comment';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint);
        return done();

    });

    it('shouldnt raise an error when there arent several spaces among the end of a statement and a comment', (done) => {

        const textToTest = 'var myVar = \'value\' //My comment';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint);
        return done();

    });

});
