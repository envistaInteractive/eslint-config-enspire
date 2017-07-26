'use strict';

describe('no-invalid-this Validations', () => {

    const errorMessageByEslint = 'xxxx';
    it('should raise an error because have invalid this', (done) => {

        const textToTest = `(function () {
                                var _this = this;

                                this.a = 0;
                                baz(function () {
                                    return _this;
                                });
                            })();`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have invalid this', (done) => {

        const textToTest = `function Foo() {
                            var _this = this;

                            // OK, this is in a legacy style constructor.
                            this.a = 0;
                            baz(function () {
                                return _this;
                            });
                        }`;
        let result = global.executeOnText(textToTest);
        global.expect(result).to.not.include(errorMessageByEslint);
        return done();

    });

});
