'use strict';

describe('no-proto Validations', () => {

    const errorMessageByEslint = 'The \'__proto__\' property is deprecated';

    it('should raise an error when .__proto__ is used to get the prototype', (done) => {

        const textToTest = 'var myVar = obj.__proto__';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when Object.getPrototypeOf() is used to get the prototype', (done) => {

        const textToTest = 'var myVar = Object.getPrototypeOf(myObj)';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
