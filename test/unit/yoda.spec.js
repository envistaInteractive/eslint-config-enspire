'use strict';

describe('yoda Validations', () => {

    const errorMessageByEslint = 'Expected literal to be on the right side of ===';

    it('should raise an error when the left side of the comparison is a str and the right one is a var', (done) => {

        const textToTest = `if ('js' === language){
                            
                                var myVar = true;
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when the left side of the comparison is a var and the right one is a str', (done) => {

        const textToTest = `if (language === 'js'){
                            
                                var myVar = true;
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
