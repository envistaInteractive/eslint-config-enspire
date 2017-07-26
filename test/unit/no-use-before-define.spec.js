'use strict';

describe('no-use-before-define Validations', () => {

    const errorMessagesByEslint = {
        forVar: '\'myMessage\' was used before it was defined',
        forFunction: '\'myFunction\' was used before it was defined'
    };

    it('should raise an error when a variable is used before to be defined', (done) => {

        const textToTest = `alert(myMessage);
                            var myMessage = 'hi';`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.forVar);
        return done();

    });

    it('should not raise an error when a variable is used after to be defined', (done) => {

        const textToTest = `var myMessage = 'hi';
                            alert(myMessage);`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forVar);
        return done();

    });

    it('shouldnt raise an error when a funct is used before/after to be defined (option functions = false)', (done) => {

        const textToTest = `myFunction();
                            function myFunction () {}`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forFunction);
        return done();

    });

});
