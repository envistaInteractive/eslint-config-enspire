'use strict';

describe('no-alert Validations', () => {

    const errorMessagesByEslint = {
        alert: 'Unexpected alert',
        confirm: 'Unexpected confirm',
        prompt: 'Unexpected alert'
    };

    it('should raise an error when alert() is used', (done) => {

        const textToTest = 'alert(myVar)';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.alert);
        return done();

    });

    it('should not raise an error when confirm() is not used', (done) => {

        const textToTest = 'var permission = anotherFunctionToConfirm(\'Do you want continue?\');';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.confirm);
        return done();

    });

});
