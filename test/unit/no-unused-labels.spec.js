'use strict';

describe('no-unused-labels Validations', () => {

    const errorMessageByEslint = '\'labelA:\' is defined but never used';

    it('should raise an error when a label is defined but never used', (done) => {

        const textToTest = `var i = 0;
                            labelA:
                            for (i = 0; i < 10; i++) {
                            ;
                                consoleFunction(i);
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a label is defined and is used', (done) => {

        const textToTest = `var i = 0;
                            var j = 0;
                            labelA:
                            for (i = 0; i < 10; i++) {
                            
                                labelB:
                                for (j = 0; j < 5; j++) {
                            
                                    consoleFunction(j);
                                    if (j === 3) {
                            
                                        continue labelA;
                            
                                    }
                                    consoleFunction(i);
                            
                                }
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
