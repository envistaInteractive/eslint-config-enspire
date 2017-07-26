'use strict';

describe('no-case-declarations Validations', () => {

    const errorMessageByEslint = 'Unexpected lexical declaration in case block';

    it('Should raise an error when a function or variable is created in a case which has not brackets', (done) => {

        const textToTest = `switch (myNum) {
                                
                                case 1:
                                    var x1 = 'one';
                                    break;
                                
                                case 2:
                                    function f() {}
                                    tbreak;
                                
                                default:
                                    var xDef = 'zero';
                                
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('Should not raise an error when a function or var is created in a case which has brackets', (done) => {

        const textToTest = `switch (myNum) {
                                
                                case 1:
                                    var x1 = 'one';
                                    break;
                                
                                case 2: {
                                    function f() {}
                                    break;
                                }
                                
                                default:
                                    var xDef = 'zero';
                                
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
