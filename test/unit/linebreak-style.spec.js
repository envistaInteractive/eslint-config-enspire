'use strict';

describe('linebreak-style Validations', () => {

    const errorMessagesByEslint = {
        expectedLfMsg: 'Expected linebreaks to be \'LF\' but found \'CRLF\'',
        expectedCrlfMsg: 'Expected linebreaks to be \'CRLF\' but found \'LF\'',
    };

    it('should raise an error when line endings are of Windows', (done) => {

        const textToTest = `function myFunction()\r\n
                            {\r\n
                            \r\n
                                return 'sample';\r\n
                            \r\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.expectedLfMsg);
        return done();

    });

    it('should raise an error when line endings are of Unix', (done) => {

        const textToTest = `function myFunction()\n
                            {\n
                            \n
                                return 'sample';\n
                            \n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.expectedLfMsg);
        return done();

    });

});
