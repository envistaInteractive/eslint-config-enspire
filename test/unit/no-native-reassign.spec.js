'use strict';

describe('no-native-reassign Validations', () => {

    const errorMessagesByEslint = {
        forProcess: 'Read-only global \'process\' should not be modified',
        forNoGlobalObject: 'Read-only global \'o\' should not be modified'
    };

    it('should raise an error when the global object process is reassigned', (done) => {

        const textToTest = 'process = {}';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.forProcess);
        return done();

    });

    it('should not raise an error when the a no-global object is reassigned', (done) => {

        const textToTest = `var o = {};
                            o = 'object';`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forNoGlobalObject);
        return done();

    });

});
