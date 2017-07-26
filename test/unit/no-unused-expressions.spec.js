'use strict';

describe('no-unused-expressions Validations', () => {

    const errorMessageByEslint = 'Expected an assignment or function call and instead saw an expression';
    it('should raise an error because have unused expressions', (done) => {

        const textToTest = '{0}';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have unused expressions', (done) => {

        const textToTest = `{} // In this context, this is a block statement,
                            not an object literal                         
                            {myLabel: someVar} // In this context, this is a block
                            statement with a label and expression, not an object literal
                            `;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
