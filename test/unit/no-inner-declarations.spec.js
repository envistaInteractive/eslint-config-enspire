'use strict';

describe('no-inner-declaration Validations', () => {

    const errorMessageByEslint = 'Move function declaration to function body';

    it('should raise an error when a function is declared in nested blocks', (done) => {

        const textToTest = `function x () {\n
                                \tif (true) {\n
                                    \t\tfunction y () {\n
                                        \t\t\treturn 'sample';\n
                                    \t\t}\n
                                \t}\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a function is not declared in nested blocks', (done) => {

        const textToTest = `function x () {\n
                                \tif (true) {\n
                                    \t\ty = function() {\n
                                        \t\t\treturn 'sample';\n
                                    \t\t}\n
                                \t}\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
