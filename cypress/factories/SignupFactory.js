const {faker} = require('@faker-js/faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '21999999999',
            address: {
                postalcode: '24240181',
                street: 'Rua Noronha Torrezão',
                number: '1000',
                details: 'Ap 142',
                district: 'Santa Rosa',
                city_state: 'Niterói/RJ'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data

    }

}