'use strict';

describe('dot-notation Validations', () => {
    const betterDotNotation = 'is better written in dot notation';
    const sintaxError = 'is a syntax error';
    it('should raise error when dot-notation is not used', (done) => {
        let text = 'b = a[\'a\'];';
        global.expect(global.executeOnText(text)).to.include(betterDotNotation);
        return done();
    });
    it('should not raise error when dot-notation is used', (done) => {
        let text = 'b = a.a;';
        global.expect(global.executeOnText(text)).to.not.include(betterDotNotation);
        return done();
    });
    it('should not raise error when keyword is used', (done) => {
        let text = 'Joi.string().default(\'defValue\');';
        global.expect(global.executeOnText(text)).to.not.include(sintaxError);
        return done();
    });
    it('should not raise error when try catch is used', (done) => {
        let text = 'try{}catch(e){}';
        global.expect(global.executeOnText(text)).to.not.include(sintaxError);
        return done();
    });
});
