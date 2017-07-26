'use strict';

describe('no-self-assign Validations', () => {

    const errorMessageByEslint = '\'myVarA\' is assigned to itself';

    it('should raise an error when a variable is assigned to itself', (done) => {

        const textToTest = `var myVarA = '1';
                            myVarA = myVarA;`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a variable is not assigned to itself', (done) => {

        const textToTest = `var myVarA = '1';
                            var myVarB = myVarA;`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
