'use strict';

describe('no-implicit-globals Validations', () => {

    const errorMessageByEslint = 'Implicit global variable, assign as global property instead';

    it('should raise an error when var varName = \'value\' is used to declare a global variable', (done) => {

        const textToTest = 'myVar = 1;';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a global variable is set explicitly', (done) => {

        const textToTest = 'window.globalVar = 1;';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
