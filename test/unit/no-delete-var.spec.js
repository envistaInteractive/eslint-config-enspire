'use strict';

describe('no-delete-var Validations', () => {

    const errorMessageByEslint = 'Variables should not be deleted';
    it('should raise an error because delete a var', (done) => {

        const textToTest = `var x;
                            delete x;`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not delete a var', (done) => {

        const textToTest = 'var x;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
