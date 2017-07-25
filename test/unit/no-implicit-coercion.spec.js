'use strict';

describe('no-implicit-coercion Validations', () => {

    const errorMessagesByEslint = {
        forBoolean: 'use `Boolean(myVar)` instead',
        forNumber: 'use `Number(myVar)` instead',
        forString: 'use `String(myVar)` instead'
    };

    it('should raise an error when \'!!\' is used to convert value types', (done) => {

        const textToTest = `var myVar = 1;
                            var bolVar = !!myVar;`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.forBoolean);
        return done();

    });

    it('should not raise an error when \'Boolean()\'is used to convert value types', (done) => {

        const textToTest = `var myVar = 0;
                            var bolVar = Boolean(myVar)`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forBoolean);
        return done();

    });

    it('should raise an error when \'1 * variable\' is used to convert value types', (done) => {

        const textToTest = `var myVar = '10';
                            var numVar = 1 * myVar;`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.forNumber);
        return done();

    });

    it('should not raise an error when \'Number()\' is used to convert value types', (done) => {

        const textToTest = `var myVar = '10';
                            var numVar = Number(myVar);`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forNumber);
        return done();

    });

    it('should raise an error when \'"" +\' is used to convert value types', (done) => {

        const textToTest = `var myVar = 1;
                            var strVar = "" + myVar;`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.forString);
        return done();

    });

    it('should not raise an error when \'String()\' is used to convert value types', (done) => {

        const textToTest = `var myVar = 1;
                            var strVar = String(myVar);`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.forString);
        return done();

    });

});
