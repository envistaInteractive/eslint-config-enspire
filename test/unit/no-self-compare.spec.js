'use strict';

describe('no-self-compare Validations', () => {

    const errorMessageByEslint = 'Comparing to itself is potentially pointless';

    it('should raise an error when a variable is compared to itself', (done) => {

        const textToTest = `myVar = 'sample';
                            if (myVar === myVar) {
                                anotherFunction();
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a variable is not compared to itself', (done) => {

        const textToTest = `myVarA = 'sample1';
                            myVarB = 'sample2';
                            if (myVarA === myVarB) {
                                anotherFunction();
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
