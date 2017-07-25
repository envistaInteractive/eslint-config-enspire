'use strict';

describe('no-extra-label Validations', () => {

    const errorMessageByEslint = 'This label \'A\' is unnecessary.';
    it('should raise an error because has extra label', (done) => {

        const textToTest = `try {
                                A: while (a) {
                                    break A;
                                }
                            }catch(e){}`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not has extra label', (done) => {

        const textToTest = `try {
                                while (a) {
                                    break A;
                                }
                            }catch(e){}
                            `;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
