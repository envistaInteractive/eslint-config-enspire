'use strict';

describe('eol-last Validations', () => {

    const errorMessagesByEslint = {
        required: 'Newline required at end of file but not found',
        noRequired: 'Newline not allowed at end of file'
    };

    it('should raise an error when there is not a newline at end of file', (done) => {

        const textToTest = `function myFunction() {
                            
                                return 'sample';
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.required);
        return done();

    });

    it('should not raise an error when there is a newline at end of file', (done) => {

        const textToTest = `function myFunction() {
                            
                                return 'sample';
                            
                            }\n`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.required);
        return done();

    });

});
