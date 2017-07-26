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

});
