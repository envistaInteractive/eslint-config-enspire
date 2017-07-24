'use strict';

describe('no-duplicate-case Validations', () => {

    const errorMessageByEslint = 'Duplicate case label';

    it('should raise an error when a case clause is duplicated in a switch statement', (done) => {

        const textToTest = `switch (auth.method) {\n
                                \tcase 'basic':\n
                                \t\tbreak;\n
                                \tcase 'jwt':\n
                                \t\tbreak;\n
                                \tcase 'jwt':\n
                                \t\tbreak;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there aren\'t case duplicated clauses in a switch statement', (done) => {

        const textToTest = `switch (auth.method) {\n
                                \tcase 'basic':\n
                                \t\tbreak;\n
                                \tcase 'jwt':\n
                                \t\tbreak;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
