'use strict';

describe('quote-props Validations', () => {

    const errorMessageByEslint = 'Unnecessarily quoted property';
    it(`should raise an error because is used
        quotation marks around literal property names
        of objects that are not strictly required`, (done) => {

        const textToTest = `var object1 = {
                                "a-b": 0,
                                "0x0": 0,
                                "1e2": 0,
                                "true": 0,
                            };

                            var object2 = {
                                'foo': 'bar',
                                baz: 42,
                                true: 0,
                                0: 0,
                                'qux-lorem': true
                            };`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it(`should not raise an error because is not used
        quotation marks around literal property names
        of objects that are not strictly required`, (done) => {

        const textToTest = `var object1 = {
                                "a-b": 0,
                                "0x0": 0,
                                "1e2": 0
                            };

                            var object2 = {
                                foo: 'bar',
                                baz: 42,
                                true: 0,
                                0: 0,
                                'qux-lorem': true
                            };`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
