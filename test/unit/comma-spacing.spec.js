'use strict';

describe('comma-spacing Validations', () => {
    const errorMessagesByEslint = {
        required: 'A space is required',
        noShouldBe: 'There should be no space'
    };

    it('(Testing option after = true) should raise an error when there isn\'t a spacing after comma', (done) => {
        const textToTest = `sum(1,2);`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.required);
        return done();
    });

    it('(Testing option after = true) should not raise an error when there is a spacing after comma', (done) => {
        const textToTest = `sum(1, 2);`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.required);
        return done();
    });

    it('(Testing option before = false) should raise an error when there is a spacing before comma', (done) => {
        const textToTest = `subtract(1 ,2);`;
        global.expect(global.executeOnText(textToTest)).to.include(errorMessagesByEslint.noShouldBe);
        return done();
    });

    it('(Testing option before = false) should not raise an error when there isn\'t a spacing before comma', (done) => {
        const textToTest = `subtract(1, 2);`;
        global.expect(global.executeOnText(textToTest)).to.not.include(errorMessagesByEslint.noShouldBe);
        return done();    
    });

});

