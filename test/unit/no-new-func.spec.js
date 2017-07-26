'use strict';

describe('no-new-func Validations', () => {

    const errorMessageByEslint = 'The Function constructor is eval';

    it('should raise an error when a function is created by \'Function\' constructor', (done) => {

        const textToTest = 'var myFunction = new Function(\'p1\', \'p2\', \'return p1+p2\');';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a function is not created by \'Function\' constructor', (done) => {

        const textToTest = `var myFunction = function (p1, p2) {
                            
                                return p1 + p2;
                            
                            };`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
