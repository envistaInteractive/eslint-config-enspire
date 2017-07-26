'use strict';

describe('no-caller Validations', () => {

    const errorMessageByEslint = 'Avoid arguments.callee';

    it('should raise an error when arguments.caller is used', (done) => {

        const textToTest = `function recursiveFunction (n) {
                                
                                if (n <= 0) {
                                    
                                        return;
                                    
                                }
                                
                                arguments.callee(n - 1);
                                
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when arguments.caller or arguments.callee is not used', (done) => {

        const textToTest = `function recursiveFunction (n) {
                                
                                if (n <= 0) {
                                    
                                    return;
                                    
                                }
                                
                                recursiveFunction(n - 1);
                                
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
