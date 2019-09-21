const orm = require('../config/orm')

burgerFunctions = {
    getAll: function () {
        return new Promise(function (resolve, reject) {
            orm.selectAll("burgers")
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
            orm.insertOne("burgers", ["burger_name", "devoured"], [values.burger_name, values.devoured_int])
                .then(function (data) {
                    resolve()
                })
                .catch(function (err) {

                    reject()
                })
        })
    },
    devour: function (id) {
        return new Promise(function (resolve, reject) {
            orm.updateOne("burgers", { devoured: 1 }, `id=${id}`)
                .then(function () {
                    resolve()
                })
                .catch(function (err) {
                    reject()
                })
        })
    }
}

module.exports = burgerFunctions