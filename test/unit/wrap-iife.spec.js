'use strict';

describe('wrap-iife Validations', () => {

    const errorMessagesByEslint = {
        any: 'Wrap an immediate function invocation in parentheses',
        inside: 'Wrap only the function expression in parens',
        outside: 'Move the invocation into the parens that contain the function'
    };

    it('should raise an error when the call expression is wrapped', (done) => {

        const textToTest = 'var iifeFunction = (function () { return { y: 1 };}());';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.inside);
        return done();

    });

    it('should not raise an error when the call expression is not wrapped', (done) => {

        const textToTest = 'var iifeFunction = (function () { return { y: 1 };})();';
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.inside);
        return done();

    });

});
