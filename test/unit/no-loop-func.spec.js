'use strict';

describe('no-loop-func Validations', () => {

    const errorMessageByEslint = 'Don\'t make functions within a loop';

    it('should raise an error when a function is made within a loop', (done) => {

        const textToTest = `for (var i = 10; i; i--) {

                               (function() { return i; })();

                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('shouldnt raise an err when a fun is made within a loop, but no references to vars outer the scope.', (done) => {

        const textToTest = `for (var i = 10; i; i--) {

                                var a = function () {
                            
                                    return 2;
                            
                                };
                                a();
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
