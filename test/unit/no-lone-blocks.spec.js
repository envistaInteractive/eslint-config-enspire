'use strict';

describe('no-lone-blocks Validations', () => {

    const errorMessageByEslint = 'Nested block is redundant';

    it('should raise an error when there is an unnecessary block within another block', (done) => {

        const textToTest = `if (true) {

                                myFunc1();
                                {

                                    myFunc2();

                                }

                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there isn\'t an unnecessary block within another block', (done) => {

        const textToTest = `if (true) {

                                myFunc1();
                                myFunc2();

                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
