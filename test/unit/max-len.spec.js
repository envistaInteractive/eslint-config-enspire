'use strict';

describe('max-len Validations', () => {
    const errorMessagesByEslint = {
        forLine: 'exceeds the maximum line length of',
        forComment: 'exceeds the maximum comment line length of'
    };

    it(`(Test for option 'code') should raise an error when a line has more length than maximum line length`, (done) => {
        const textToTest = `var a = 123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890;`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.forLine);
        return done();
    });

    it('(Test for option \'code\' ) should not raise an error when a line has less length than maximum line length', (done) => {
        const textToTest = `var b = 1234567890;`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forLine);
        return done();
    });

    it('(Test for option \'ignoreUrls\' = true ) should not raise an error when a line which includes an URL has more length than maximum line length', (done) => {
        const textToTest = `var c = 'http://sampleurl.com/123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890';`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forLine);
        return done();
    });

    it('(Test for option \'ignoreComments\' = by default = true) should not raise an error when a comment line has more length than maximum line length', (done) => {
        const textToTest = `/* \n \
                            *This is a comment which exceeds the maximum line length for comments.................................................................. \n \
                            */`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forComment);
        return done();
    });

    it('(Test for option \'ignoreTrailingComments\' = by default = true) should not raise an error when a comment line has more length than maximum line length', (done) => {
        const textToTest = `var d = '1234567890'; //This is a comment which exceeds the maximum line length for comments..................................................................`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forComment);
        return done();
    });
});
