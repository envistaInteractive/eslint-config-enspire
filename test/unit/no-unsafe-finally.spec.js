'use strict';

describe('no-unsafe-finally Validations', () => {

    const errorMessageByEslint = 'Unsafe usage of';

    it('Should raise an error when a finally statement return a value', (done) => {

        const textToTest = `try {\n
                                \treturn 'ok'\n
                            } catch(error) {\n
                                \treturn 'error';\n
                            } finally {\n
                                \treturn 'overwritten value'\n;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('Should not raise an error when a finally statement doesn\'t return a value', (done) => {

        const textToTest = `try {\n
                                \treturn 'ok'\n
                            } catch(error) {\n
                                \treturn 'error';\n
                            } finally {\n
                                \tvar finallyVar = 'sample';\n;
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });
    
});
