'use strict';

describe('unicode-bom Validations', () => {

    const errorMessageByEslint = 'Unexpected Unicode BOM';
    it('should raise an error because have Unicode Byte Order Mark', (done) => {

        const textToTest = `\ufeff 
                            var abc;`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it(`should not raise an error because 
        not have Unicode Byte Order Mark`, (done) => {

            const textToTest = 'var abc;';
            let result = global.executeOnText(textToTest);
            global.expect(result).to.not.include(errorMessageByEslint);
            return done();

        });

});
