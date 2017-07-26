'use strict';

describe('strict Validations', () => {

    const errorMessageByEslint = 'Use the global form of \'use strict\'';
    it('should raise an error because have xxxx', (done) => {

        const textToTest = 'function foo() {}';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have xxxx', (done) => {

        const textToTest = `'use strict';
                            function foo() {}`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
