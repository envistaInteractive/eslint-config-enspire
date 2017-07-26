'use strict';

describe.only('no-invalid-this Validations', () => {

    const errorMessageByEslint = 'Unexpected \'this\'.';
    it('should raise an error because have invalid this', (done) => {

        const textToTest = '"use strict"; this.a = 0;';
        let result = global.executeOnText(textToTest);
        global.expect(result).to.include(errorMessageByEslint);
        return done();

    });

    it('should not raise an error because not have invalid this', (done) => {

        const textToTest = `"use strict";
                            function Foo() {
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
