'use strict';

describe('New Parents Validations', () => {

    const errorMessageByEslint = 'Missing \'()\' invoking a constructor.';

    it('should raise error when a object is initialized without \'()\'', (done) => {

        const textToTest = `var person = new Person;
                            var person = new (Person)();`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when a object is initialized with \'()\'', (done) => {

        const textToTest = `var person = new Person();
                            var person = new (Person)();`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
