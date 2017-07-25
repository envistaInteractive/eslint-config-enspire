'use strict';

describe('no-case-declaration Validations', () => {

    const errorMessageByEslint = 'Unexpected lexical declaration in case block';

    it('Should raise an error when a function or variable is created in a case which has not brackets', (done) => {

        const textToTest = `switch (myNum) {\n
                                \n
                                \tcase 1:\n
                                    \t\tvar x1 = 'one';\n
                                    \t\tbreak;\n
                                \n
                                \tcase 2:\n
                                    \t\tfunction f() {}\n
                                    \t\tbreak;\n
                                \n
                                \tdefault:\n
                                    \t\tvar xDef = 'zero';\n
                                \n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('Should not raise an error when a function or var is created in a case which has brackets', (done) => {

        const textToTest = `switch (myNum) {\n
                                \n
                                \tcase 1:\n
                                    \t\tvar x1 = 'one';\n
                                    \t\tbreak;\n
                                \n
                                \tcase 2: {\n
                                    \t\tfunction f() {}\n
                                    \t\tbreak;\n
                                \t}\n
                                \n
                                \tdefault:\n
                                    \t\tvar xDef = 'zero';\n
                                \n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
