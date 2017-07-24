'use strict';

describe('quotes Validations', () => {

    const errorMessageByEslint = 'Strings must use singlequote';
    it('should raise an error because used single quotes when not is possible', (done) => {

        const textToTest = `var double = "double";
                            var unescaped = "a string containing 'single' quotes";`;

        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not used single quotes when not is possible', (done) => {

        const textToTest = `var single = 'single';
                            var backtick = \`back\${x}tick\`;`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
