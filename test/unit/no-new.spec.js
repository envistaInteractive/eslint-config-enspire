'use strict';

describe('no-new Validations', () => {

    const errorMessageByEslint = 'Do not use \'new\' for side effects';

    it('should raise an error when a new instance of a class is not assigned to a variable', (done) => {

        const textToTest = 'new MyClass();';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when a new instance of a class is assigned to a variable', (done) => {

        const textToTest = `class MyClass {};
                            var obj1 = new MyClass();`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});

class MyClass {}
new MyClass();
