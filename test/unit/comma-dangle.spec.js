'use strict';

describe('comma-dangle Validations (option: never)', () => {

    const errorMessagesByEslint = {
        unexpected: 'Unexpected trailing comma',
        missing: 'Missing trailing comma'
    };

    it('should raise an error when a there is trailing comma', (done) => {

        const textToTest = `var config = {\n
                                \tkey: 'ABC123456',\n
                                \tuser: 'root',\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.unexpected);
        return done();

    });

    it('should not raise an error when a there isn\'t trailing comma', (done) => {

        const textToTest = `var config = {\n
                                \tkey: 'ABC123456',\n
                                \tuser: 'root'\n
                            }`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.unexpected);
        return done();

    });

});