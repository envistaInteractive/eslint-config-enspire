'use strict';

describe('no-unsafe-finally Validations', () => {

    const errorMessageByEslint = 'Unsafe usage of';

    it('Should raise an error when a finally statement return a value', (done) => {

        const textToTest = `try {
                                return 'ok'
                            } catch(error) {
                                return 'error';
                            } finally {
                                return 'overwritten value';
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('Should not raise an error when a finally statement doesn\'t return a value', (done) => {

        const textToTest = `try {
                                return 'ok'
                            } catch(error) {
                                return 'error';
                            } finally {
                                var finallyVar = 'sample';;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
