'use strict';

describe('no-undef-init Validations', () => {

    const errorMessageByEslint = 'It\'s not necessary to initialize \'foo\' to undefined';
    it('should raise an error because is initializing with undefine', (done) => {

        const textToTest = 'var foo = undefined;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not is initializing with undefine', (done) => {

        const textToTest = `var foo;
                            const baz = undefined;`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
