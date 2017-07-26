'use strict';

describe('no-unreachable Validations', () => {

    const errorMessageByEslint = 'Unreachable code';

    it('Should raise an error when a statement can\'t be reachable in a function', (done) => {

        const textToTest = `var x = function() {
                                return 'sample';
                                var num = 1;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('Should not raise an error when a statement can be reachable in a function', (done) => {

        const textToTest = `var x = function() {
                                var num = 1;
                                return num;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
