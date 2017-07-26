'use strict';

describe('no-inner-declaration Validations', () => {

    const errorMessageByEslint = 'Move function declaration to function body';

    it('should raise an error when a function is declared in nested blocks', (done) => {

        const textToTest = `function x () {
                                if (true) {
                                    function y () {
                                        return 'sample';
                                    }
                                }
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a function is not declared in nested blocks', (done) => {

        const textToTest = `function x () {
                                if (true) {
                                    y = function() {
                                        return 'sample';
                                    }
                                }
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
