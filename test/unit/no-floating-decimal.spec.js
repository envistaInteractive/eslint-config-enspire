'use strict';

describe('no-floating-decimal Validations', () => {

    const errorMessageByEslint = 'A leading decimal point can be confused with a dot';
    it('should raise an error because have Floating Decimals', (done) => {

        const textToTest = 'try { var num = .5; }catch(e){}';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have Floating Decimals', (done) => {

        const textToTest = 'var num = 0.5;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
