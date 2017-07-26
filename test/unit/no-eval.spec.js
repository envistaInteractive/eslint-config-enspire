'use strict';

describe('no-eval Validations', () => {

    const errorMessageByEslint = 'eval can be harmful';

    it('should raise an error when the \'eval\' function is used', (done) => {

        const textToTest = 'eval(\'var a = 0\');';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when the \'eval\' function is not used', (done) => {

        const textToTest = `class MyClass {
                                
                                myFunction () {
                                    
                                    this.eval("var a = 0");
                                    
                                }
                                
                                eval (p) {
                                    
                                    //code for my 'eval' function
                                    
                                }
                                
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
