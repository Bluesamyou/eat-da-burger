const orm = require('../config/orm')

burgerFunctions = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            orm.read_all("burgers")
                .then(function (data) {
                    resolve(data)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    },
    addBurger: function (values) {
        return new Promise(function (resolve, reject) {
            orm.add("burgers", ["burger_name", "devoured"], [values.burger_name, values.devoured_int])
                .then(function (data) {
                    resolve()
                })
                .catch(function (err) {

                    reject()
                })
        })
    }
}

module.exports = burgerFunctions