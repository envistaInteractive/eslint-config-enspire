'use strict';

describe('no-unreachable Validations', () => {

    const errorMessageByEslint = 'Unreachable code';

    it('Should raise an error when a statement can\'t be reachable in a function', (done) => {

        const textToTest = `var x = function() {\n
                                \treturn 'sample';\n
                                \tvar num = 1;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('Should not raise an error when a statement can be reachable in a function', (done) => {

        const textToTest = `var x = function() {\n
                                \tvar num = 1;\n
                                \treturn num;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
