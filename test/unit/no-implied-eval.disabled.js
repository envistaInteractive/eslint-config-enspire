'use strict';

describe('no-implied-eval Validations', () => {

    const errorMessageByEslint = 'xxxx';
    it('should raise an error because have implied eval', (done) => {

        const textToTest = 'setTimeout(\'count = 5\', 10);';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have implied eval', (done) => {

        const textToTest = 'try { setTimeout(()=> {var count = 5} } catch(e){}, 10);';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
