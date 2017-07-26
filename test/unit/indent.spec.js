'use strict';

describe('indent Validations', () => {

    const errorMessageByEslint = 'Expected indentation of 4 spaces';
    it('should raise an error because not has indentation of 4 spaces', (done) => {

        const textToTest = `if (true) {
                              var b = 'b';
                              function foo() {
                                var d = 'd';
                              }
                            }`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not has indentation', (done) => {

        const textToTest = 'if (true) { var b = \'b\'; function foo() { var d = \'d\';}}';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
