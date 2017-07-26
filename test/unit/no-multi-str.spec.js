'use strict';

describe('no-multi-str Validations', () => {

    const errorMessageByEslint = 'Multiline support is limited to browsers supporting ES5 only';

    it('should raise an error when there are multiline strings', (done) => {

        const textToTest = `var multilineStr = 'First part \\
                                                second part';`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error when there aren\'t multiline strings', (done) => {

        const textToTest = `var multilineStr = 'First part \\n' +
                                                'second part';`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessageByEslint);
        return done();

    });

});
