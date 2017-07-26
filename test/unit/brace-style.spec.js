'use strict';

describe('brace-style Validations', () => {

    const errorMessagesByEslint = {
        openMessage: 'Opening curly brace does not appear on the same line as controlling statement',
        openMessageAllman: 'Opening curly brace appears on the same line as controlling statement',
        bodyMessage: 'Statement inside of curly braces should be on next line',
        closeMessage: 'Closing curly brace does not appear on the same line as the subsequent block',
        closeMessageSingle: 'Closing curly brace should be on the same line as opening curly brace or on the line after the previous block',
        closeMessageStroustruopAllman: 'Closing curly brace appears on the same line as the subsequent block'
    };

    it('should raise an error when curly brace doesn\'t be in same line where function is declared', (done) => {

        const textToTest = `function myFunction()
                            {
                            
                                return 'sample';
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.openMessage);
        return done();

    });

    it('should not raise an error when curly brace be in same line where function is declared', (done) => {

        const textToTest = `function myFunction() {
                            
                                return 'sample';
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.openMessage);
        return done();

    });

});
