'use strict';

describe('keyword-spacing Validations', () => {

    const errorMessagesByEslint = {
        after: 'Expected space(s) after \\"else\\"',
        before: 'xpected space(s) before \\"else\\"'
    };

    it('should raise an error when the keyword \'else\' has not one space before', (done) => {

        const textToTest = `var myVar;
                            if (true) {
                                myVar = true;
                            }else {
                                myVar = false;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.before);
        return done();

    });

    it('should not raise an error when the keyword \'else\' has one space before', (done) => {

        const textToTest = `var myVar;
                            if (true) {
                                myVar = true;
                            } else {
                                myVar = false;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.before);
        return done();

    });

    it('should raise an error when the keyword \'else\' has not one space after', (done) => {

        const textToTest = `var myVar;
                            if (true) {
                                myVar = true;
                            } else{
                                myVar = false;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.after);
        return done();

    });

    it('should not raise an error when the keyword \'else\' has one space after', (done) => {

        const textToTest = `var myVar;
                            if (true) {
                                myVar = true;
                            } else {
                                myVar = false;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.after);
        return done();

    });

});
