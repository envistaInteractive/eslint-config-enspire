'use strict';

describe('no-with Validations', () => {

    const errorMessageByEslint = 'Unexpected use of \'with\' statement.';
    it('should raise an error because have \'with\'', (done) => {

        const textToTest = `with (point) {
                                r = Math.sqrt(x * x + y * y); // is r a member of point?
                            }`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have \'with\'', (done) => {

        const textToTest = 'const r = ({x, y}) => Math.sqrt(x * x + y * y);';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
