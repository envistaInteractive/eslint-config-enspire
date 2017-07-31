'use strict';

function FuncException (message) {

    this.message = message;

}

const simulatedServices = {
    routeOfExpress: {
        post: (route, func) => {

            if (typeof func === 'function') {

                return func();

            } else {

                return 'error';

            }

        }
    }
};

const utils = {
    validateIntCode: (internationalCode) => {

        const re = /([A-Z]{3}[0-9]{3})/;
        return re.test(internationalCode);

    }
};

const config = (() => {

    return {
        url: 'http://loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong-url.com/'
    };

})();

class SDK {

    constructor (url, key, user, pass) {

        this.url = url;
        this.key = key;
        this.user = user;
        this.pass = pass;
        this.isLogged = false;
        this.currencies = [ 'usd' ];
        this.availableCountries = [{
            id: 0,
            code: 'us',
            name: 'United States'
        }, {
            id: 1,
            code: 'ca',
            name: 'Canada'
        }];
        this.payMethodsByCountry = [['visa', 'mastercard', 'paypal'], [ 'paypal' ]];

    }

    login (callback) {

        if (this.key === 'secretkey' && this.user === 'user@company.com' && this.pass === 'mypass') {

            this.callback = callback;
            this.isLogged = true;

        } else {

            throw new FuncException('Wrong in login data');

        }

    }

    getCurrencies () {

        return this.currencies;

    }

    syncUser (user) {

        if (this.isLogged) {

            return { user, importance: this.getImportanceOfUser(Number(user.level)), message: 'ok' };

        } else {

            return { user, message: 'error' };

        }

    }

    syncProducts (products) {

        if (this.isLogged) {

            return { products, message: 'ok' };

        } else {

            return { products, message: 'error' };

        }

    }

    getImportanceOfUser (level) {

        if (isNaN()) {

            return 'invalid level';

        }

        let importance = '';
        switch (level) {

            case 1:
                importance = 'very low';
                break;
            case 2:
                importance = 'low';
                break;
            case 3:
                importance = 'normal';
                break;
            case 4:
                importance = 'high';
                break;
            case 5:
                importance = 'very high';
                break;
            default:
                importance = 'normal';
                break;

        }
        return importance;

    }

    getThis () {

        let self = this;
        return self;

    }

    getPrototype () {

        return Object.getPrototypeOf(this);

    }

    isValidURL () {

        return {
            url: this.url,
            valid: true
        };

    }

}

const client = new SDK(config.url, 'secretkey', 'user@company.com', 'mypass');
const urlCallback = 'http://example.com/callback';
const validateCallbackURL = client.isValidURL.bind({ url: urlCallback });

simulatedServices.routeOfExpress.post('/api/customer', () => {

    try {

        let urlCB = validateCallbackURL();
        if (urlCB.valid) {

            client.login(urlCB.url);

        } else {

            client.login('/');

        }

    } catch (error) {

        //console.log(error);
        return error;

    }

    let randomUserId = Math.floor(Math.random() * (10000 - 1) + 1);
    randomUserId = randomUserId * 2;
    randomUserId++;

    const octalCode = '071'; //How to define a octal
    const hexCode = parseInt(octalCode, 16); //How to do a good conversion of types
    const hexMessage = 'message using hexadecimal \xA9'; //How to use hexadecimal numbers
    const newUser = {
        Id: randomUserId,
        octalCode,
        hexCode,
        hexMessage,
        Taxable: true,
        BillAddr: {
            Line1: 'Street 4',
            City: 'The city',
            PostalCode: '11001100'
        },
        GivenName: 'José',
        FamilyName: 'Smith',
        CompanyName: 'The company name',
        DisplayName: 'jose.smith',
        Active: true,
        PrimaryPhone: {
            FreeFormNumber: '9001234567'
        },
        PrimaryEmailAddr: {
            Address: 'jose.smith@thecompany.com'
        },
        level: '5'
    };

    return client.syncUser(newUser);
    //console.log(client.syncUser(newUser));

});

simulatedServices.routeOfExpress
    .post('/api/products', () => {

        try {

            let urlCB = client.isValidURL.call({ url: 'http://example.com' });
            if (urlCB.valid) {

                client.login(urlCB.url);

            } else {

                client.login('/');

            }

        } catch (error) {

            //console.log(error);
            return error;

        }

        const products = [
            {
                id: 1,
                internationalCode: 'ATC010',
                name: 'Product one',
                price: 25.2,
                tax: 16,
                currency: 'usd',
                tags: ['tag1', 'tag2', 'tag3'],
                desc: 'The product....\n' +
                        'have x and y'
            }, {
                id: 2,
                internationalCode: 'YTG056',
                name: 'Product two',
                price: 115,
                tax: 12,
                currency: 'usd',
                tags: ['tag1', 'tag4', 'tag6'],
                desc: 'The product....\n' +
                        'have x and y'
            }
        ];

        let readyToSync = true;
        const filter = 'tag1';

        checkingLoop:
        for (let index in products) {

            for (let tag in products[index].tag) {

                if (tag === filter) {

                    if (!('id' in products[index]) || !utils.validateIntCode(products[index].internationalCode)) {

                        readyToSync = false;
                        break checkingLoop;

                    }

                }

            }

        }

        if (!readyToSync) {

            return 'Some product have not identifier or a invalid international code';

        }

        const productsToSync = products.map((product) => {

            product.finalPrice = product.price + (product.price * product.tax / 100);
            return product;

        });

        return client.syncProducts(productsToSync);
        //console.log(client.syncProducts(productsToSync));

    });
