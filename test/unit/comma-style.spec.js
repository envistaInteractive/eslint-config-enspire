'use strict';

describe('comma-style Validations', () => {

    const errorMessageByEslint = '\',\' should be placed last';
    it(`should raise an error because not has a comma after
    and on the same line as an array element`, (done) => {

            const textToTest = `var foo = ["apples"
                           , "oranges"];`;
            let result = global.executeOnText(textToTest);
            global.expect(result).to.include(errorMessageByEslint);
            return done();

    });

    it(`should not raise an error because has a comma after
    and on the same line as an array element`, (done) => {

            const textToTest = `var foo = ["apples",
                            "oranges"];`;
            let result = global.executeOnText(textToTest);
            global.expect(result).to.not.include(errorMessageByEslint);
            return done();

    });

});
