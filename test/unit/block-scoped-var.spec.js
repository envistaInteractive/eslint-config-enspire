'use strict';

describe('block-scoped-var Validations', () => {

    const errorMessageByEslint = 'used outside of binding context';

    it('should raise an error when a variables is used outside of its binding context', (done) => {

        const textToTest = `var myFunction = function(p) {
                                
                                if (p === 100) {
                                    
                                        var text = 'one hundred';
                                    
                                }
                                anotherFunction(text);
                                
                            };`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a variables is used inside of its binding context', (done) => {

        const textToTest = `var myFunction = function(p) {
                                
                                var text = 'zero';
                                if (p === 100) {
                                    
                                    text = 'one hundred';
                                    
                                }
                                anotherFunction(text);
                                
                            };`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
