'use strict';

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

class SDK {

    constructor (key, user, pass) {

        this.key = key;
        this.user = user;
        this.pass = pass;
        this.isLogged = false;

    }

    login () {

        if (this.key === 'secretkey' && this.user === 'user@company.com' && this.pass === 'mypass') {

            this.isLogged = true;

        }

    }

    syncUser (user) {

        if (this.isLogged) {

            return { user, importance: this.getImportanceOfUser(user.level), message: 'ok' };

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

}

const client = new SDK('secretkey', 'user@company.com', 'mypass');

simulatedServices.routeOfExpress.post('/api/customer', () => {

    try {

        client.login();

    } catch (error) {

        return 'error';

    }

    const randomUserId = Math.floor(Math.random() * (10000 - 1) + 1);
    const newUser = {
        Id: randomUserId,
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
        level: 5
    };

    return client.syncUser(newUser);
    //console.log(client.syncUser(newUser));

});

simulatedServices.routeOfExpress
    .post('/api/products', () => {

        try {

            client.login();

        } catch (error) {

            return 'error';

        }

        const products = [
            {
                id: 1,
                name: 'Product one',
                price: 25.2,
                tax: 16,
                desc: 'The product....\n' +
                        'have x and y'
            }, {
                id: 2,
                name: 'Product two',
                price: 115,
                tax: 12,
                desc: 'The product....\n' +
                'have x and y'
            }
        ];

        const productsToSync = products.map((product) => {

            product.finalPrice = product.price + (product.price * product.tax / 100);
            return product;

        });

        return client.syncProducts(productsToSync);
        //console.log(client.syncProducts(productsToSync));

    });
