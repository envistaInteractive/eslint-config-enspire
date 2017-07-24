'use strict';

describe('operator-linebreak Validations', () => {

    const errorMessageByEslint = 'should be placed at the end of the line';
    it('should raise an error when linebreaks is placed before the operator', (done) => {

        const textToTest = `var fullHeight = borderTop 
                            + innerHeight
                            + borderBottom;`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when linebreaks is placed after the operator', (done) => {

        const textToTest = `var fullHeight = borderTop +
                                innerHeight +
                                borderBottom;`;

        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
