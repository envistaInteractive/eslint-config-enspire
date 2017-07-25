'use strict';

describe('block-scoped-var Validations', () => {

    const errorMessageByEslint = 'used outside of binding context';

    it('should raise an error when a variables is used outside of its binding context', (done) => {

        const textToTest = `var myFunction = function(p) {\n
                                \n
                                \tif (p === 100) {\n
                                    \n
                                    \t\tvar text = 'one hundred';
                                    \n
                                \t}\n
                                \tanotherFunction(text);\n
                                \n
                            };`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a variables is used inside of its binding context', (done) => {

        const textToTest = `var myFunction = function(p) {\n
                                \n
                                \t var text = 'zeto';
                                \tif (p === 100) {\n
                                    \n
                                    \t\ttext = 'one hundred';
                                    \n
                                \t}\n
                                \tanotherFunction(text);\n
                                \n
                            };`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
