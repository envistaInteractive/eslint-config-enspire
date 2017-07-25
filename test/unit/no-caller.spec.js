'use strict';

describe('no-caller Validations', () => {

    const errorMessageByEslint = 'Avoid arguments.callee';

    it('should raise an error when arguments.caller is used', (done) => {

        const textToTest = `function recursiveFunction (n) {\n
                                \n
                                \tif (n <= 0) {\n
                                    \n
                                    \t\treturn;\n
                                    \n
                                \t}\
                                \n
                                \targuments.callee(n - 1);\n
                                \n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when arguments.caller or arguments.callee is not used', (done) => {

        const textToTest = `function recursiveFunction (n) {\n
                                \n
                                \tif (n <= 0) {\n
                                    \n
                                    \t\treturn;\n
                                    \n
                                \t}\
                                \n
                                \trecursiveFunction(n - 1);\n
                                \n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
