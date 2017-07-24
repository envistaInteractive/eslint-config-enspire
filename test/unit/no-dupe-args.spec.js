'use strict';

describe('no-dupe-args Validations', () => {

    const errorMessageByEslint = 'Duplicate param';

    it('should raise an error when a variable is duplicated in a function definition', (done) => {

        const textToTest = `var sum = function (a, a) {\n
                                \treturn a + a;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there aren\'t variables duplicated in a function definition', (done) => {

        const textToTest = `var sum = function (a, b) {\n
                                \treturn a + b;\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
