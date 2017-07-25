'use strict';

describe('no-extend-native Validations', () => {

    const errorMessageByEslint = 'Object prototype is read only, properties should not be added';

    it('should raise an error when properties are added to Object prototype', (done) => {

        const textToTest = 'Object.prototype.common = \'Common message\';';
        global.expect(global.executeOnText(textToTest)).to.include(errorMessageByEslint);
        return done();

    });

});
