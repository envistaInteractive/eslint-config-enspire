'use strict';

describe('no-irregular-whitespace Validations', () => {

    const errorMessageByEslint = 'Irregular whitespace not allowed';

    it('should raise an error if there are irregular spaces', (done) => {

        const textToTest = `function thing(){
                                return 'test'; \u2029
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error if there are not irregular spaces', (done) => {

        const textToTest = `function thing(){
                                return 'test';
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
