'use strict';

describe('no-useless-call Validations', () => {

    const errorMessageByEslint = 'unnecessary \'.call()\'';
    it('should raise an error because have unnecessary .call() and .apply()', (done) => {

        const textToTest = 'foo.call(undefined, 1, 2, 3);';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have unnecessary .call() and .apply()', (done) => {

        const textToTest = `foo.call(obj, 1, 2, 3);
                            foo.apply(obj, [1, 2, 3]);
                            obj.foo.call(null, 1, 2, 3);`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
