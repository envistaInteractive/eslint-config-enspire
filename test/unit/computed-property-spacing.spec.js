'use strict';

describe('computed-property-spacing Validations', () => {

    const errorMessageByEslint = 'There should be no space after \'[\'';
    it('should raise an error because has spaces inside computed property brackets', (done) => {

        const textToTest = 'obj[  \'foo\']';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not has spaces inside computed property brackets', (done) => {

        const textToTest = 'obj[\'foo\']';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
