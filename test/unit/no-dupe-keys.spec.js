'use strict';

describe('no-dupe-keys Validations', () => {

    const errorMessageByEslint = 'Duplicate key';

    it('should raise an error when a key is duplicated in a literal object', (done) => {

        const textToTest = `var user = {\n
                                \temail: 'sample@company.com',\n
                                \temail: 'sample2@company.com'\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there aren\'t duplicated keys in a literal object', (done) => {

        const textToTest = `var user = {\n
                                \temail: 'sample@company.com',\n
                                \tcompany: 'Company'\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
