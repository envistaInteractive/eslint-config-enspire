'use strict';

describe('no-extra-bind Validations', () => {

    const errorMessageByEslint = 'The function binding is unnecessary';
    it('should raise an error because has bind extras', (done) => {

        const textToTest = `try {
                                var x = (function () {
                                }).bind(bar);
                            }catch(e){}`;

        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not has bind extras', (done) => {

        const textToTest = `try {
                                function () {
                                    var boundGetName = () => {
                                        return "ESLint";
                                    }.bind(this);
                                }
                            }catch(e){}`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
