'use strict';

describe('no-return-assign Validations', () => {

    const errorMessagesByEslint = {
        forCommonFunction: 'Return statement should not contain assignment',
        forArrowFunction: 'Arrow function should not return assignment'
    };

    it('should raise an error when the return of a function contains an assignment', (done) => {

        const textToTest = `var myFunction = function(){

                                return aVar = 'sample';
                            
                            };`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.forCommonFunction);
        return done();

    });

    it('should not raise an error when the return of a function doesn\'t contain an assignment', (done) => {

        const textToTest = `var myFunction = function(){

                                var aVar = 'sample';
                                return aVar === 'sample';
                            
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forCommonFunction);
        return done();

    });

});
