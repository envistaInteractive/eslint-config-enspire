'use strict';

describe('no-func-assign Validations', () => {

    const errorMessageByEslint = 'is a function';

    it('should raise an error when a func which has been written like \'FuncDeclaration\' is overwritten', (done) => {

        const textToTest = `function myFunction() {}
                            myFunction = anotherVar;
                            function myFunction() {
                                return 'sample text';
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a func which has been written lik \'FuncExpression\' is overwritten', (done) => {

        const textToTest = `var myFunction = function () {}
                            myFunction = anotherVar;
                            function myFunction() {
                                return 'sample text';
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
