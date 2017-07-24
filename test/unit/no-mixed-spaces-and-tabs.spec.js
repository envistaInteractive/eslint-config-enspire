'use strict';

describe.only('No Mixed spaces and tabs', () => {

    const errorMessageByEslint = 'Mixed spaces and tabs';

    it('should raise error when are merge simple spaces with tabspaces', (done) => {

        const textToTest = `function add(x, y) { 
                                ${'\t'}return x + y;
                            }`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise error when are merge simple spaces with tabspaces', (done) => {

        const textToTest = `function add(x, y) { 
                                return x + y;
                            }`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
